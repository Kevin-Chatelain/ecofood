









//Génération des articles dans le panier 


let produits = localStorage.getItem('produitsChoisis');
let tableauProd = produits.split(",");

for(let i = 0; i < tableauProd.length; i = i + 4) {



    document.querySelector('.produits_panier').innerHTML += `<div class="bloc_produit_panier">
                                                                    <div class="photo_panier">
                                                                        <img src=${tableauProd[i+3]} loading="lazy" alt="photo_${tableauProd[i]}">
                                                                    </div>

                                                                    <div class="panier_droite">
                                                                        <div class="produit_panier_info">
                                                                            <h3>${tableauProd[i]}</h3>
                                                                            <p>${tableauProd[i+1]}</p>
                                                                        </div>

                                                                        <div class="action_panier">
                                                                            <div class="compteur">
                                                                                <span class="moins">-</span>
                                                                                <span class="quantite"> 100 <span>g</span> </span> 
                                                                                <span class="plus">+</span>
                                                                            </div>
                                                                            <div class="produit_prix">
                                                                                <span class="indications_prix">Prix pour 100g :</span>
                                                                                <p>${tableauProd[i+2]} €</p>
                                                                            </div>
                                                                        </div>
                                                                    <div>
                                                                
                                                                </div>`
}










//Récupération du prix 



let prixTotal = localStorage.getItem('prixStock');
prixTotal = parseFloat(prixTotal);
prixTotal = prixTotal;


document.querySelectorAll('.produit_prix>p').forEach(prix => {
    prix.addEventListener('click', function () {
        let indication = this.parentElement.children[0];
        indication.style.display = 'inline';

        function hide () {
            indication.style.display = 'none';
        }
        
        setTimeout(hide, 3000);
    })
})







//Ajouter 

document.querySelectorAll('.plus').forEach( plus => {
    plus.addEventListener('click', function() {
        prixAjouter = this.parentElement.parentElement.children[1].children[1].innerText;
        prixAjouter = parseFloat(prixAjouter);
        console.log(prixAjouter);
        
        prixTotal = prixTotal + prixAjouter;
        document.querySelector('.panier_final>p').innerText = prixTotal.toFixed(2) + ' €'; 


        let quantite = this.parentElement.children[1].innerText;
        quantite = parseInt(quantite);

        quantite = quantite + 100;
        this.parentElement.children[1].innerText = quantite + ' g';

        if (quantite > 0) {
            this.parentElement.children[0].style.visibility = 'visible';
        }


        
        
        

    })
})




//Enlever 

document.querySelectorAll('.moins').forEach( moins => {
    moins.addEventListener('click', function() {
        prixEnlever = this.parentElement.parentElement.children[1].children[1].innerText;
        prixEnlever = parseFloat(prixEnlever);
        console.log(prixEnlever)
        
        prixTotal = prixTotal - prixEnlever;
        document.querySelector('.panier_final>p').innerText = prixTotal.toFixed(2) + ' €';  


        if (prixTotal <= 0) {
            prixTotal = 0;
            document.querySelector('.panier_final>p').innerText = prixTotal.toFixed(2) + ' €'; 
        }


        let quantite = this.parentElement.children[1].innerText;
        quantite = parseInt(quantite);

        quantite = quantite - 100;
        this.parentElement.children[1].innerText = quantite + ' g';


        
        if (quantite <= 0) {
            quantite = 0;
            this.parentElement.children[1].innerText = quantite + ' g';
            this.style.visibility = "hidden";
        }
        

    })
})





//Si aucune action, afficher le prix initial

document.querySelector('.panier_final>p').innerText = prixTotal.toFixed(2) + ' €';  






//En cas de click sur "mode de paiement"

document.querySelector('#mode_payement').addEventListener('click', function(event) {
    event.preventDefault();
    alert('Veuillez choisir un des modes de paiement ci-dessus.');
})






// Gestion des catégories

document.querySelectorAll('.categorie>a').forEach(bouton => {
    bouton.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelectorAll('.categorie>a').forEach(bouton => bouton.classList.remove('selected'));
        this.classList.toggle('selected');
    });
});


//choix de la récuperation des artices 


