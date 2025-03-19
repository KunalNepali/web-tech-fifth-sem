// jQuery for handling 5 common events
$(document).ready(function () {

    // 1. Click Event
    $("#clickButton").click(function () {
        $("#output").text("The button was clicked!");
    });

    // 2. Hover Event
    $("#hoverBox").hover(
        function () {
            $(this).css("background-color", "yellow"); // On hover
        },
        function () {
            $(this).css("background-color", "lightblue"); // On hover out
        }
    );

    // 3. Double-Click Event
    $("#dblClickBox").dblclick(function () {
        $(this).css("background-color", "orange"); // Change background color on double click
        $("#output").text("Box was double-clicked!");
    });

    // 4. Keypress Event
    $("#keyInput").keypress(function (event) {
        $("#output").text("You pressed: " + event.key);
    });

    // 5. Focus Event
    $("#focusButton").click(function () {
        $("#keyInput").focus(); // Focus the input field
        $("#output").text("The input field is now focused!");
    });
});
