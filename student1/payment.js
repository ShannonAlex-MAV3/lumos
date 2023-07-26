window.addEventListener('DOMContentLoaded',function(){
    let navbar = document.querySelector('header');
    // let navText = document.querySelector('nav ul li a');
    window.addEventListener('scroll', function() {
        
        if(main.scrollTop >= 20){
            navbar.style.backgroundColor = 'rgb(255 255 255 / 80%)';
            navbar.style.color = 'black';
        }else{
            navbar.style.backgroundColor = 'none';
            navbar.style.color = 'white';
        }
        
    });
    
});

