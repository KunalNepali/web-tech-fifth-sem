// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); // Convert days to milliseconds
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
    console.log(`Cookie set: ${name}=${value}; expires in ${days} days`);
}

// Function to get a cookie by name
function getCookie(name) {
    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');
    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length); // Return the cookie value
        }
    }
    return null; // If not found
}

// Function to delete a cookie
function deleteCookie(name) {
    // Set cookie expiry to the past to remove it
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log(`Cookie deleted: ${name}`);
}

// Example usage of cookie functions
setCookie("username", "JohnDoe", 7); // Set a cookie with 7-day expiry
console.log("Username Cookie Value:", getCookie("username")); // Get the value of "username" cookie
deleteCookie("username"); // Delete the "username" cookie
console.log("Deleted Cookie Value:", getCookie("username")); // Check the value after deletion
