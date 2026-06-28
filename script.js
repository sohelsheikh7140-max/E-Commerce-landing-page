/* ================= HERO SLIDER ================= */

const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

}

setInterval(nextSlide,4000);

showSlide(currentSlide);



/* ================= ADD TO CART ================= */

let cartCount=0;

let totalPrice=0;

const cartBtn=document.querySelector(".cart");

const sidebar=document.getElementById("cartSidebar");

const closeCart=document.getElementById("closeCart");

const cartItems=document.getElementById("cartItems");

const total=document.getElementById("totalPrice");



cartBtn.onclick=()=>{

sidebar.classList.add("active");

}



closeCart.onclick=()=>{

sidebar.classList.remove("active");

}



document.querySelectorAll(".cart-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

const card=btn.closest(".product-card");

const name=card.querySelector("h3").innerText;

const img=card.querySelector("img").src;

const price=parseInt(

card.querySelector(".price").innerText.replace(/[^\d]/g,'')

);



cartCount++;

document.getElementById("cartCount").innerText=cartCount;



totalPrice+=price;

total.innerText=totalPrice.toLocaleString();



document.querySelector(".empty-cart")?.remove();



const item=document.createElement("div");

item.className="cart-item";



item.innerHTML=`

<img src="${img}">

<div>

<h4>${name}</h4>

<p>₹${price.toLocaleString()}</p>

<button class="remove-btn">

Remove

</button>

</div>

`;



cartItems.appendChild(item);



btn.innerHTML="✓ Added";

btn.style.background="#27ae60";



setTimeout(()=>{

btn.innerHTML='<i class="fa-solid fa-cart-shopping"></i> Add To Cart';

btn.style.background="#ff9900";

},1500);



});

});



/* ================= REMOVE PRODUCT ================= */

cartItems.addEventListener("click",e=>{

if(e.target.classList.contains("remove-btn")){

const item=e.target.closest(".cart-item");



const price=parseInt(

item.querySelector("p").innerText.replace(/[^\d]/g,'')

);



totalPrice-=price;

total.innerText=totalPrice.toLocaleString();



cartCount--;

document.getElementById("cartCount").innerText=cartCount;



item.remove();



if(cartItems.children.length===0){

cartItems.innerHTML=`

<p class="empty-cart">

Your cart is empty.

</p>

`;

}

}

});
/* ================= WISHLIST ================= */

document.querySelectorAll(".wishlist").forEach(btn=>{

btn.addEventListener("click",()=>{

const icon=btn.querySelector("i");

if(icon.classList.contains("fa-regular")){

icon.classList.remove("fa-regular");

icon.classList.add("fa-solid");

icon.style.color="red";

}

else{

icon.classList.remove("fa-solid");

icon.classList.add("fa-regular");

icon.style.color="white";

}

});

});



/* ================= LIVE SEARCH ================= */

const searchInput=document.querySelector(".search input");

const searchResult=document.getElementById("searchResult");

const productCards=document.querySelectorAll(".product-card");

searchInput.addEventListener("keyup",()=>{

const value=searchInput.value.toLowerCase();

searchResult.innerHTML="";

if(value===""){

searchResult.classList.remove("active");

productCards.forEach(card=>card.style.display="block");

return;

}

searchResult.classList.add("active");

let found=false;

productCards.forEach(card=>{

const name=card.querySelector("h3").innerText.toLowerCase();

if(name.includes(value)){

card.style.display="block";

const item=document.createElement("div");

item.className="search-item";

item.innerText=card.querySelector("h3").innerText;

item.onclick=()=>{

card.scrollIntoView({

behavior:"smooth",

block:"center"

});

searchResult.classList.remove("active");

};

searchResult.appendChild(item);

found=true;

}else{

card.style.display="none";

}

});

if(!found){

searchResult.innerHTML="<div class='search-item'>No Product Found</div>";

}

});



/* ================= LOGIN POPUP ================= */

const loginPopup=document.getElementById("loginPopup");

