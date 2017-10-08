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

        return self.getFakeJson(10, money, tags)


    def getFakeJson(self, num, price, tags):
        if price <= 10 or price is None or not tags:
            return JsonResponse({
            'data': []
        })
        activities = ['climbing', 'swimming', 'museums', 'skydiving', 'diving', 'sightseeing', 'photography', 'eat out', 'paintball', 'lasertag']
        cities = ['london', 'paris', 'lviv', 'kiev', 'warsaw', 'krakow', 'berlin', 'munich', 'vienna', 'venice']

        a = [t for t in tags if t.lower() in activities]
        if not a:
            a = activities
        c = [t for t in tags if t.lower() in cities]
        if not c:
            c = cities
        print(c)
        trips = []

        random.seed(price)

        for i in range(random.randint(3,3+len(a)-1)):
            cityIndx = random.randint(0,len(c)-1)
            activityIndx = random.randint(0,len(a)-1)

            city = c[cityIndx]
            activity = a[activityIndx]

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





