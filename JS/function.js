function openPopup(name) {
    let popup = document.querySelector(`.popup[data-popup-name="${name}"]`);
    if (popup) {
        popup.classList.add('active');
    }
}

function closePopUp(that) {
    let popup = that.closest('.popup');
    if (popup) {
        popup.classList.remove('active');

    }
}

function openMenuPopup(that) {
    let menuType = that.getAttribute('data-menu-type'),
        menuIndex = that.getAttribute('data-menu-index'),
        dataArray,
        popup = document.querySelector(`.popup[data-popup-name="menu"]`);
    if (menuType === 'breakfast') {
        dataArray = BreakFast;
    }
    else if (menuType === 'lunch') {
        dataArray = Lunch;
    }
    else if (menuType === 'dinner') {
        dataArray = Dinner;
    }
    else if (menuType === 'drinks') {
        dataArray = Drinks;
    }
    let item = dataArray[menuIndex];
    popup.querySelector('.title h6').textContent = item.type;
    popup.querySelector('.name').textContent = item.name;
    popup.querySelector('.price').textContent = `$${item.price.toFixed(2)}`;
    popup.querySelector('.img img').src = `./images/${item.images[0]}`;
    popup.querySelector('.body p').textContent = item.description;
    popup.querySelector('.arrow.prev').setAttribute('data-menu-type', menuType);
    popup.querySelector('.arrow.prev').setAttribute('data-menu-index', parseInt(menuIndex) - 1);
    popup.querySelector('.arrow.next').setAttribute('data-menu-type', menuType);
    popup.querySelector('.arrow.next').setAttribute('data-menu-index', parseInt(menuIndex) + 1);
    popup.classList.add('active');


}

function ChangePopupItem(that, direction) {
    let menuType = that.getAttribute('data-menu-type'),
        menuIndex = parseInt(that.getAttribute('data-menu-index')),
        dataArray,
        popup = document.querySelector(`.popup[data-popup-name="menu"]`);
    if (menuType === 'breakfast') {
        dataArray = BreakFast;
    }
    else if (menuType === 'lunch') {
        dataArray = Lunch;
    }
    else if (menuType === 'dinner') {
        dataArray = Dinner;
    }
    else if (menuType === 'drinks') {
        dataArray = Drinks;
    }
    if (direction === 'next') {
        if (menuIndex >= dataArray.length) {
            menuIndex = 0;
        }
    }
    else if (direction === 'prev') {
        if (menuIndex <= 0) {
            menuIndex = dataArray.length;
        }
    }

    let item = dataArray[menuIndex];
    popup.querySelector('.title h6').textContent = item.type;
    popup.querySelector('.name').textContent = item.name;
    popup.querySelector('.price').textContent = `$${item.price.toFixed(2)}`;
    popup.querySelector('.img img').src = `./images/${item.images[0]}`;
    popup.querySelector('.body p').textContent = item.description;
    popup.querySelector('.arrow.prev').setAttribute('data-menu-type', menuType);
    popup.querySelector('.arrow.prev').setAttribute('data-menu-index', menuIndex - 1);
    popup.querySelector('.arrow.next').setAttribute('data-menu-type', menuType);
    popup.querySelector('.arrow.next').setAttribute('data-menu-index', menuIndex + 1);
}