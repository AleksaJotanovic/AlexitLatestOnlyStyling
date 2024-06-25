// -------------------- PARTNERS SECTION -----------------------------
const scrollers = document.querySelectorAll('.scroller');
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimatiion();
}
function addAnimatiion() {
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true);

        const scrollerInner = scroller.querySelector('ul.scroller-inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem);
        });
    });
}



// ---------------- side menu collapse --------------------
const sidemenu = document.querySelector('aside.sidemenu');
function toggleSidemenu() {
    sidemenu.classList.toggle('sidemenu-active');
}


const cartSidemenu = document.querySelector('aside.cart');
function toggleCart() {
    cartSidemenu.classList.toggle('cart-active');
}
const productsSidemenu = document.querySelector('div.products-sidemenu');
function toggleProductsSidemenu() {
    productsSidemenu.classList.toggle('products-sidemenu-active');
}