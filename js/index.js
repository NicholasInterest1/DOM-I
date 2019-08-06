const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//-------------------------------------------Nav----------------------------------------------------------

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let nav = document.querySelectorAll("a")

nav.forEach(function(value, i){
  value.textContent = siteContent.nav[`nav-item-${i+1}`];
  value.style.color = 'green';
})

a = document.querySelector("nav");
let patriots = document.createElement("a");
patriots.textContent = 'Dom-o';
patriots.style.color = 'green';
a.appendChild(patriots);
patriots.setAttribute('href', '#');

a = document.querySelector("nav");
let patriots2 = document.createElement("a");
patriots2.textContent = 'Dom';
patriots2.style.color = 'green';
a.prepend(patriots2);
patriots2.setAttribute('href', '#');

//-------------------------------------------H1----------------------------------------------------------

let dom = document.querySelector('h1')
dom.textContent = siteContent.cta.h1

// dom.innerHTML = siteContent['dom']['h1'].split(' ').join ('<br>');

//-------------------------------------------Button------------------------------------------------------

let button = document.querySelector('button')
button.textContent = siteContent.cta.button

//-------------------------------------------Middle Image------------------------------------------------

let round = document.getElementById("cta-img");
round.setAttribute('src', siteContent["cta"]["img-src"])

//-------------------------------------------Top Content-------------------------------------------------

let feature = document.querySelectorAll('.top-content .text-content h4')[0];
feature.textContent = siteContent['main-content']['features-h4']

let paragraph1 = document.querySelectorAll('.top-content .text-content p')[0];
paragraph1.textContent = siteContent['main-content']['features-content']

let about = document.querySelectorAll('.top-content .text-content h4')[1];
about.textContent = siteContent['main-content']['about-h4']

let paragraph2 = document.querySelectorAll('.top-content .text-content p')[1];
paragraph2.textContent = siteContent['main-content']['about-content']

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent['main-content']["middle-img-src"])

//-------------------------------------------Bottom Content---------------------------------------------

let services = document.querySelectorAll('.bottom-content .text-content h4')[0];
services.textContent = siteContent['main-content']['services-h4']

let paragraph3 = document.querySelectorAll('.bottom-content .text-content p')[0];
paragraph3.textContent = siteContent['main-content']['services-content']

let product = document.querySelectorAll('.bottom-content .text-content h4')[1];
product.textContent = siteContent['main-content']['product-h4']

let paragraph4 = document.querySelectorAll('.bottom-content .text-content p')[1];
paragraph4.textContent = siteContent['main-content']['product-content']

let vision = document.querySelectorAll('.bottom-content .text-content h4')[2];
vision.textContent = siteContent['main-content']['vision-h4']

let paragraph5 = document.querySelectorAll('.bottom-content .text-content p')[2];
paragraph5.textContent = siteContent['main-content']['vision-content']

//-------------------------------------------Contact----------------------------------------------------

let contactInfo = document.querySelectorAll('.contact h4')[0];
contactInfo.textContent = siteContent['contact']['contact-h4']

let contactPara1 = document.querySelectorAll('.contact p')[0];
contactPara1.textContent = siteContent['contact'] ['address']

let contactPara2 = document.querySelectorAll('.contact p')[1];
contactPara2.textContent = siteContent['contact']['phone']

let contactPara3 = document.querySelectorAll('.contact p')[2];
contactPara3.textContent = siteContent['contact']['email']

//-------------------------------------------Footer----------------------------------------------------

let footerInfo = document.querySelector('footer p');
footerInfo.textContent = siteContent['footer']['copyright']