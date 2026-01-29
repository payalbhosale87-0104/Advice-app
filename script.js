// Step 1: Store advices in an array
const advices = [
    "Believe in yourself.",
    "Don't overthink everything.",
    "Learn from your mistakes.",
    "Be kind to others.",
    "Stay positive.",
    "Never stop learning.",
    "Work hard and stay humble."
];

// Step 2: Select elements
const adviceText = document.getElementById("advice");
const button = document.getElementById("btn");

// Step 3: Button click event
button.addEventListener("click", function () {
    // Step 4: Generate random number
    const randomIndex = Math.floor(Math.random() * advices.length);

    // Step 5: Display advice
    adviceText.innerText = advices[randomIndex];
});