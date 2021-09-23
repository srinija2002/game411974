from django.http.response import HttpResponse
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.
def srinija411974(request):
    return HttpResponse("This page is from srinija411974")
def hello(request):
    return render(request,'datahandle.html')

def datahandle(request):
    s1=int(request.POST['var1'])
    s2=int(request.POST['var2'])
    res=s1+s2
    return render(request,'result.html',{'result':res})
