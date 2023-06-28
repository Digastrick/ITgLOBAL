let select = function(){
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });
    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle(){
        document.querySelector('.select__body').classList.toggle('is-active');
    }

    function selectChoose(){
        let text = this.innerText,
        select = this.closest('.select'),
        currentText = select.querySelector('.select__current');
        if(text == 'United States'){
        return currentText.innerText =  'Us',
        currentText.classList.add('IconUSA'),
        currentText.classList.remove("IconRU" , "IconNL" , "IconBY" , "IconKZ" , "IconTR");
        }
        if(text == 'Россия'){
       return currentText.innerText = 'RU' ,
        currentText.classList.add('IconRU'),
        currentText.classList.remove("IconUSA" , "IconNL" , "IconBY" , "IconKZ" , "IconTR");
        }
        if(text == 'Netherlands')
        return currentText.innerText = 'Nt' ,
        currentText.classList.add('IconNL'),
        currentText.classList.remove("IconUSA" , "IconRU" , "IconBY" , "IconKZ" , "IconTR");
        if(text == 'Беларусь')
       return  currentText.innerText = 'By' ,
        currentText.classList.add('IconBY'),
        currentText.classList.remove("IconUSA" , "IconNL" , "IconRU" , "IconKZ" , "IconTR");
        if(text == 'Казахстан')
        return currentText.innerText = 'Kz' ,
        currentText.classList.add('IconKZ'),
        currentText.classList.remove("IconUSA" , "IconNL" , "IconBY" , "IconRU" , "IconTR");
        if(text == 'Türkiye')
        return currentText.innerText = 'Tr' ,
        currentText.classList.add('IconTR'),
        currentText.classList.remove("IconUSA" , "IconNL" , "IconBY" , "IconKZ" , "IconRU");

        select.classList.remove('is-active');
    }
}

select();
