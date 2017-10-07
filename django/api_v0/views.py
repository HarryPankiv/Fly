from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings
import json
import urllib2
import os

class Test(View):
    def get(self, request):
        return JsonResponse({'request-type': 'GET'})

    def post(self, request):
        print request.body
        json_string = json.loads(request.body)
        return JsonResponse({
            'data': [
                {
                    'city': 'Lviv',
                    'tag': ['photography', 'sightseeing', 'sky-diving'],
                    'avgPriceOfFlight': 0,
                    'avgPriceOfHotel': 50,
                    'totalPrice': 100,
                },
                {
                    'city': 'NY',
                    'tag': ['photography', 'driving', 'sky-diving'],
                    'avgPriceOfFlight': 1000,
                    'avgPriceOfHotel': 150,
                },
                {
                    'city': 'London',
                    'avgPriceOfFlight': 500,
                    'avgPriceOfHotel': 100,
                    'tag': ['extreme sports', 'driving', 'sky-diving'],
                }

            ]})