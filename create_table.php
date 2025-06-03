<?php
$mysqli = new mysqli("localhost", "root", "", "student_db");

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

$sql = "CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    branch VARCHAR(50),
    cgpa FLOAT
)";

if ($mysqli->query($sql) === TRUE) {
    echo "Table created successfully";
} else {
    echo "Error: " . $mysqli->error;
}

$mysqli->close();
?>
