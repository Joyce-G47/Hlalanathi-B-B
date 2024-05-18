var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("Family-suite-image");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// script.js

document.addEventListener("DOMContentLoaded", function() {
    const offers = [
      {
        title: "50% Off Winter Special",
        description: "Get 50% off on our exclusive summer collection. Limited time offer!",
        image: "50%.jpg"
      },
      {
        title: "Couples retreat",
        description: "Buy one get one free on select items. Don't miss out!",
        image: "Buyonegetone.jpg"
      },
      {
        title: "Free Attraction Tour ",
        description: "Enjoy free shipping on all orders over $50. Shop now!",
        image: "30%.jpg"
      }
    ];
  
    const offersContainer = document.getElementById("offers-container");
  
    offers.forEach(offer => {
      const offerElement = document.createElement("div");
      offerElement.classList.add("offer");
  
      offerElement.innerHTML = `
        <img src="${offer.image}" alt="${offer.title}">
        <h3>${offer.title}</h3>
        <p>${offer.description}</p>
        <button>Learn More</button>
      `;
  
      offersContainer.appendChild(offerElement);
    });
  });
  