const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector("#prev");
const next_btn = document.querySelector("#next");

let n = 0;

function changeSlide(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}

changeSlide();

prev_btn.addEventListener('click', (e) => {

    if (n > 0) {
        n--;
    } else {
        n = imgs.length - 1;
    }
    changeSlide();
});

next_btn.addEventListener('click', (e) => {

    if (n < imgs.length - 1) {
        n++;
    } else {
        n = 0;
    }
    changeSlide();
});


// PRODUCT SCROLL BAR
// const scrollContainer = document.querySelectorAll('.product-imgs');

// for(const item of scrollContainer){
    
//     item.addEventListener('wheel', (e)=>{
//         e.preventDefault();
//         item.scrollLeft += e.deltaY;
//     })
// }

// MOBILE PHONE OPTION SLIDER

const options = document.querySelectorAll(".option");
const mainImage = document.querySelector(".product-display-image img");
const productTitle = document.querySelector("#product-display-title");
const productPrice = document.querySelector("#product-display-price");
const productMRP = document.querySelector("#product-display-mrp");

options.forEach(option => {
    option.addEventListener("click", () => {

    options.forEach(opt => {
        opt.style.border = "1px solid black"; // Reset border
    });

    const newTitle = option.getAttribute("data-title");
    const newPrice = option.getAttribute("price");
    const newMRP = option.getAttribute("mrp");
    const newSrc = option.getAttribute("src");

    productTitle.textContent = newTitle;
    productPrice.textContent = newPrice;
    productMRP.textContent = newMRP;
    mainImage.setAttribute("src", newSrc);
    option.style.border=" 5px solid #007185";
    });
});

  