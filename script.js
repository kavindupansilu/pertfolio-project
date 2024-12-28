document.addEventListener("DOMContentLoaded", function () {
    // Select all elements with the class 'fade-in-element'
    var elements = document.querySelectorAll('.fade-in-element');

    // Add the 'visible' class to each element after a delay
    elements.forEach(function (element) {
        element.classList.add('visible');
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const typedTextElement = document.getElementById('typed-text');
    const phrases = ["Web Development", "Quality Assurance", "Freelancing"];
    let currentPhraseIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100;  // Speed of typing
    const deletingSpeed = 50;  // Speed of deleting
    const delayBetweenPhrases = 2000; // Delay between each phrase

    function type() {
        const currentPhrase = phrases[currentPhraseIndex];
        if (isDeleting) {
            typedTextElement.innerText = currentPhrase.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            typedTextElement.innerText = currentPhrase.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        if (!isDeleting && currentCharIndex === currentPhrase.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenPhrases);
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
        }
    }

    // Start the typing effect
    type();

});


const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

