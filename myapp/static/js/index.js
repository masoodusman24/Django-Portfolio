let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');
    
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active'); // Prevents null error

            section.classList.add('show-animate');
        } else {
            section.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Close menu only if it's active
    if (navbar.classList.contains('active')) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }

    let footer = document.querySelector('footer');
    footer.classList.toggle('show-animate', window.innerHeight + window.scrollY >= document.scrollingElement.scrollHeight);
});

function sendMessage(event) {
    event.preventDefault();
    let formData = new FormData(document.getElementById("contactForm"));

    fetch("/send-email/", {  // Updated URL for sending emails
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => console.error("Error:", error));
}
