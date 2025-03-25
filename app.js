let mainPage = document.querySelector(".mainPage");
let blogContent = document.querySelector(".blogContent");
let cardMen = document.querySelector(".cardMen");
let cardgirl = document.querySelector(".cardgirl");
let aboutPage = document.querySelector(".about");
let contactus = document.querySelector(".contact");


// let quantity = 1;  
// let cartCount = 0;

// function increaseQuantity() {
//     quantity++;
//     document.getElementById("quantity").innerText = quantity;
// }

function decreaseQuantity() {
    if (quantity > 1) {
        quantity--;
        document.getElementById("quantity").innerText = quantity;
    }
}

function addToCart() {
    cartCount += quantity;
    document.getElementById("cartCount").innerText = cartCount;
    alert(quantity + " item(s) added to cart!");
    quantity = 1;  // Reset quantity after adding to cart
    document.getElementById("quantity").innerText = quantity;
}


function home() {
   mainPage.style.display = "flex";
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   blogContent.style.display = "block"
   contactus.style.display="none"

   
   document.getElementById("cardbaby").style.display = "block";
   document.getElementById("cardsaree").style.display = "block";
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("home").style.color = "rgb(1, 190, 190)";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function shop() {
   cardMen.style.display = "block";
   cardgirl.style.display = "block";
   
   document.getElementById("cardbaby").style.display = "block";
   document.getElementById("cardsaree").style.display = "block";
   mainPage.style.display = "none"
   blogContent.style.display = "none";
   aboutPage.style.display = "none";
   contactus.style.display="none"
   
   document.getElementById("blog").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("shop").style.color = "rgb(1, 190, 190)"
   document.getElementById("home").style.color = "black"
   document.getElementById("contact").style.color="black";


}


function blog() {

  
   
   
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "block";
   aboutPage.style.display = "none";
   contactus.style.display="none";

   document.getElementById("cardbaby").style.display = "none";
   document.getElementById("cardsaree").style.display = "none";


   document.getElementById("blog").style.color = "rgb(1, 190, 190)";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black"
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="black";





}


function about() {
   aboutPage.style.display = "block";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none";
   contactus.style.display="none";

   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black"
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "rgb(1, 190, 190)"
   document.getElementById("contact").style.color="black";


}


function contact() {
   contactus.style.display="block";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"


   document.getElementById("cardbaby").style.display = "none";
   document.getElementById("cardsaree").style.display = "none";


   document.getElementById("blog").style.color = "black";
   document.getElementById("home").style.color = "black";
   document.getElementById("shop").style.color = "black";
   document.getElementById("about").style.color = "black";
   document.getElementById("contact").style.color="rgb(1, 190, 190)"

} 


function showCard(img){
   let cartImg = document.getElementById("cartImg");
   cartImg.src=img.src;
   document.querySelector(".cart").style.display="flex";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"

   document.getElementById("cardbaby").style.display = "none";
   document.getElementById("cardsaree").style.display = "none";





}

// Add to Cart

function addItem(){
   document.querySelector(".addCart").style.display="block";
   contactus.style.display="none";
   aboutPage.style.display = "none";
   cardMen.style.display = "none";
   cardgirl.style.display = "none";
   mainPage.style.display = "none";
   blogContent.style.display = "none"

   document.getElementById("cardbaby").style.display = "none";
   document.getElementById("cardsaree").style.display = "none";
}


let cartCount = 0;

function addToCart() {
    cartCount++; // কার্ট কাউন্ট ১ বাড়াবে
    document.getElementById("cartCount").innerText = cartCount; // সংখ্যা আপডেট করবে
}


function clearCart() {
  cartCount = 0;
  document.getElementById("cartCount").innerText = cartCount;
}

// Buy now card//

function showPaymentForm() {
  // Hide image after clicking 'Buy Now'
  document.querySelector('.cartImg').style.display = 'none'; // Hide the image
  document.querySelector('.cartText').style.display = 'none'; // Hide cart text
  document.querySelector('.paymentForm').style.display = 'block'; // Show payment form
}

function closePaymentForm() {
  document.querySelector('.cartImg').style.display = 'block'; // Show image again
  document.querySelector('.cartText').style.display = 'block'; // Show cart text again
  document.querySelector('.paymentForm').style.display = 'none'; // Hide payment form
}

function checkout() {
  // Process payment details
  alert('Checkout completed!');
}




