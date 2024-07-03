import restaurantImage from './assets/restaurant.jpg';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Dave's Pizza Restaurant";

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Gourmet Paradise Restaurant';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Here we offer an exquisite dining experience'
    
    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(paragraph);

    return content;
});

export default loadHome;