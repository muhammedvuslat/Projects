from django.urls import path
from rest_framework import routers
from .views import CategoryView, BrandView, ProductView, FirmView,PurchasesView, SalesView

router = routers.DefaultRouter()
router.register('categories', CategoryView)
router.register('brands', BrandView)
router.register('products', ProductView)
router.register('firms', FirmView)
router.register('purchases', PurchasesView)
router.register('sales', SalesView)

urlpatterns = [
    
]

urlpatterns += router.urls
