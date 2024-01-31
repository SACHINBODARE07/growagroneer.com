// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop - 70, // Adjust for header height
            behavior: 'smooth',
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
  var contactForm = document.getElementById('contactForm');
  var successMessage = document.getElementById('successMessage');

  contactForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Assuming you want to perform some validation here before showing the success message
      // For simplicity, let's assume the form is always valid
      successMessage.classList.remove('hidden');
  });
});


