import './styles.css';
import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');

    const homeButton = document.getElementById('content');
    const menuButton = document.getElementById('menu');
    const contactButton = document.getElementById('contact');

    function clearContent () {
        content.innerHTML = '';
    }

    homeButton.addEventListener('click', () => {
        clearContent();
        content.appendChild(loadHome());
    });

    menuButton.addEventListener('click', () => {
        clearContent();
        content.appendChild(loadMenu());
    });

    contactButton.addEventListener('click', () => {
        clearContent();
        content.appendChild(loadContact());
    });

    // load home page by default
    content.appendChild(loadHome());
})