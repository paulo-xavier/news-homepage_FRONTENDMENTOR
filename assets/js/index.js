const hamburguerMenu = document.getElementById('hamburguer-menu'); 
const navItems = document.getElementById('nav-items')
const main = document.querySelector('main'); 

const navItem = document.querySelectorAll('.nav-item'); 

hamburguerMenu.addEventListener('click', () => {

    navItems.classList.toggle('active'); 
    hamburguerMenu.classList.toggle('active'); 
    main.classList.toggle('active');
})

navItem.forEach(item => item.addEventListener('click', () => {
    const navItemsIsActive = navItems.classList.contains('active'); 

    if (navItemsIsActive) {
        navItems.classList.remove('active'); 
        hamburguerMenu.classList.remove('active');
        main.classList.remove('active');
    }
})); 
