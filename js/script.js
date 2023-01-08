











document.querySelectorAll('.circle').forEach(circle => {
  circle.addEventListener('click', function() {
    this.classList.add("aggrandi");
    this.children[1].classList.add("affiche");
    this.children[2].classList.add("affiche");
  })
})

document.querySelectorAll('.circle>span').forEach(cross => {
  cross.addEventListener('click', function(event) {
    event.stopPropagation();
    this.parentElement.classList.remove("aggrandi");
    this.parentElement.children[1].classList.remove("affiche");
    this.classList.remove("affiche");
  })
})














