// frontend/js/choose-sport.js
document.querySelectorAll('.sport-btn').forEach(button => {
    button.addEventListener('click', function() {
        const teamSize = this.textContent;
        console.log('Team Size:', teamSize);
        // Here, you can redirect the user or take other actions based on the selection

        window.location.href = 'choose-sport.html';
    });
});
