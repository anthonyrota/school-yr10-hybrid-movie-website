(function () {
    'use strict';

    var toggleMenuButton = document.querySelector('.header__hamburger');
    var menuContainer = document.querySelector('.menu');
    var isMenuOpen = false;
    var toggleMenuButtonOpenClass = 'header__hamburger--open';
    var menuContainerOpenClass = 'menu--open';

    toggleMenuButton.addEventListener('click', function () {
        var method = isMenuOpen ? 'remove' : 'add';
        isMenuOpen = !isMenuOpen;
        toggleMenuButton.classList[method](toggleMenuButtonOpenClass);
        menuContainer.classList[method](menuContainerOpenClass);
    });
})();
