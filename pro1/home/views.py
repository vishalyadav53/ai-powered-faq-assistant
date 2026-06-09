from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'index.html')

def shila(request):
    return render (request,'cba.html')
