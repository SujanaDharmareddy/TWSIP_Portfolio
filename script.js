document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Add your logic to handle the form submission here
        // For example, you can use AJAX to send the form data to a server
        // and display a success message to the user.
    });
});