document.querySelector(".signin").onclick=()=>{

loginPopup.classList.add("active");

}

document.querySelector(".close-login").onclick=()=>{

loginPopup.classList.remove("active");

}



/* ================= QUICK VIEW ================= */

const quick=document.getElementById("quickView");

const quickImg=document.getElementById("quickImage");

const quickTitle=document.getElementById("quickTitle");

const quickPrice=document.getElementById("quickPrice");

document.querySelectorAll(".product-card img").forEach(img=>{

img.addEventListener("click",()=>{

const card=img.closest(".product-card");

quick.classList.add("active");

quickImg.src=img.src;

quickTitle.innerText=card.querySelector("h3").innerText;

quickPrice.innerText=card.querySelector(".price").innerText;

});

});

document.querySelector(".close-view").onclick=()=>{

quick.classList.remove("active");

};



/* ================= CHECKOUT ================= */

document.getElementById("checkoutBtn").onclick=()=>{

if(cartCount===0){

alert("Your Cart Is Empty");

}else{

alert("Order Placed Successfully ✅");

cartItems.innerHTML="<p class='empty-cart'>Your cart is empty.</p>";

cartCount=0;

totalPrice=0;

document.getElementById("cartCount").innerText="0";

document.getElementById("totalPrice").innerText="0";

sidebar.classList.remove("active");

}

};
/* ================= LOADING SCREEN ================= */

window.addEventListener("load",()=>{

const loader=document.createElement("div");

loader.id="loader";

loader.innerHTML="<h1>ShopZone</h1>";

document.body.appendChild(loader);

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.remove();

},500);

},1200);

});



/* ================= TOAST MESSAGE ================= */

function toast(message){

const t=document.createElement("div");

t.className="toast";

t.innerText=message;

document.body.appendChild(t);

setTimeout(()=>{

t.classList.add("show");

},100);

setTimeout(()=>{

t.classList.remove("show");

setTimeout(()=>{

t.remove();

},400);

},2200);

}



document.querySelectorAll(".cart-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

toast("✅ Product Added To Cart");

});

});



/* ================= CURSOR GLOW ================= */

const glow=document.createElement("div");

glow.className="cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",e=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});



/* ================= SCROLL REVEAL ================= */

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-item");

}

});

});

document.querySelectorAll(".product-card,.offer-card").forEach(item=>{

item.classList.add("hidden-item");

observer.observe(item);

});



/* ================= MOBILE MENU ================= */

const menuBtn=document.createElement("div");

menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

menuBtn.className="mobile-menu";

document.querySelector(".navbar").prepend(menuBtn);

menuBtn.onclick=()=>{

document.querySelector(".menu").classList.toggle("open");

};



/* ================= SHOP NOW ================= */

document.querySelectorAll(".shop-btn").forEach(btn=>{

btn.onclick=()=>{

document.querySelector(".products").scrollIntoView({

behavior:"smooth"

});

};

});



/* ================= BUY NOW ================= */

document.querySelectorAll(".buy-btn").forEach(btn=>{

btn.onclick=()=>{

toast("🚀 Redirecting To Checkout...");

};

});



/* ================= SEARCH CLOSE ================= */

document.addEventListener("click",(e)=>{

if(!e.target.closest(".search")){

searchResult.classList.remove("active");

}

});
const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

