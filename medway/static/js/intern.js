 // Search functionality
 document.querySelector('input[type="text"]').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.internship-card');
    
    cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// Category filter
document.querySelector('select').addEventListener('change', function(e) {
    const category = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.internship-card');
    
    cards.forEach(card => {
        if (category === 'all categories') {
            card.style.display = 'block';
            return;
        }
        const cardCategory = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = cardCategory.includes(category) ? 'block' : 'none';
    });
});

// Apply button functionality
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        const position = this.closest('.internship-card').querySelector('h3').textContent;
        alert(`Application submitted for ${position}! We will contact you soon.`);
    });
});