from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate
from flight.views import FlightView
from flight.models import Flight
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token
from datetime import datetime, date

# ? Django orjinalinde bulunan base test için(template bölümünde detaylı işlenecek)
from django.urls import reverse


class FlightTestCase(APITestCase):

    #! Gün ve saate göre user'a yada staffuser'a gösterdiği uçuş bilgisini değişkenliklerini ayarlamak için zaman ve tarih değişkenleri views içerisindeki ile aynı (alt 3 satır)
    now = datetime.now()
    current_time = now.strftime('%H:%M:%S')
    today = date.today()

    def setUp(self):
        self.factory = APIRequestFactory()
        self.flight = Flight.objects.create(  # !Flight modelse testini sağlamk için database'e uçuş oluşturuyoruz
            flight_number='FlightNumber_test',
            operation_airlines='OperationsAirlines_test',
            departure_city='DepartureCity_test',
            arrival_city='ArrivalCity_test',
            # date_of_departure='2023-01-19', #! today kullanmadan önce manuel tarih yazdık
            # ! views da kullandığımız zaman alma işlemini manueli iptal edip değişken üzerinden ayarladık
            date_of_departure=f'{self.today}',
            # etd='06:34:55', #! current_time kullanmadan önce manuel saat yazdık
            # ! views da kullandığımız saat alma işlemini manueli iptal edip değişken üzerinden ayarladık
            etd=f'{self.current_time}'
        )
        self.user = User.objects.create_user(  # ! User oluşturabilmek için django model da bulunan User'ı kullanıyoruz ve User yaratıyoruz
            username='admin',
            password='Sifreaa1'
        )
        # ! test için user oluşturduğumuzda otomatik olararak oluşan token'a ulaşıp self.token değişkenine atıyoruz
        self.token = Token.objects.get(user=self.user)

    def test_flight_list_as_non_auth_user(self):
        request = self.factory.get('/flight/flights/')
        # print(reverse('flight-list'))
        response = FlightView.as_view({'get': 'list'})(request)
        print(response)
        self.assertEqual(response.status_code, 200)
        # ! staff olmayan userda reservation biligisi gelmemesi gerektiği için not contains(içermez) kontrolü yapıyoruz
        self.assertNotContains(response, 'reservation')
        self.assertEqual(len(response.data), 0)  # ! plan gereği normal user sadece zamanı bugün ve şuanki saatten yüksek olan uçuşları  görebilir test esnasında now = datetime.now() 3lü bloğu çalıştığında test çalışma saatini dataya alacağı için normal user hiç bir uçuş göremeyecektir. bu nedenle response.data daki data sayısı 0 olacaktır. bu noktada responsedata daki data sayısı 0 mı bunu kontrol ediyoruz

    #! Authenticated durumuna göre flight views veri döndüğünde staff_user için uçuşları oluşturulmuş olan tüm rezervasyon ile dönerken; normal userlara sadece sadece uygun uçuşları dönecek bunun  testi için test_flight_list_as_staff_user metodunu yazıyoruz(postmanda test ederken flight oluştamamız gerekiyor burda da test etmek için setUp alanına DataBase için flight objesi oluştyrması sağlayacağım)

    def test_flight_list_as_staff_user(self):
        request = self.factory.get(
            '/flight/flights/', HTTP_AUTHORIZATION=f'Token {self.token}')
        #! Gelen istek içerisinde postmande olduğu gibi Authorization tokenı koyduğumuz zaman otomatik token işlemlerinin de testini gerçekleştirmiş olacağız
        #! User'a staff user çzelliği ekliyorum bu noktada eklmemem deki amaç staff user için dönen veriyi kontrol etmek
        #! setUp da oluşturduğumuz usera a staff user test için is_staff özelliğini True yapıyoruz
        self.user.is_staff = True
        self.user.save()  # ! Staff özelliğini kayıt ediyoruz
        #! authenticate işlemi için token kullanmak yerine force_authenticatede kullanabilirz testten import edilir
        # force_authenticate(request, user=self.user)
        # ! isteğin(request) içerisinde bulunan user boş olacağı için yarattığımız staff user istek yapmış gibi test olması için aktarıyoruz
        request.user = self.user
        response = FlightView.as_view({'get': 'list'})(request)
        self.assertEqual(response.status_code, 200)  # ! status 200 kontrolü
        # ! staff olan userda reservation biligisi olması gerektiği için  contains(içerir) kontrolü yapıyoruz
        self.assertContains(response, 'reservation')
        # ! normal user da zaman dilimi geçtiği için uçuşları göremiyoruz fakat staffUser da geçmiş uçuşlarıda görebildiğimiz için response.data da bulunan data sayısı 1 tane bile varsa Yetki zaman uçuş bağlantılı liste getirmeninde testini yapmış oluruz
        self.assertEqual(len(response.data), 1)

    #! permissions.py da bulunan IsStafforReadOnly'i yani flight POST(create) işlemini  test etmek için post işlemini 3 farklı yöntemle kullanacağız
        # Token olmadan put yani create işlemi yapılmasını denemesine karşılık 401 response simülesi (RESPONSE.Authentication credentials were not provided.)
        # Admin yani staff yetkisine sahip olmayan Token ile post işlemi yapılmasına karşılık 403 response simülesi (RESPONSE.You do not have permission to perform this action.)
        # Admin yetksine sahip userın Post işlemi yapması sonrası 201 yani başaralı response  simülesi(RESPONSE.flight detail)
    def test_flight_create_as_non_auth_user(self):  # ! 401 response
        request = self.factory.post(
            '/flight/flights/')
        response = FlightView.as_view({'post': 'create'})(request)
        self.assertEqual(response.status_code, 401)

    def test_flight_create_as_auth_user(self):  # ! 403 response
        request = self.factory.post(
            '/flight/flights/', HTTP_AUTHORIZATION=f'Token {self.token}')

        # request.user = self.user
        response = FlightView.as_view({'post': 'create'})(request)
        self.assertEqual(response.status_code, 403)

    # ! 201 response (Yukarda bulunan create işleminde database'e uçuş oluşturuyoruz burda ise post işlemini simüle ediyoruz bu neden Json formatında olacak )
    def test_flight_create_as_staff_user(self):
        data = {
            "flight_number": "TK01Test",
            "operation_airlines": "THY",
            "departure_city": "Esk",
            "arrival_city": "Ank",
            "date_of_departure": "2022-01-08",
            "etd": "16:35:00",
        }
        self.user.is_staff = True
        self.user.save()
        request = self.factory.post(
            '/flight/flights/', data, HTTP_AUTHORIZATION=f'Token {self.token}')

        response = FlightView.as_view({'post': 'create'})(request)
        self.assertEqual(response.status_code, 201)
    #! PUT-Update işlemleri için

    def test_flight_update_as_staff_user(self):
        data = {
            "flight_number": "TK02Test",
            "operation_airlines": "THY",
            "departure_city": "Esk",
            "arrival_city": "Ank",
            "date_of_departure": "2022-01-08",
            "etd": "16:35:00",
        }
        print(self.flight.id)

        self.user.is_staff = True
        self.user.save()
        request = self.factory.put(
            '/flight/flights/1/', data, HTTP_AUTHORIZATION=f'Token {self.token}')

        response = FlightView.as_view(
            {'put': 'update'})(request, pk='1')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(Flight.objects.get(id=1).flight_number, 'TK02Test')
