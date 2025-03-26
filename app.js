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




// search box ////

function searchProduct() {
   let query = document.getElementById("searchInput").value.toLowerCase().trim();
   let sections = [
       { keywords: ["men", "men's wear", "trends men's wear"], id: "cardMen" },
       { keywords: ["girl", "girl tops", "trends women's wear"], id: "cardgirl" },
       { keywords: ["saree", "saree collection", "trends saree collection"], id: "cardsaree" },
       { keywords: ["baby", "baby cuddlewrap", "trends baby's wear"], id: "cardbaby" }
   ];

   let found = false;
   sections.forEach(section => {
       if (section.keywords.some(keyword => query.includes(keyword))) {
           document.getElementById(section.id).scrollIntoView({ behavior: "smooth" });
           found = true;
       }
   });

   if (!found) {
       alert("Product not found! Try searching 'Men's Wear', 'Girl Tops', etc.");
   }
}

// submitted
function submitForm() {
   document.getElementById("submitMessage").style.display = "block";
}

function resetForm() {
   document.getElementById("submitMessage").style.display = "none";
   document.getElementById("firstName").value = "";
   document.getElementById("lastName").value = "";
   document.getElementById("email").value = "";
   document.getElementById("number").value = "";
   document.getElementById("address").value = "";
}


// signup
function signUp() {
   let email = document.getElementById("emailInput").value;
   let message = document.getElementById("message");

   if (email.trim() === "") {
       message.innerText = "Please enter an email!";
       message.style.color = "red";
       message.style.display = "block"; // মেসেজ দেখাও
   } else {
       if (message.innerText === "Signed Up Successfully!") {
           message.innerText = ""; // মেসেজ হাইড করো
       } else {
           message.innerText = "Signed Up Successfully!";
           message.style.color = "green";
           message.style.display = "block";
       }
   }
}

function signOut() {
   let message = document.getElementById("message");
   let emailInput = document.getElementById("emailInput");

   if (message.innerText === "Signed Out!") {
       message.innerText = ""; // মেসেজ হাইড করো
       emailInput.value = ""; // ইনপুট ফিল্ড খালি করো
   } else {
       emailInput.value = ""; // ইনপুট ফিল্ড খালি করো
       message.innerText = "Signed Out!";
       message.style.color = "blue";
       message.style.display = "block";
   }
}
