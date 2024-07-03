function loadContact() {
    const content = document.createElement('div');

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';

    const address = document.createElement('p');
    address.textContent = '123 Foodie Lane, Flavour Town, UK'

    const phone = document.createElement('p');
    phone.textContent = 'Phone 02890 123456';

    const email = document.createElement('p')
    email.textContent = 'Email: info@pizza.com';

    content.appendChild(heading);
    content.appendChild(address);
    content.appendChild(phone);
    content.appendChild(email);

    return content;
}

export default loadContact