<?php
// Connect to MySQL on port 3309, no password, database = student_db
$mysqli = new mysqli("localhost", "root", "", "student_db", 3309);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Run query to get all students
$result = $mysqli->query("SELECT * FROM students");

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . "<br>";
    }
} else {
    echo "No records found.";
}

// Close connection
$mysqli->close();
?>
