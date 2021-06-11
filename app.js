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
//search blog
const clearIcon = document.querySelector(".clear-icon");
const searchBar = document.querySelector(".search");

searchBar.addEventListener("keyup", () => {
  if(searchBar.value && clearIcon.style.visibility != "visible"){
    clearIcon.style.visibility = "visible";
  } else if(!searchBar.value) {
    clearIcon.style.visibility = "hidden";
  }
});

clearIcon.addEventListener("click", () => {
  searchBar.value = "";
  clearIcon.style.visibility = "hidden";
})


//animation
// navSider();
// const logo = document.querySelector('.logo__link');
// const burger = document.querySelector('.burger__menu');
// const inner = document.querySelector('.inner');
// const innerText = document.querySelector('.inner__text');
// const innerImg = document.querySelector('.inner__img');
// const project = document.querySelector('.project__bunner');


// const tl = new TimelineMax();

// tl.fromTo(inner, 0.5, {opacity:0} , {opacity:1 , ease: Power2.easeInOut})
// tl.fromTo(logo, 0.3, {opacity:0, x: 30 } , {opacity:1 , x: 0 }, '-=0.5')
// tl.fromTo(burger, 0.5, {opacity:0, x: 30 } , {opacity:1 , x: 0 }, '-=0.5')
// tl.fromTo(innerText, 1, {y: '-80%'} , {y: '0%', ease: Power2.easeInOut}, '-=0.5')
// tl.fromTo(innerImg, 1, {opacity:0 } , {opacity:1 , ease: Power2.easeInOut }, '-=0.5')
