from django.http import JsonResponse
from django.core.mail import send_mail
from django.conf import settings

def send_email(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # Send email
        send_mail(
            f"Message from {name}",
            message,
            email,
            [settings.EMAIL_HOST_USER],
            fail_silently=False,
        )

        # Return a JSON response
        return JsonResponse({"message": "Email sent successfully!"})

    return JsonResponse({"message": "Invalid request!"}, status=400)
