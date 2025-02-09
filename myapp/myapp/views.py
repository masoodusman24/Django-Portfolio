from django.http import JsonResponse # type: ignore
from django.core.mail import send_mail # type: ignore
from django.conf import settings # type: ignore
from django.shortcuts import render # type: ignore

def home(request):
    return render(request, "index.html") 

def send_email(request):
    if request.method == "POST":
        name = request.POST.get("name")
        sender_email = request.POST.get("email")
        message = request.POST.get("message")

        subject = f"Message from {name}"
        email_message = f"Name: {name}\nEmail: {sender_email}\n\nMessage:\n{message}"

        # Send email (Using EMAIL_HOST_USER as sender)
        send_mail(
            subject,
            email_message,
            settings.EMAIL_HOST_USER,  # Use your configured email
            ["masoodusman24@gmail.com"],  # Replace with your actual email
            fail_silently=False,
        )

        return JsonResponse({"message": "Email sent successfully!"})

    return JsonResponse({"message": "Invalid request!"}, status=400)
