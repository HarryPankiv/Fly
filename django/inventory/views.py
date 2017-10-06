from django.views.generic import View
from django.http import HttpResponse, JsonResponse
from django.conf import settings

import os


class ReactAppView(View):

    def get(self, request):

        return JsonResponse({"fuck": "fuck you"})

"""        try:

            with open(os.path.join(settings.REACT_APP, 'build', 'index.html')) as file:
                return HttpResponse(file.read())

        except :
            return HttpResponse(
                'index.html not found ! build your React app !!',
                status=501,
            )
            """
