
let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})


closeShopping.addEventListener('click',() => {
    body.classList.remove('active');
})

let products = [
    {
        id:1,
        name: 'LCD projector',
        discription: 'ALorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 1.webp',
        price: 175.35,
    },

    {
        id:2,
        name: 'Digital watches',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 2.JPEG',
        // price: 'Price:-  $ 222.48',
        price: 175.35,
    },

    {
        id:3,
        name: 'Drive Disks',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 3.JPG',
        // price: 'Price:-  $ 400.62',
        price: 175.35,
    },

    {
        id:4,
        name: 'Phone holders',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 4.JPG',
        // price: 'Price:-  $ 175.35',
        price: 175.35,
    },
    {
        id:5,
        name: 'Camera',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 5.JPG',
        // price: 'Price:-  $ 52.36',
        price: 175.35,
    },
    {
        id:6,
        name: 'Sound Supplier',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 6.JPG',
        // price: 'Price:-  $ 400.62',
        price: 175.35,
    },

    {
        id:7,
        name: 'Samsung galaxy',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 7.webp',
        // price: 'Price:-  $ 166.52',
        price: 175.35,
    },

    {
        id:8,
        name: 'Table Light',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 8.JPG',
        price: 175.35,
    },
    
    {
        id:9,
        name: 'Samsung laptop',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 9.JPG',
        // price: 'Price:-  $ 52.36',
        price: 175.35,
    },

    {
        id:10,
        name: 'Digital Remotes',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 10.webp',
        // price: 'Price:-  $ 52.36',
        price: 175.35,
    },
    {
        id:11,
        name: 'Alexa',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 11.JPG',
        // price: 'Price:-  $ 52.36',
        price: 175.35,
    },
    {
        id:12,
        name: 'Bluetooth Sounder',
        discription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        image: 'image 12.JPG',
        // price: 'Price:-  $ 52.36',
        price: 175.35,
    }


    
];

let listCards = [];

function viewProdct(){
    products.forEach((value,key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
        <img  src="image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="discription">${value.discription}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick = "addToCard(${key})">Add To Card </button>`;
    list.appendChild(newDiv);
   })

}

viewProdct();


function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}


function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                
                <div>
                    <button onclick="changeQuqntity(${key},${value.quantity-1})">-</button>
                    <div class="count" >${value.quantity}</div>
                    <button onclick="changeQuqntity(${key},${value.quantity+1})">+</button>
                </div>`;

            listCard.appendChild(newDiv);
        }
    })

    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;

}

function changeQuqntity(key,quantity){
    if(quantity==0){
        delete listCards[key];
    }
    else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity*products[key].price;
    }
    reloadCard();
}



