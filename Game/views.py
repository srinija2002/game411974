from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def Game(request):
    return render(request,'game.html')

def dice(request):
    return render(request,'dice.html')

def cards(request):
    return render(request,'cards.html')