const navSider = ()=>{
    const burger = document.querySelector('.burger__menu');
    const nav = document.querySelector('.header__nav');
    const navLinks = document.querySelectorAll('.nav__list');

    burger.addEventListener('click', () =>{
        nav.classList.toggle('header-active');
        navLinks.forEach((link, index) =>{
            if (link.style.animation){
                link.style.animation = ''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
           
       
        });
        burger.classList.toggle('toggle');
    
    });
    
}
navSider();