const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");
const products = document.getElementsByClassName("pro");
let img = "";

if (bar) {
	bar.addEventListener("click", function() {
		nav.classList.add("active");
	})
}

if (close) {
	close.addEventListener("click", function() {
		nav.classList.remove("active");
	})
}

const proDetails = document.getElementsByClassName("s-product")[0];
const proDetailsBg = document.getElementsByClassName("s-product-bg")[0];
const closeProDetailsBtn = document.querySelector(".s-product .fa-times");
const proDetailsImage = document.querySelectorAll(".s-product .images img")[0];
const cartBtn = document.querySelector(".cart-btn");

let cartProducts = [];

for(let i = 0; i < products.length; i++) {
	products[i].addEventListener("click", function() {
	let sProductCounter = 0;
		proDetails.classList.toggle("active");
		proDetailsBg.classList.toggle("active");
		proDetailsImage.setAttribute("src", products[i].children[0].getAttribute("src"));
		document.body.classList.toggle("stop-scrolling");
		cartBtn.addEventListener("click", function(event) {
			if (sProductCounter == 0) 
				cartProducts.push(products[i].children[0].getAttribute("src"));

			else {
				event.preventDefault();
			}
			sProductCounter++
		})
	})
}

closeProDetailsBtn.addEventListener("click", function() {
	proDetails.classList.toggle("active");
	proDetailsBg.classList.toggle("active");
	document.body.classList.toggle("stop-scrolling");	
})