from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings

import os

class Test(View):
    def get(self, request):
        return JsonResponse({'request-type': 'GET'})

    def post(self, request):
        return JsonResponse({'data_from_frontend': request})