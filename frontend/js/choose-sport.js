// frontend/js/choose-sport.js
document.querySelectorAll('.sport-btn').forEach(button => {
    button.addEventListener('click', function() {
        const sportName = this.textContent;
        console.log('Selected sport:', sportName);
        // Here, you can redirect the user or take other actions based on the selection
        window.location.href = 'choose-team-size.html';

    });
});
