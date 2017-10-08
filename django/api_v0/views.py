from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings
import json
import urllib2
import os
import random

class Test(View):
    def get(self, request):
        return JsonResponse({'request-type': 'GET'})

    def post(self, request):
        print request.body
        json_string = json.loads(request.body)
        print 'json string', json_string['tags']

        money = json_string['money']
        tags = json_string['tags']

        if money is not None and tags:
            return self.getFakeJson(10, money, tags)

        return JsonResponse({
            'data': [
                {
                    'activity': 'sightseeing',
                    'city': 'Lviv',
                    'tags': ['photography', 'sightseeing', 'sky-diving'],

                    'activityPrice': 0,
                    'hotelPrice': 50,
                    'flightPrice': 100
                },
                {
                    'activity': 'diving',
                    'city': 'NY',
                    'tags': ['photography', 'sightseeing', 'sky-diving'],

                    'activityPrice': 100,
                    'hotelPrice': 50,
                    'flightPrice': 25
                },
                {
                    'activity': 'Museums',
                    'city': 'Vienna',
                    'tags': ['photography', 'sightseeing', 'sky-diving'],

                    'activityPrice': 0,
                    'hotelPrice': 33,
                    'flightPrice': 100
                }
            ]})

    def getFakeJson(self, num, price, tags):
        if price <= 10:
            return JsonResponse({
            'data': []
        })
        activities = ['climbing', 'swimming', 'museums', 'skydiving', 'diving', 'sightseeing', 'photography', 'eat out', 'paintball', 'lasertag']
        cities = ['London', 'Paris', 'Lviv', 'Kiev', 'Warsaw', 'Krakow', 'Berlin', 'Munich', 'Vienna', 'Venice']
        trips = []

        random.seed(price)

        for i in range(random.randint(3,10)):
            cityIndx = random.randint(0,len(cities)-1)
            activityIndx = random.randint(0,len(activities)-1)

            city = cities[cityIndx]
            activity = activities[activityIndx]

            total = price
            hotelPrice = random.randint(0, total)
            #total -= hotelPrice
            flightPrice = random.randint(0, total)
            #total -= hotelPrice
            activityPrice = random.randint(0, total)
            #total -= activityPrice

            trips.append({
                    'activity': activity,
                    'city': city,
                    'tags': ['photography', 'sightseeing', 'sky-diving'],

                    'activityPrice': activityPrice,
                    'hotelPrice': hotelPrice,
                    'flightPrice': flightPrice
                }
                )

        return JsonResponse({'data': trips})





