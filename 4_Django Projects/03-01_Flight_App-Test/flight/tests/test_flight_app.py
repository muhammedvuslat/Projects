from rest_framework.test import APITestCase, APIRequestFactory, force_authenticate
from flight.views import FlightView
from flight.models import Flight
from django.contrib.auth.models import User

# ? Django orjinalinde bulunan base test için(template bölümünde detaylı işlenecek)
from django.urls import reverse


class FlightTestCase(APITestCase):
    def setUp(self):
        self.factory = APIRequestFactory()
        self.flight = Flight.objects.create(  # !Flight modelse testini sağlamk için aynı postmande ki gibi uçuş oluşturuyoruz
            flight_number='FlightNumber_test',
            operation_airlines='OperationsAirlines_test',
            departure_city='DepartureCity_test',
            arrival_city='ArrivalCity_test',
            date_of_departure='2023-01-19',
            etd='06:34:55'
        )
        self.user = User.objects.create_user(  # ! User oluşturabilmek için django model da bulunan User'ı kullanıyoruz ve User yaratıyoruz
            username='admin',
            password='Sifreaa1'
        )

    def test_flight_list_as_non_auth_user(self):
        request = self.factory.get('/flight/flights/')
        # print(reverse('flight-list'))
        response = FlightView.as_view({'get': 'list'})(request)
        print(response)
        self.assertEqual(response.status_code, 200)
        # ! staff olmayan userda reservation biligisi gelmemesi gerektiği için not contains(içermez) kontrolü yapıyoruz
        self.assertNotContains(response, 'reservation')

    #! Authenticated durumuna göre flight views veri döndüğünde staff_user için uçuşları oluşturulmuş olan tüm rezervasyon ile dönerken; normal userlara sadece sadece uygun uçuşları dönecek bunun  testi için test_flight_list_as_staff_user metodunu yazıyoruz(postmanda test ederken flight oluştamamız gerekiyor burda da test etmek için setUp alanına DataBase için flight objesi oluştyrması sağlayacağım)

    def test_flight_list_as_staff_user(self):
        request = self.factory.get({'/flight/flights'})
        # ! User'a staff user çzelliği ekliyorum bu noktada eklmemem deki amaç staff user için dönen veriyi kontrol etmek
        # ! setUp da oluşturduğumuz usera a staff user test için is_staff özelliğini True yapıyoruz
        self.user.is_staff = True
        self.user.save()  # ! Staff özelliğini kayıt ediyoruz
        #! authenticate işlemi için token kullanmak yerine force_authenticate kullanılır testten import edilir
        force_authenticate(request, user=self.user)
        # ! isteğin(request) içerisinde bulunan user boş olacağı için yarattığımız staff user istek yapmış gibi test olması için aktarıyoruz
        request.user = self.user
        response = FlightView.as_view({'get': 'list'})(request)
        self.assertEqual(response.status_code, 200)  # ! status 200 kontrolü
        # ! staff olan userda reservation biligisi olması gerektiği için  contains(içerir) kontrolü yapıyoruz
        self.assertContains(response, 'reservation')
