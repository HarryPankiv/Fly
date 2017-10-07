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
                    'activity': 'sightseeing',
                    'city': 'Lviv',
                    'tags': ['photography', 'sightseeing', 'sky-diving'],

                    'activityPrice': 0,
                    'hotelPricePP': 50,
                    'flightPricePP': 100
                },
                {
                    'activity': 'diving',
                    'city': 'NY',
                    'tags': ['photography', 'sightseeing', 'sky-diving'],

                    'activityPrice': 100,
                    'hotelPricePP': 50,
                    'flightPricePP': 25
                },
                {
                    'activity': 'Museums',
                    'city': 'Vienna',
                    'tags': ['photography', 'sightseeing', 'sky-diving'],

                    'activityPrice': 0,
                    'hotelPricePP': 33,
                    'flightPricePP': 100
                }
            ]})