from django.urls import path
from . import views
urlpatterns=[
    path('Game',views.Game,name='Game'),
    path('dice',views.dice,name='dice'),
    path('cards',views.cards,name='cards')

]