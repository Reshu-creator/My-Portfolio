// Typing animation
const typedText = document.querySelector(".typing");
const words = ["a Web Developer", "a Digital Marketer", "a Copywriter", "an Ads Specialist"];
let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
    currentWord = words[wordIndex];
    if (!isDeleting && charIndex <= currentWord.length) {
        typedText.textContent = currentWord.substring(0, charIndex);
        charIndex++;
        setTimeout(typeEffect, 150);
    } else if (isDeleting && charIndex >= 0) {
        typedText.textContent = currentWord.substring(0, charIndex);
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) {
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 800);
    }
}
typeEffect();
