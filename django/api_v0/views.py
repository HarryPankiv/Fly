from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from django.conf import settings
from .models import Item
from random import randint
import json
import urllib2
import os

class Test(View):
    def get(self, request):
        return JsonResponse({'request-type': 'GET'})

    def post(self, request):
        print request.body
        data = json.loads(request.body)
        tags = data['tags']
        budget = data['money']
        people = data['visitorCount']
        nights = data['nightsCount']
        lst = []
        hotel_budget = (int(budget)/int(people))/int(nights)
        for tag in tags:
            for item in Item.objects.all():
                if item.activity_name.lower() == tag.lower() or item.city.lower() == tag.lower():
                    if (item.activity_price + item.flight_price + item.hotel_price) <= (float(hotel_budget) * 0.75):
                        lst.append(item)
        return JsonResponse({'data':serialize('json', lst)})
