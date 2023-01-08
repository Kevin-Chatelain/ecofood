
document.querySelectorAll('.bi-heart-fill').forEach(heart => {
    heart.addEventListener('click', function() {
        this.classList.toggle('liked');
    });
});

