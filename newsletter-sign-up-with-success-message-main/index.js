let input = document.querySelector('.form-control')
let btn = document.querySelector('.btn')

btn.addEventListener('click', function(){
    const valeur = document.querySelector("#champ").value;
    if(valeur.trim() !== ""){
        window.location.href = "thanks.html";

    }else {
        alert('veuillez rentrer une adresse email valide !')
    }
})


let dismiss = document.querySelector('#btnd')

dismiss.addEventListener('click', function(){
    window.location.href = 'index.html'
})