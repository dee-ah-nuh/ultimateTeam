document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Include CSRF token if needed
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => {
        if (response.ok) {
            return response.json(); // Process the success response
        }
        throw new Error('Login failed'); // Handle login failure
    })
    .then(data => {
        console.log(data.message);
        window.location.href = 'choose-sport.html'; // Redirect on success
    })
    .catch(error => {
        console.error('Error:', error);
        // Optionally, inform the user that login failed
    });
});
