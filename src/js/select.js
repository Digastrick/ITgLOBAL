const select1 = document.querySelector('.select-country');
const eze = document.querySelectorAll('option.select-country__item');

document.body.addEventListener("click", function(e) {
    if(e.target.classList.contains("select-country")) {
        let index = select1.selectedIndex;
        let options = select1.options;
        
         options[index].textContent = options[index].value;
}
})

