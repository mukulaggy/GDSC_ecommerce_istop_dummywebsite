window.addEventListener("scroll", function() {
    let scrollTop = window.scrollY;
    let containerHeight = document.querySelector(".product .product_container").offsetHeight;
    let fixedImage = document.querySelector(".main");

    // caculate opacity
    let opacity = 1 - (scrollTop / containerHeight);
    fixedImage.style.opacity = opacity;
});
