
const $title = document.querySelector(".card-title")
const $category = document.querySelector(".card-category")
const $price = document.querySelector(".card-price")
const $period = document.querySelector(".card-period")
const $image = document.querySelector('.card-image');

// Subscription management
window.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const title = params.get('title');
    const category = params.get('category');
    const price = params.get('price');
    const period = params.get('period');

    $title.textContent = title;
    $category.textContent = category;
    $price.innerHTML = price + '&euro;';
    $period.textContent = period;
    $image.setAttribute('src', `./assets/${title}.webp`);
});

// Menu management
const $menuBtn = document.querySelector('.btn-menu');
const $mainNav = document.getElementById('main-navigation');

$menuBtn.addEventListener('click', () => {
    const isHidden = $mainNav.hidden;

    if (isHidden) {
        $mainNav.hidden = false;
        $menuBtn.textContent = "close";
        $menuBtn.setAttribute('aria-expanded', 'true');
    } else {
        $mainNav.hidden = true;
        $menuBtn.textContent = "menu";
        $menuBtn.setAttribute('aria-expanded', 'false');
    }
});