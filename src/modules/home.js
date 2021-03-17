function createAboutSection(className, id, title, text) {
    const aboutSection = document.createElement('section');
    aboutSection.classList.add(className);
    aboutSection.setAttribute('id', id);
    
    
    const aboutUsTitle = document.createElement('h2');
    aboutUsTitle.textContent = title;

    aboutUsTitle.classList.add('section-title');

    const aboutUsText = document.createElement('p');
    aboutUsText.textContent = text;

    const aboutDiv = document.createElement('div');
    aboutDiv.setAttribute('id', 'about-div');



    aboutDiv.appendChild(aboutUsTitle);
    aboutDiv.appendChild(aboutUsText);


    aboutSection.appendChild(aboutDiv);


    return aboutSection;
}




function loadHome(){

    const mainContent = document.getElementById('main-content');
    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla officia sint facilis, enim nisi recusandae soluta tempore dolorum omnis ad placeat velit ipsa? Voluptatibus optio perferendis debitis fugiat officia quos iusto? Autem quos quis minima minus unde nobis quisquam harum voluptas cupiditate, ullam ab dolor, accusantium voluptatibus voluptate perferendis. Asperiores porro, accusantium delectus dignissimos blanditiis commodi magni nostrum quod quisquam quo nemo aperiam facilis autem voluptates ipsam est reiciendis ullam?";
    const aboutSection = createAboutSection('about-section', 'about', 'About Us', text);

    const menuBtn = document.getElementById('menu');
    const contactBtn = document.getElementById('contact');
    const homeBtn = document.getElementById('home')

    contactBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');
    homeBtn.classList.add('selected');
    

    mainContent.textContent = '';

    mainContent.appendChild(aboutSection);

    const aboutSection2 = createAboutSection('about-section','dunno' ,'Dunno', text);
    mainContent.appendChild(aboutSection2);
    
}

export default loadHome;