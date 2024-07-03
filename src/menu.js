function loadMenu() {
    const content = document.createElement('div');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';

    const menuList = document.createElement('u1');
    const items = ['Appetiser', 'Main Course', 'Desser', 'Beverage'];

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item;
        menuList.appendChild(listItem);
    });

    content.appendChild(heading);
    content.appendChild(menuList)

    return content;
}

export default loadMenu;