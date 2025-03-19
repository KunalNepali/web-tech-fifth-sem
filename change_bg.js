// Array of image file paths
const images = [
    "img1.jpg",
    "img2.jpg",
    "dl1.jpg",
    "dl2.jpg"
];

// Function to change background image
let currentImageIndex = 0;

function changeBackground() {
    // Select body element
    const body = document.body;

    // Update background image
    body.style.backgroundImage = `url(${images[currentImageIndex]})`;

    // Change to the next image in the array
    currentImageIndex = (currentImageIndex + 1) % images.length; // Loops back to the first image
}
