const subMenuOpen = document.querySelectorAll('h3.menu-open');
const comebackMenu = document.querySelectorAll('comeback');
const menuList = document.querySelectorAll('li.menu__item')
const subList = document.querySelectorAll('li.open-menu1');

document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("menu-open")) {
        let parent = e.target.parentElement;
        for(let i = 0;i<subMenuOpen.length;i++){
            subMenuOpen[i].classList.toggle('close');  
            menuList[i].classList.toggle('close')       
          }
          e.target.parentElement.classList.toggle('active');
          e.target.classList.toggle('non-close');
         const openSubMenu = e.target.nextElementSibling.classList.toggle('sub-menu-open');
    }
  })

  document.body.addEventListener("click", function(e) {
    if (e.target.classList.contains("open-menu1")) {
        for(let i = 0;i<subList.length;i++){
            subList[i].classList.toggle('close');      
          }
          document.querySelector('.menu-open.non-close').classList.toggle('hidden');
          e.target.classList.toggle('non-close');
          e.target.classList.toggle('active');
          e.target.classList.toggle('border-bottom');
         const openSubMenu = e.target.nextElementSibling.classList.toggle('sub-menu-open');
    }
})
