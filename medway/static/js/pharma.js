 // Handle file upload
 document.querySelector('input[type="file"]').addEventListener('change', function(e) {
    if (e.target.files.length > 0) {
        alert('File uploaded successfully: ' + e.target.files[0].name);
    }
});

// Handle search
document.querySelector('button').addEventListener('click', function() {
    const searchTerm = document.querySelector('input[type="text"]').value;
    if (searchTerm) {
        alert('Searching for pharmacies near: ' + searchTerm);
        // Implement actual search functionality here
    }
});