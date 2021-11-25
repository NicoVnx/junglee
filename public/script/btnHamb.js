const btnHamb = document.getElementById('btnHamb')
const header = document.querySelector('header')

function open() {

    
    
    header.classList.toggle('dropdown')
    

}

btnHamb.addEventListener('click', open)