button.addEventListener("click", () => {

const card = button.closest(".product-card");

const title = card.querySelector("h3").innerText;
const image = card.querySelector("img").src;

const priceText = card.querySelector(".price").innerText;
const price = priceText.match(/\d[\d,]*/)[0];

const cartItem = document.createElement("div");

cartItem.className = "cart-item";

cartItem.innerHTML = `
<img src="${image}">
<div class="cart-info">
<h4>${title}</h4>
<p>₹${price}</p>
<button class="remove-item">Remove</button>
</div>
`;

document.getElementById("cartItems").appendChild(cartItem);

let count = parseInt(document.getElementById("cartCount").innerText);

document.getElementById("cartCount").innerText = count + 1;

let total = parseInt(document.getElementById("totalPrice").innerText);

total += parseInt(price.replace(/,/g, ""));

document.getElementById("totalPrice").innerText = total.toLocaleString();

sidebar.classList.add("active");

});

});
document.addEventListener("click", function(e){

if(e.target.classList.contains("remove-item")){

const item = e.target.closest(".cart-item");

const price = parseInt(
item.querySelector("p").innerText.replace(/[^\d]/g,"")
);

item.remove();

let total = parseInt(document.getElementById("totalPrice").innerText.replace(/,/g,""));

total -= price;

if(total < 0) total = 0;

document.getElementById("totalPrice").innerText = total.toLocaleString();

let count = parseInt(document.getElementById("cartCount").innerText);

count--;

if(count < 0) count = 0;

document.getElementById("cartCount").innerText = count;

if(document.querySelectorAll(".cart-item").length==0){

document.getElementById("cartItems").innerHTML="<p class='empty-cart'>Your cart is empty.</p>";

}

}

});
const products=[

"iPhone 16 Pro",

"Samsung Galaxy S25",

"OnePlus 13",

"Gaming Laptop",

"MacBook Air M4",

"Mechanical Keyboard",

"Gaming Mouse",

"Bluetooth Speaker",

"Smart Watch",

"AirPods Pro",

"DSLR Camera",

"Power Bank",

"Wireless Charger",

"Gaming Chair",

"Monitor",

"LED TV",

"Men Jacket",

"Running Shoes",

"Backpack",

"Headphones"

];

const input=document.querySelector(".search input");

const suggestions=document.getElementById("suggestions");

input.addEventListener("keyup",()=>{

const value=input.value.toLowerCase();

suggestions.innerHTML="";

if(value===""){

suggestions.style.display="none";

return;

}

let match=products.filter(item=>

item.toLowerCase().includes(value)

);

match.forEach(item=>{

const div=document.createElement("div");

div.innerText=item;

div.onclick=()=>{

input.value=item;

suggestions.style.display="none";

};

suggestions.appendChild(div);

});

suggestions.style.display=

match.length?"block":"none";

});

document.addEventListener("click",e=>{

if(!e.target.closest(".search")){

suggestions.style.display="none";

}

});
/* ======================= SHOPPING CART ======================= */

let cart = [];

const cartCounter = document.getElementById("cartCount");

const cartItems = document.getElementById("cartItems");

const totalPrice = document.getElementById("totalPrice");

document.querySelectorAll(".cart-btn").forEach(btn=>{

btn.addEventListener("click",()=>{

const card = btn.closest(".product-card");

const name = card.querySelector("h3").innerText;

const img = card.querySelector("img").src;

const priceText = card.querySelector(".price").innerText;

const price = Number(priceText.replace(/[^\d]/g,""));

cart.push({

name,

img,

price

});

updateCart();

showToast("✅ Product Added To Cart");

});

});



function updateCart(){

cartCounter.innerText = cart.length;

cartItems.innerHTML = "";

let total = 0;

cart.forEach((item,index)=>{

total += item.price;

cartItems.innerHTML += `

<div class="cart-product">

<img src="${item.img}">

<div class="cart-details">

<h4>${item.name}</h4>

<p>₹${item.price.toLocaleString()}</p>

<button onclick="removeCart(${index})">

Remove

</button>

</div>

</div>

`;

});

if(cart.length===0){

cartItems.innerHTML="<p>Your Cart Is Empty</p>";

}

totalPrice.innerText=total.toLocaleString();

}



function removeCart(index){

cart.splice(index,1);

updateCart();

showToast("🗑 Product Removed");

}



/* ======================= TOAST ======================= */

function showToast(text){

const toast=document.createElement("div");

toast.className="toast";

toast.innerHTML=text;

document.body.appendChild(toast);

setTimeout(()=>{

toast.classList.add("show");

},100);

setTimeout(()=>{

toast.classList.remove("show");

setTimeout(()=>{

toast.remove();

},500);

},2000);

}
