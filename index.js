function hideMenu(){
    const hideMenu = document.querySelector('#nav2');
    hideMenu.style.display = 'none';

    const showMenu = document.querySelector('#nav1');
    showMenu.style.display = 'block';
}

function showMenu(){
    const closeMenu = document.querySelector('#nav1');
    closeMenu.style.display = 'none';

    const showNav = document.querySelector('#nav2');
    showNav.style.display = 'flex';
}