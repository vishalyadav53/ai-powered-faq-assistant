from django.http import HttpResponse

# Create your views here.
def home(request):
    data='hello world'
    return HttpResponse(data)
def fun(request):
    return HttpResponse('python is fun to solve')

def file(request):
    data=open(r'D:\django a3\pro1\pro1\abc.html')
    a=data.read()
    print(a)
    data.close()
    return HttpResponse(a)