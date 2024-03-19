# mypickupapp/settings.py

INSTALLED_APPS = [

    'users', 
    'corsheaders',

]


MIDDLEWARE = [

    'corsheaders.middleware.CorsMiddleware',

]

CORS_ALLOW_ALL_ORIGINS = True  # For development only!