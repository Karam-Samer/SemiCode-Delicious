let box = document.querySelectorAll('.popup .box'),
    navBar = document.querySelector('nav'),
    lastScroll = 0,
    breakfastPart1 = document.querySelector('#nav-breakfast .part1 .item'),
    breakfastPart2 = document.querySelector('#nav-breakfast .part2 .item'),
    lunchPart1 = document.querySelector('#nav-lunch .part1 .item'),
    lunchPart2 = document.querySelector('#nav-lunch .part2 .item'),
    dinnerPart1 = document.querySelector('#nav-dinner .part1 .item'),
    dinnerPart2 = document.querySelector('#nav-dinner .part2 .item'),
    drinksPart1 = document.querySelector('#nav-drinks .part1 .item'),
    drinksPart2 = document.querySelector('#nav-drinks .part2 .item');

box.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});

window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll && currentScroll > 50) {
        navBar.classList.add('up');
    } else {
        navBar.classList.remove('up');
    }
    if (currentScroll > 50) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;

});
document.addEventListener('DOMContentLoaded', () => {
    BreakFast.forEach((item, index) => {
        if (index < 3) {
            breakfastPart1.innerHTML += `
    <div class="row unit mb-5" data-menu-index="${index}">

                  <div class="col-4 col-md-5 col-lg-3">
                    <div class="img-container m-auto mb-md-0">
                      <div class="layout">
                        <i class="fa-regular fa-square-plus" data-menu-type="breakfast" data-menu-index="${index}" onclick="openMenuPopup(this)"></i>
                      </div>
                      <div class="img" style="background-image: url('./images/${item.images[0]}')"></div>
                    </div>
                  </div>

                  <div class="col-8 col-md-7 col-lg-9">
                    <div class="content">
                      <div class="header">
                        <h5 class="item-name mb-0">${item.name}</h5>
                        <span class="mb-0 mx-3"></span>
                        <h5 class="item-price mb-0">$${item.price.toFixed(2)}</h5>
                      </div>
                      <p class="mb-0 mt-2">
                        ${item.miniDescription}
                      </p>
                    </div>
                  </div>

                </div>
                <div class="line"></div>
    `
        } else {

            breakfastPart2.innerHTML += `
    <div class="row unit mb-5" data-menu-index="${index}">

                  <div class="col-4 col-md-5 col-lg-3">
                    <div class="img-container m-auto mb-md-0">
                      <div class="layout">
                        <i class="fa-regular fa-square-plus" data-menu-type="breakfast" data-menu-index="${index}" onclick="openMenuPopup(this)"></i>
                      </div>
                      <div class="img" style="background-image: url('./images/${item.images[0]}')"></div>
                    </div>
                  </div>

                  <div class="col-8 col-md-7 col-lg-9">
                    <div class="content">
                      <div class="header">
                        <h5 class="item-name mb-0">${item.name}</h5>
                        <span class="mb-0 mx-3"></span>
                        <h5 class="item-price mb-0">$${item.price.toFixed(2)}</h5>
                      </div>
                      <p class="mb-0 mt-2">
                        ${item.miniDescription}
                      </p>
                    </div>
                  </div>

                </div>
`
        }
    });

    Lunch.forEach((item, index) => {
        if (index < 3) {
            lunchPart1.innerHTML += `
    <div class="row unit mb-5" data-menu-index="${index}">

                  <div class="col-4 col-md-5 col-lg-3">
                    <div class="img-container m-auto mb-md-0">
                      <div class="layout">
                        <i class="fa-regular fa-square-plus" data-menu-type="lunch" data-menu-index="${index}" onclick="openMenuPopup(this)"></i>
                      </div>
                      <div class="img" style="background-image: url('./images/${item.images[0]}')"></div>
                    </div>
                  </div>

                  <div class="col-8 col-md-7 col-lg-9">
                    <div class="content">
                      <div class="header">
                        <h5 class="item-name mb-0">${item.name}</h5>
                        <span class="mb-0 mx-3"></span>
                        <h5 class="item-price mb-0">$${item.price.toFixed(2)}</h5>
                      </div>
                      <p class="mb-0 mt-2">
                        ${item.miniDescription}
                      </p>
                    </div>
                  </div>

                </div>
                <div class="line"></div>
    `
        } else {

            lunchPart2.innerHTML += `
    <div class="row unit mb-5" data-menu-index="${index}">

                  <div class="col-4 col-md-5 col-lg-3">
                    <div class="img-container m-auto mb-md-0">
                      <div class="layout">
                        <i class="fa-regular fa-square-plus" data-menu-type="lunch" data-menu-index="${index}" onclick="openMenuPopup(this)"></i>
                      </div>
                      <div class="img" style="background-image: url('./images/${item.images[0]}')"></div>
                    </div>
                  </div>

                  <div class="col-8 col-md-7 col-lg-9">
                    <div class="content">
                      <div class="header">
                        <h5 class="item-name mb-0">${item.name}</h5>
                        <span class="mb-0 mx-3"></span>
                        <h5 class="item-price mb-0">$${item.price.toFixed(2)}</h5>
                      </div>
                      <p class="mb-0 mt-2">
                        ${item.miniDescription}
                      </p>
                    </div>
                  </div>

                </div>
`
        }
    });
    Dinner.forEach((item, index) => {
        if (index < 3) {
            dinnerPart1.innerHTML += `
    <div class="row unit mb-5" data-menu-index="${index}">

                  <div class="col-4 col-md-5 col-lg-3">
                    <div class="img-container m-auto mb-md-0">
                      <div class="layout">
                        <i class="fa-regular fa-square-plus" data-menu-type="dinner" data-menu-index="${index}" onclick="openMenuPopup(this)"></i>
                      </div>
                      <div class="img" style="background-image: url('./images/${item.images[0]}')"></div>
                    </div>
                  </div>

                  <div class="col-8 col-md-7 col-lg-9">
                    <div class="content">
                      <div class="header">
                        <h5 class="item-name mb-0">${item.name}</h5>
                        <span class="mb-0 mx-3"></span>
                        <h5 class="item-price mb-0">$${item.price.toFixed(2)}</h5>
                      </div>
                      <p class="mb-0 mt-2">
                        ${item.miniDescription}
                      </p>
                    </div>
                  </div>

                </div>
                <div class="line"></div>
    `
        } else {

            dinnerPart2.innerHTML += `
    <div class="row unit mb-5" data-menu-index="${index}">

                  <div class="col-4 col-md-5 col-lg-3">
                    <div class="img-container m-auto mb-md-0">
                      <div class="layout">
                        <i class="fa-regular fa-square-plus" data-menu-type="dinner" data-menu-index="${index}" onclick="openMenuPopup(this)"></i>
                      </div>
                      <div class="img" style="background-image: url('./images/${item.images[0]}')"></div>
                    </div>
                  </div>

                  <div class="col-8 col-md-7 col-lg-9">
                    <div class="content">
                      <div class="header">
                        <h5 class="item-name mb-0">${item.name}</h5>
                        <span class="mb-0 mx-3"></span>
                        <h5 class="item-price mb-0">$${item.price.toFixed(2)}</h5>
                      </div>
                      <p class="mb-0 mt-2">
                        ${item.miniDescription}
                      </p>
                    </div>
                  </div>

                </div>
`
        }
    });
    Drinks.forEach((item, index) => {
        if (index < 3) {
            drinksPart1.innerHTML += `
    <div class="row unit mb-5" data-menu-index="${index}">

                  <div class="col-4 col-md-5 col-lg-3">
                    <div class="img-container m-auto mb-md-0">
                      <div class="layout">
                        <i class="fa-regular fa-square-plus" data-menu-type="drinks" data-menu-index="${index}" onclick="openMenuPopup(this)"></i>
                      </div>
                      <div class="img" style="background-image: url('./images/${item.images[0]}')"></div>
                    </div>
                  </div>

                  <div class="col-8 col-md-7 col-lg-9">
                    <div class="content">
                      <div class="header">
                        <h5 class="item-name mb-0">${item.name}</h5>
                        <span class="mb-0 mx-3"></span>
                        <h5 class="item-price mb-0">$${item.price.toFixed(2)}</h5>
                      </div>
                      <p class="mb-0 mt-2">
                        ${item.miniDescription}
                      </p>
                    </div>
                  </div>

                </div>
                <div class="line"></div>
    `
        } else {

            drinksPart2.innerHTML += `
    <div class="row unit mb-5" data-menu-index="${index}">

                  <div class="col-4 col-md-5 col-lg-3">
                    <div class="img-container m-auto mb-md-0">
                      <div class="layout">
                        <i class="fa-regular fa-square-plus" data-menu-type="drinks" data-menu-index="${index}" onclick="openMenuPopup(this)"></i>
                      </div>
                      <div class="img" style="background-image: url('./images/${item.images[0]}')"></div>
                    </div>
                  </div>

                  <div class="col-8 col-md-7 col-lg-9">
                    <div class="content">
                      <div class="header">
                        <h5 class="item-name mb-0">${item.name}</h5>
                        <span class="mb-0 mx-3"></span>
                        <h5 class="item-price mb-0">$${item.price.toFixed(2)}</h5>
                      </div>
                      <p class="mb-0 mt-2">
                        ${item.miniDescription}
                      </p>
                    </div>
                  </div>

                </div>
`
        }
    });
});

window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loadingScreen').classList.add('hide');
    }, 2000);
});
