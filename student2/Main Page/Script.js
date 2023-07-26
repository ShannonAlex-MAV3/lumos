let menu = document.querySelector('#menu-icon');
let navigation = document.querySelector('.nav-items');




menu.onclick = () =>{

    menu.classList.toggle('fa-times');
    navigation.classList.toggle('active');
}

window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navigation.classList.remove('active');
} 
