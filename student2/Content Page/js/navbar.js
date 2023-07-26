window.addEventListener('DOMContentLoaded',function(){
    let navbar = document.querySelector('header');
    window.addEventListener('scroll', function() {
        
        if(window.scrollY >= 20){
            navbar.style.backgroundColor = 'rgb(0 0 0 / 100%)';
            navbar.style.color = 'white';
        }else{
            navbar.style.backgroundColor = '';
            navbar.style.color = '';
        } 
    });
});

