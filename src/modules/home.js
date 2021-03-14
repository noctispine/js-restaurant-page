function createAboutSection(id, title, text) {
    const aboutSection = document.createElement('section');
    aboutSection.setAttribute('id', id)
    
    
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
    const content = document.getElementById('content');
    const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla officia sint facilis, enim nisi recusandae soluta tempore dolorum omnis ad placeat velit ipsa? Voluptatibus optio perferendis debitis fugiat officia quos iusto? Autem quos quis minima minus unde nobis quisquam harum voluptas cupiditate, ullam ab dolor, accusantium voluptatibus voluptate perferendis. Asperiores porro, accusantium delectus dignissimos blanditiis commodi magni nostrum quod quisquam quo nemo aperiam facilis autem voluptates ipsam est reiciendis ullam?";
    const aboutSection = createAboutSection('about-section', 'About Us', text);
    
    content.appendChild(aboutSection);
}

export default loadHome;

