const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.list-container');
let on_off = true;

btnMenu.addEventListener('click', () => {
   
    if(on_off) {
      menu.style.left = "0%";
      menu.style.transition = "1s";
      on_off = false;
    }else{
        on_off = false;
        menu.style.left = "-100%";
        menu.style.transition = "1s";
        on_off = true;
    }

});

