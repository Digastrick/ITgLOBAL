const burgerButton = document.querySelector('div.nav-icon1');
const menu = document.querySelector('.menu');




burgerButton.addEventListener("click",function(){ 
       return  menu.classList.toggle('open'), burgerButton.classList.toggle('open');     
})

