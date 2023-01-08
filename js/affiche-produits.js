fetch('../js/liste.php')
.then(function (reponse) {
	return reponse.json();
})

.then(function(products){
	products.forEach(element => {
		document.querySelector('.page_produits').innerHTML += `<div class="produit_bloc ${element.categorie}" id="${element.id}">
                                        <div class="produit_photo">
                                            <img src="${element.img}" loading="lazy" alt="photo_${element.id}">
                                        </div>

                                        <div class="produit_action">
                                            <div class="produit_info">
                                                <h2>${element.titre}</h2>
                                                <p>${element.description}</p>
                                            </div>

                                            <div class="produit_prix">
                                                <p>${element.prix} €/Kg</p>
                                            </div>
                                        </div>
                                    </div>`;
    });





    // Gestion du choix de la catégorie 
    // Je donne la classe selected au lien sur lequel jai cliqué

    document.querySelectorAll('.categorie>a').forEach(bouton => {
        bouton.addEventListener('click', function(event) {
            event.preventDefault();

            document.querySelectorAll('.categorie>a').forEach(bouton => bouton.classList.remove('selected'));
            this.classList.toggle('selected');
            

            let categorie = this.getAttribute("id");
            document.querySelectorAll('.produits>*').forEach(bloc => bloc.style.display = "none");
            document.querySelectorAll('.produits>.'+categorie).forEach(bloc => bloc.style.display = "block");
        });
    });
    









    // Gestion du prix dans le panier

    let prixTotal = 0;
    let prodChoisis = [];

    document.querySelectorAll('.produit_prix>p').forEach(prix => {
        prix.addEventListener('click', function() {

            if(!this.classList.contains('ajoute')) {

                this.classList.toggle('ajoute');
                prixTotal += parseFloat(this.innerText)/10;
                document.querySelector('.panier>p').innerText = prixTotal.toFixed(2) + ' €';  
                localStorage.setItem('prixStock', prixTotal);

                let titre = this.parentElement.parentElement.children[0].children[0].innerText;
                let descr = this.parentElement.parentElement.children[0].children[1].innerText;
                let prix = this.innerText;
                let img = this.parentElement.parentElement.parentElement.children[0].children[0].getAttribute('src');

                prix = parseFloat(prix)/10;
                prodChoisis.push([titre, descr, prix, img]);

                console.log(prodChoisis);
                
                localStorage.setItem('produitsChoisis', prodChoisis);

            }


        });
    });


    





});
