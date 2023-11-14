window.addEventListener('scroll', function() {
    var navBar = document.querySelector('.nav-bar');
    if (window.scrollY > 50) { 
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});
