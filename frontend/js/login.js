document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    console.log('Email:', email, 'Password:', password);

    // Here, you would typically send the email and password to your backend for verification
    // For demonstration purposes, we're just logging it to the console

    // Example of redirection after successful login (you'll need to implement actual login logic)
    window.location.href = 'choose-sport.html';

});
