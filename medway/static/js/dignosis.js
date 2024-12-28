document.getElementById('diagnosisForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Here you would typically handle the form submission
    alert('Diagnosis submitted successfully!');
    this.reset();
});