from django.shortcuts import render, HttpResponse, HttpResponseRedirect
from django.contrib.auth import authenticate, login, logout
from django.urls import reverse

from .models import User
# Create your views here.
def index(request):
    return render(request, 'Builder/index.html')


def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            url = reverse('index')
            return HttpResponseRedirect(url)
        else:
            message = "There was An error Loggin you in...Try again!"
            return render(request, "Builder/login.html", {
                "message" : message
            })
        
    return render(request, 'Builder/login.html')

def register(request):
    if request.method == "POST":
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm = request.POST.get('confirm')
        if password != confirm:
            message = "Passwords must match...Try again!"
            return render(request, 'Builder/register.html', {
                "message": message
            })
        try: 
            user = User.objects.create_user(username, email, password)
            user.save()
        except:
            message = "There was An error Registring you...Try again!"
            return render(request, 'Builder/register.html', {
                "message" : message
            })
        login(request, user)
        url = reverse("index")
        return HttpResponseRedirect(url)
        
    return render(request, "Builder/register.html")

def logout_view(request):
    logout(request)
    url = reverse("index")
    return HttpResponseRedirect(url)

def template(request):
    return render(request, 'Builder/template1.html')