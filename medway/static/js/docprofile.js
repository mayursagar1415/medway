function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}

function bookAppointment() {
    alert('Appointment booking feature will be implemented soon!');
}

function handleDiagnosis(event) {
    event.preventDefault();
    alert('Your diagnosis request has been submitted. A doctor will review it shortly.');
}

function handlePrescription(event) {
    event.preventDefault();
    alert('Your prescription has been uploaded. We will process your order soon.');
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});