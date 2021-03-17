function createItem(name, img, price, id){
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('item-card');
    itemDiv.setAttribute('index', id);

    const itemImg = document.createElement('img');
    itemImg.classList.add('item-img');
    itemImg.setAttribute('src', img);
    
    const itemName = document.createElement('p');
    itemName.classList.add('item-name');
    itemName.textContent = name;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('item-price');
    itemPrice.textContent = `${price}$`;


    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(itemPrice);


    return itemDiv;
}


function createItemContainer(){

    const items = [
        {
            id: 1,
            name: "Cigar",
            img: "https://cdn11.bigcommerce.com/s-g3lg32v10p/images/stencil/1280x1280/products/1083/8753/103005_dav_ani_spe_r_25s_box_005__77422.1587745914.png?c=2",
            price: "500"
        },
        {
            id: 2,
            name: "Cigar",
            img: "https://cdn11.bigcommerce.com/s-g3lg32v10p/images/stencil/1280x1280/products/1083/8753/103005_dav_ani_spe_r_25s_box_005__77422.1587745914.png?c=2",
            price: "500"
        },
        {
            id: 3,
            name: "Cigar",
            img: "https://cdn11.bigcommerce.com/s-g3lg32v10p/images/stencil/1280x1280/products/1083/8753/103005_dav_ani_spe_r_25s_box_005__77422.1587745914.png?c=2",
            price: "500"
        },
        {
            id: 1,
            name: "Cigar",
            img: "https://cdn11.bigcommerce.com/s-g3lg32v10p/images/stencil/1280x1280/products/1083/8753/103005_dav_ani_spe_r_25s_box_005__77422.1587745914.png?c=2",
            price: "500"
        },
        {
            id: 2,
            name: "Cigar",
            img: "https://cdn11.bigcommerce.com/s-g3lg32v10p/images/stencil/1280x1280/products/1083/8753/103005_dav_ani_spe_r_25s_box_005__77422.1587745914.png?c=2",
            price: "500"
        },
        {
            id: 3,
            name: "Cigar",
            img: "https://cdn11.bigcommerce.com/s-g3lg32v10p/images/stencil/1280x1280/products/1083/8753/103005_dav_ani_spe_r_25s_box_005__77422.1587745914.png?c=2",
            price: "500"
        },
        {
            id: 1,
            name: "Cigar",
            img: "https://cdn11.bigcommerce.com/s-g3lg32v10p/images/stencil/1280x1280/products/1083/8753/103005_dav_ani_spe_r_25s_box_005__77422.1587745914.png?c=2",
            price: "500"
        },
        {
            id: 2,
            name: "Cigar",
            img: "https://cdn11.bigcommerce.com/s-g3lg32v10p/images/stencil/1280x1280/products/1083/8753/103005_dav_ani_spe_r_25s_box_005__77422.1587745914.png?c=2",
            price: "500"
        },
        {
            id: 3,
            name: "Cigar",
            img: "https://cdn11.bigcommerce.com/s-g3lg32v10p/images/stencil/1280x1280/products/1083/8753/103005_dav_ani_spe_r_25s_box_005__77422.1587745914.png?c=2",
            price: "500"
        },
        
    
    ];

    const itemContainer =  document.createElement('div');
    itemContainer.setAttribute('id', "menu-container");

    items.forEach((item) => {
        const itemDiv = createItem(item.name, item.img, item.price, item.id);
        itemContainer.appendChild(itemDiv);
    })


    return itemContainer;
    
}



function loadMenu() {
    const mainContent = document.getElementById("main-content");
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
    
    const homeBtn = document.getElementById('home')
    contactBtn.classList.remove('selected');
    homeBtn.classList.remove('selected');
    menuBtn.classList.add('selected');
    

    
    mainContent.textContent = '';


    const itemContainer = createItemContainer();
    mainContent.appendChild(itemContainer);

}

export default loadMenu;