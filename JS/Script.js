/* ============================
   1) MOBILE MENU TOGGLE
=============================== */
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("nav");

if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
    });
}

/* ============================
   2) REAL-TIME DATE & YEAR
=============================== */
const yearSpan = document.querySelector(".year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

const dateSpan = document.querySelector(".current-date");
if (dateSpan) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    dateSpan.textContent = new Date().toLocaleDateString("en-ZA", options);
}

/* ============================
   3) ACCORDION
=============================== */
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", () => {
        acc.classList.toggle("active");

        const panel = acc.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});

/* ============================
   4) MODAL POPUP
=============================== */
const modal = document.querySelector(".modal");
const openModalBtn = document.querySelector(".open-modal");
const closeModalBtn = document.querySelector(".close-modal");

if (openModalBtn && modal) {
    openModalBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });
}
if (closeModalBtn && modal) {
    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
});

/* ============================
   5) LIGHTBOX GALLERY
=============================== */
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox img");

galleryImages.forEach(img => {
    img.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});

if (lightbox) {
    lightbox.addEventListener("click", () => {
        lightbox.style.display = "none";
    });
}

/* ============================
   6) SEARCH FEATURE
=============================== */
const searchInput = document.querySelector("#search");
const searchItems = document.querySelectorAll(".search-item");

if (searchInput) {
    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();

        searchItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(filter) ? "" : "none";
        });
    });
}

/* ============================
   7) GOOGLE MAP
=============================== */  
function initMap() {
    const clubLocation = { lat: -23.910950, lng: 29.447712 };

    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: clubLocation,
    });

    new google.maps.Marker({
        position: clubLocation,
        map: map,
        title: "Noordelikes Rugby Club",
    });
}

window.initMap = initMap;

/* ============================
   8) ENQUIRY FORM VALIDATION
=============================== */
const enquiryForm = document.querySelector("#enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = enquiryForm.name.value.trim();
        const email = enquiryForm.email.value.trim();
        const message = enquiryForm.message.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all required fields.");
            return;
        }

        if (!email.includes("@")) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Thank you! Your enquiry has been submitted successfully.");
        enquiryForm.reset();
    });
}

/* ============================
   9) CONTACT FORM VALIDATION
=============================== */
const contactForm = document.querySelector("#contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const phone = contactForm.phone.value.trim();

        if (phone.length < 10) {
            alert("Please enter a valid phone number.");
            return;
        }

        alert("Your message has been sent!");
        contactForm.reset();
    });
}

/* ============================
   10) SMOOTH SCROLLING
=============================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});