document.querySelectorAll('.place').forEach(place => {
    place.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector('#select_emporter').style.display = "none";
        document.querySelector('#select_surplace').style.display = "block";
    
        document.getElementById('mode_payement').style.display = 'none';
        document.getElementById('passer_caisse').style.display = 'block';
    });
});

    



document.querySelectorAll('.emporter').forEach(emporter => {
    emporter.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector('#select_surplace').style.display = "none";
        document.querySelector('#select_emporter').style.display = "block";

        document.getElementById('mode_payement').style.display = 'none';
        document.getElementById('passer_caisse').style.display = 'block';
    });
});





//Gestion du payement 

document.querySelector('#passer_caisse').addEventListener("click", function() {



    //Si sur-place a été séléctionné 

    document.querySelectorAll('.place').forEach(place => {
        if (place.classList.contains('selected')) {

            document.querySelector('#livraison').innerText = '0.00 €'; 
            let prix_payement = parseFloat(document.querySelector('.panier_final>p').innerText);

            document.querySelector('#payement').style.display = 'block';
            // document.querySelector('.main_panier>.titre_principale>.categorie_panier').style.display = 'block';

            document.querySelector('.panier_final').style.display = 'none';
            document.querySelector('#panier_payement').style.display = 'block';

            document.querySelectorAll('.moins').forEach( moins => { moins.style.display = 'none'; });
            document.querySelectorAll('.plus').forEach( plus => { plus.style.display = 'none'; });






            //calcul de la recette 

            document.querySelector('#prix_payement').innerText = prix_payement + '€';


            //total
            

            let total_a_payer;
            let promos = parseFloat(document.querySelector('#promo').innerText);
            let livraison = parseFloat(document.querySelector('#livraison').innerText);

            total_a_payer = promos + livraison + prix_payement;
            total_a_payer = parseFloat(total_a_payer);

            document.querySelector('.total_action_payement>p:nth-child(2)').innerText = total_a_payer + ' €';

        }
    })




    //Si livraison a été séléctionné 

    document.querySelectorAll('.emporter').forEach(emporter => {
        if (emporter.classList.contains('selected')) {

            document.querySelector('#livraison').innerText = '3.00 €'; 

            let prix_payement = parseFloat(document.querySelector('.panier_final>p').innerText);


            document.querySelector('#payement').style.display = 'block';
            // document.querySelector('.main_panier>.titre_principale>.categorie_panier').style.display = 'block';
    
            document.querySelector('.panier_final').style.display = 'none';
            document.querySelector('#panier_payement').style.display = 'block';

            document.querySelectorAll('.moins').forEach( moins => { moins.style.display = 'none'; });
            document.querySelectorAll('.plus').forEach( plus => { plus.style.display = 'none'; });

    
    
    
    
            //calcul de la recette 
    
            document.querySelector('#prix_payement').innerText = prix_payement + '€';
    
    
            //total
            
    
            let total_a_payer;
            let promos = parseFloat(document.querySelector('#promo').innerText);
            let livraison = parseFloat(document.querySelector('#livraison').innerText);
    
            total_a_payer = promos + livraison + prix_payement;
            total_a_payer = parseFloat(total_a_payer);
    
            document.querySelector('.total_action_payement>p:nth-child(2)').innerText = total_a_payer + ' €';
    
        }
    })




    


    
})

//cachez le panier de paiement pour ne pas l'avoir sur les inputs, problème téléphone

document.querySelectorAll('.input_payement>input').forEach(input => {
    input.addEventListener('focus', function() {
        console.log('suce');
        document.querySelector('#panier_payement').style.display = 'none';
    });
});

document.querySelectorAll('.input_payement>input').forEach(input => {
    input.addEventListener('blur', function() {
        document.querySelector('#panier_payement').style.display = 'block';
    });
});




//validation de la commande 

document.querySelector('input[type = submit]').addEventListener('click', function(event) {
    event.preventDefault();

    if (!document.querySelector('#adresse').value.length == 0 && !document.querySelector('#horaire').value.length == 0) {
        document.querySelector('#panier_payement').style.display = 'none';
        document.querySelector('#payement_validation').style.display = 'block';
    }

    else {
        document.querySelector('#message').innerHTML = '<p>Il manque des informations !</p>';
    }
    
})


// console.log(document.querySelectorAll('.place'))