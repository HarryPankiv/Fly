from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings
import json

import os

class Test(View):
    def get(self, request):
        return JsonResponse({'request-type': 'GET'})

    def post(self, request):
        print request.body
        json_string = json.loads(request.body)
        return JsonResponse(json_string)