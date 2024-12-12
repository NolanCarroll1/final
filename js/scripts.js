const btnElement = document.querySelector('#hamburger')
const navElement = document.querySelector('#theNav')

btnElement.addEventListener('click', () =>{
    btnElement.classList.toggle('open')
    navElement.classList.toggle('open')

})//end button click 

document.getElementById('currentYear').textContent = new Date().getFullYear();
