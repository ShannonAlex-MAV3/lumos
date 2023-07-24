"use strict"

//wait until all Content has been loaded to execute the logic
window.addEventListener('DOMContentLoaded',function(){
    let navbar = document.querySelector('header');
    let main = document.querySelector('.main');

    // on scroll change color of navbar
    main.addEventListener('scroll', function() {
        if(main.scrollTop >= 20){
            navbar.style.backgroundColor = 'rgb(0 0 0 / 100%)';
            navbar.style.color = 'white';
        }else{
            navbar.style.backgroundColor = '';
            navbar.style.color = '';
        } 
    });
});

