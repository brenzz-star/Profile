const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");


// ========================================
// 1. NAVBAR ACTIVE
// ========================================

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// ========================================
// 2. ANIMASI SAAT SCROLL
// ========================================

const animatedElements = document.querySelectorAll(
    ".section-title, .biodata, .gallery, .personal-description, " +
    ".education-item, .organization-card, .skill-card, " +
    ".competence-card, .achievement-card, .portfolio-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ========================================
// 3. TYPING EFFECT
// ========================================

const typingText = document.querySelector(".home-content h2");

const text = "Software Engineering Student";

let index = 0;


function typingEffect() {

    if (index < text.length) {

        typingText.textContent =
            text.substring(0, index + 1);

        index++;

        setTimeout(typingEffect, 70);

    }

}


if (typingText) {

    typingText.textContent = "";

    typingEffect();

}