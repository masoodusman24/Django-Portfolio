# Portfolio Website

This is a Django-based portfolio website that showcases personal and professional information, including projects, skills, and contact details. The website is designed to create a professional online presence.

## Features

- Dynamic web pages for showcasing projects and skills
- Contact form with email functionality
- Responsive design for all devices
- Admin panel for managing content

## Prerequisites

- Python (version 3.8 or higher)
- Django (version 3.2 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/portfolio-website.git
   ```

2. Navigate to the project directory:

   ```bash
   cd portfolio-website
   ```

3. Create and activate a virtual environment:

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
   ```

4. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Apply migrations:

   ```bash
   python manage.py migrate
   ```

6. Run the development server:

   ```bash
   python manage.py runserver
   ```

7. Open your browser and navigate to:

   ```
   http://127.0.0.1:8000/
   ```

## Usage

- Navigate to the homepage to view your portfolio.
- Use the admin panel to update content such as projects, skills, and contact details.
- Visitors can use the contact form to send you messages directly.

## Directory Structure

```
myapp/
|-- manage.py
|-- portfolio/
|   |-- migrations/
|   |-- templates/
|   |-- static/
|   |-- models.py
|   |-- views.py
|-- README.md
```

## Contributing

Contributions are welcome! If you'd like to improve this project, feel free to fork the repository and submit a pull request.

## Acknowledgments

- Inspired by various portfolio website templates and designs.
- Thanks to the Django documentation and community for their support.
