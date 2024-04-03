document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the default form submission

    // Simulate a login process
    console.log('Logging in...');

    // Redirect to the profile page as an example
    window.location.href = 'choose-team-size.html';
});
