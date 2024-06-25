// ----------- S L I D E S H O W ------------
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');
    const dotsContainer = document.querySelector('.dots');

    let slideIndex = 0;

    slides.forEach((slide, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    next.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex === slides.length) slideIndex = 0;
        goToSlide(slideIndex);
    });

    prev.addEventListener('click', () => {
        slideIndex--;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        goToSlide(slideIndex);
    });

    function goToSlide(index) {
        slideIndex = index;
        slider.style.transform = `translateX(-${index * 100}%)`;
        updateDots();
    }

    function updateDots() {
        dots.forEach((dot, index) => {
            if (index === slideIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    setInterval(() => {
        slideIndex++;
        if (slideIndex === slides.length) slideIndex = 0;
        goToSlide(slideIndex);
    }, 3000);
});
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider2');
    const slides = document.querySelectorAll('.slide2');
    const next = document.querySelector('button.next2');
    const prev = document.querySelector('button.prev2');

    let slideIndex = 0;

    next.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex === slides.length) slideIndex = 0;
        goToSlide(slideIndex);
    });

    prev.addEventListener('click', () => {
        slideIndex--;
        if (slideIndex < 0) slideIndex = slides.length - 1;
        goToSlide(slideIndex);
    });

    function goToSlide(index) {
        slideIndex = index;
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(() => {
        slideIndex++;
        if (slideIndex === slides.length) slideIndex = 0;
        goToSlide(slideIndex);
    }, 3000);
});



//--------------- PRODUCTS ON DISCOUNT------------------
document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector(".wrapper");
    const carousel = document.querySelector(".carousel");
    const firstCardWidth = carousel.querySelector(".product-card").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper .arrow-btn");
    const carouselChildrens = [...carousel.children];

    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.id === "left") {
                carousel.scrollLeft += (-firstCardWidth);
            } else if (btn.id === "right") {
                carousel.scrollLeft += firstCardWidth;
            }
        });
    });

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition");
        }
        else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition");
        }

        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1500);
    }
    autoPlay();
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
});



// ---------------- RECENTLY ADDED ---------------------------
document.addEventListener('DOMContentLoaded', function () {
    const wrapper = document.querySelector(".wrapper2");
    const carousel = document.querySelector(".carousel2");
    const firstCardWidth = carousel.querySelector(".product-card2").offsetWidth;
    const arrowBtns = document.querySelectorAll(".wrapper2 .arrow-btn");
    const carouselChildrens = [...carousel.children];

    let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;
    let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
    carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
        carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    carouselChildrens.slice(0, cardPerView).forEach(card => {
        carousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    carousel.classList.add("no-transition2");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition2");

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.id === "left2") {
                carousel.scrollLeft += (-firstCardWidth);
            } else if (btn.id === "right2") {
                carousel.scrollLeft += firstCardWidth;
            }
        });
    });

    const infiniteScroll = () => {
        if (carousel.scrollLeft === 0) {
            carousel.classList.add("no-transition2");
            carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
            carousel.classList.remove("no-transition2");
        }
        else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
            carousel.classList.add("no-transition2");
            carousel.scrollLeft = carousel.offsetWidth;
            carousel.classList.remove("no-transition2");
        }

        clearTimeout(timeoutId);
        if (!wrapper.matches(":hover")) autoPlay();
    }

    const autoPlay = () => {
        if (window.innerWidth < 800 || !isAutoPlay) return;
        timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 1500);
    }
    autoPlay();
    carousel.addEventListener("scroll", infiniteScroll);
    wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
    wrapper.addEventListener("mouseleave", autoPlay);
});



// ------------------ LATEST BLOGS ------------------------//
document.addEventListener('DOMContentLoaded', function () {
    const stellarWrapper = document.querySelector(".stellar-wrapper");
    const galacticCarousel = document.querySelector(".galactic-carousel");
    const firstQuantumCardWidth = galacticCarousel.querySelector(".quantum-card").offsetWidth;
    const nebulaArrowBtns = document.querySelectorAll(".stellar-wrapper .nebula-arrow-btn");
    const galacticCarouselChildrens = [...galacticCarousel.children];

    let cardPerView2 = Math.round(galacticCarousel.offsetWidth / firstQuantumCardWidth);
    galacticCarouselChildrens.slice(-cardPerView2).reverse().forEach(card => {
        galacticCarousel.insertAdjacentHTML("afterbegin", card.outerHTML);
    });

    galacticCarouselChildrens.slice(0, cardPerView2).forEach(card => {
        galacticCarousel.insertAdjacentHTML("beforeend", card.outerHTML);
    });

    galacticCarousel.classList.add("no-transition");
    galacticCarousel.scrollLeft = galacticCarousel.offsetWidth;
    galacticCarousel.classList.remove("no-transition");

    nebulaArrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (btn.id === "left2") {
                galacticCarousel.scrollLeft += (-firstQuantumCardWidth);
            } else if (btn.id === "right2") {
                galacticCarousel.scrollLeft += firstQuantumCardWidth;
            }
        });
    });

    const infiniteScroll2 = () => {
        if (galacticCarousel.scrollLeft === 0) {
            galacticCarousel.classList.add("no-transition2");
            galacticCarousel.scrollLeft = galacticCarousel.scrollWidth - (2 * galacticCarousel.offsetWidth);
            galacticCarousel.classList.remove("no-transition2");
        }
        else if (Math.ceil(galacticCarousel.scrollLeft) === galacticCarousel.scrollWidth - galacticCarousel.offsetWidth) {
            galacticCarousel.classList.add("no-transition2");
            galacticCarousel.scrollLeft = galacticCarousel.offsetWidth;
            galacticCarousel.classList.remove("no-transition2");
        }
    }

    setInterval(() => galacticCarousel.scrollLeft += firstQuantumCardWidth, 5000);

    galacticCarousel.addEventListener("scroll", infiniteScroll2);
});



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







// -------------------------- PRODUCT CATEGORIES COLLAPSING --------------------------
const parentCtg = document.querySelector('div.parent-ctg');
const menuActivator = document.querySelector('button#menuActivator');
const subCtg = document.querySelector('div.sub-ctg');
function toggleMenu() {
    parentCtg.classList.toggle('parent-ctg-active');
    menuActivator.classList.toggle('activated-menu');
    closeSubctg();
}


function openSubctg() {
    subCtg.classList.add('sub-ctg-active')
}
function closeSubctg() {
    if (subCtg.classList.contains('sub-ctg-active')) {
        subCtg.classList.remove('sub-ctg-active');
    }
}







// --------------- ROUTE TO PRODUCT DETAILS ===============-
function takeMeToProdDetails() {
    location.href = 'pages/products/product-details/product-details.html';
}




// ======================= USER DROPDOWN ===============================
const userDropdown = document.querySelector('div.user-dropdown');
function collapseUserDropDown() {
    userDropdown.classList.toggle('user-dropdown-active');
}