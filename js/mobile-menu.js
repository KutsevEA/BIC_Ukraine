(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
    const mobileMenuRef = document.querySelector('[data-menu]');
    const mobileMenuList = document.querySelector('.site-nav');
    console.log(mobileMenuList);

    

    function closeMobileMenu(evt) {
       

        if (evt.target.nodeName === 'A') {
            console.log(`ekjrglwkejrgwjerngw;ejkrg`)
            mobileMenuRef.classList.toggle('is-open');
            menuBtnRef.classList.toggle('is-open');
          mobileMenuList.removeEventListener('click', closeMobileMenu);
          const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;
          menuBtnRef.setAttribute('aria-expanded', !expanded);
        }
    }


    menuBtnRef.addEventListener('click', () => {
      mobileMenuList.addEventListener('click', closeMobileMenu);
    const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
  });
})();
