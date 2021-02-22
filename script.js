let options = document.querySelector ('#options') //posso fazer em uma, ou duas partes

let cards = options.querySelectorAll ('.card')

//em duas partes seria tipo:
//document.querySelector ('#options').document.querySelector ('.card')

cards.forEach (card => card.addEventListener ('click', selectCard));

function selectCard (event){
    cards.forEach (card => {
        if (card.classList.contains('active')){
        card.classList.remove('active');
        }
    })

event.target.classList.add ('active')
}