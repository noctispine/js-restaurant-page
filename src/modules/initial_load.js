function createHeader(text){
    const header = document.createElement('header');
    const brandName = document.createElement('h1');
    brandName.textContent = text;
    header.appendChild(brandName);
    return header;
}

function createBtn(id, text){
    const btn = document.createElement('button');
    btn.setAttribute('id', id);
    const span = document.createElement('span');
    span.textContent = text;
    btn.appendChild(span);
    btn.classList.add('nav-element');
    return btn;
}

function createNav(){
    const nav = document.createElement('nav');

    const homeBtn = createBtn('home', 'Home');
    const menuBtn = createBtn('menu', 'Menu');
    const contactBtn = createBtn('contact', 'Contact');

    nav.appendChild(homeBtn);
    nav.appendChild(menuBtn);
    nav.appendChild(contactBtn);

    return nav;
}

function createMain(){
    const main = document.createElement('main');
    main.setAttribute('id', 'main-content');
    return main;
}

function createFooter(text){
    const footer = document.createElement('footer');
    const para = document.createElement('p');
    para.textContent = text;

    footer.appendChild(para);
    return footer;
}

function loadInitial(){
    const content = document.getElementById('content');

    const header = createHeader('Stogies');
    const nav = createNav();
    const main = createMain();
    const footer = createFooter('copyright bla bla');
    
    content.appendChild(header);
    content.appendChild(nav);
    content.appendChild(main);
    content.appendChild(footer);
}

export default loadInitial;