const hamburguerMenu = document.getElementById('hamburguer-menu'); 
const navItems = document.getElementById('nav-items')
const main = document.querySelector('main'); 

hamburguerMenu.addEventListener('click', () => {

    navItems.classList.toggle('active'); 
    hamburguerMenu.classList.toggle('active'); 
    main.classList.toggle('active');
    
})