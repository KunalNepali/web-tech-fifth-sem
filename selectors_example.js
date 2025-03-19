// jQuery code for element, id, and class selectors

// Element selector - Hide or show all <div> elements
$(document).ready(function () {
    $("#showElement").click(function () {
        $("div").show(); // Show all <div> elements
    });
    $("#hideElement").click(function () {
        $("div").hide(); // Hide all <div> elements
    });

    // ID selector - Hide or show an element with specific id
    $("#showId").click(function () {
        $("#box1").show(); // Show the red box (id: box1)
    });
    $("#hideId").click(function () {
        $("#box1").hide(); // Hide the red box (id: box1)
    });

    // Class selector - Hide or show elements with a specific class
    $("#showClass").click(function () {
        $(".box2").show(); // Show all blue boxes (class: box2)
    });
    $("#hideClass").click(function () {
        $(".box2").hide(); // Hide all blue boxes (class: box2)
    });
});
