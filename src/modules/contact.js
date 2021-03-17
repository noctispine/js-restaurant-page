function createMap(){
    const mapOuter = document.createElement('div');
    mapOuter.classList.add('mapouter');

    const gmapDiv = document.createElement('div');
    gmapDiv.classList.add('gmap_canvas');

    const iframe = document.createElement('iframe');
    iframe.setAttribute('width', "350");
    iframe.setAttribute('height', "350");
    iframe.setAttribute('id', "gmap_canvas");
    iframe.setAttribute('src', "https://maps.google.com/maps?q=Suadiye,Turkey&t=&z=17&ie=UTF8&iwloc=&output=embed");
    iframe.setAttribute('frameborder', "0");

    const br = document.createElement('br');

    gmapDiv.appendChild(iframe);
    gmapDiv.appendChild(br);
    mapOuter.appendChild(gmapDiv);

    return mapOuter;

}


function loadContact(){

    const mainContent = document.getElementById("main-content");
    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
    const homeBtn = document.getElementById('home')

    homeBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');
    contactBtn.classList.add('selected');

    mainContent.textContent = '';

    const map = createMap();
    mainContent.appendChild(map);
    
}

export default loadContact;






