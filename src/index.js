import restaurantImage from './assets/restaurant.jpg';
import './styles.css';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Geoffs Pizza Restaurant";

    const image = document.createElement('img');
    image.src = restaurantImage;
    image.alt = 'Gourmet Paradise Restaurant';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Here we offer an exquisite dining experience'

    const imgElement = document.createElement('img');
    imgElement.src = restaurantImage;
    
    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(paragraph);
});

console.log('Hello World');