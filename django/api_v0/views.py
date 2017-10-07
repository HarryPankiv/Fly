from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from .models import Flight
import json
import urllib2
from bs4 import BeautifulSoup





import os
def populate():
    wiki = 'https://avia.tickets.ua/en/m/search/results?session_id=93dd9629e05d0bedcba1ecc71a892e9a'
    page = urllib2.urlopen(wiki)
    soup = BeautifulSoup(page)
    print soup.prettify()




class Test(View):
    def get(self, request):
        #populate()
        return JsonResponse({'request-type': 'GET'})

    def post(self, request):
        print request.body
        json_string = json.loads(request.body)
        return JsonResponse(json_string)