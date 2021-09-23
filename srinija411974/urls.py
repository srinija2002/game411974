from django.urls import path
from . import views
urlpatterns=[
    path('srinija411974',views.srinija411974,name='srinija411974'),
    path('hello',views.hello,name='hello'),
    path('datahandling',views.datahandle,name='datahandle')

]