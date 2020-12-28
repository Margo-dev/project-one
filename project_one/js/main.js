
let menu = document.querySelector('.menu ul');
function toggle() {
    if (menu.classList.contains('unshow')) {
        menu.classList.remove('unshow');
        menu.classList.add('show');
    } else {
        menu.classList.remove('show');
        menu.classList.add('unshow');
    }

}

document.querySelector('.header__btn-menu').onclick = toggle;
