# mypickupapp/urls.py
from django.urls import path
from users.views import user_login

urlpatterns = [
    path('api/login/', user_login, name='user_login'),
    # Other paths...
]
