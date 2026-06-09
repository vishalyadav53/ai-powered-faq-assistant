from django.urls import path
from home import views

urlpatterns = [
    path('home/',views.home),
    path('shila/',views.shila,name='ab'),
]
