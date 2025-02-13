<?php

$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "school_db"; 

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


$sql = "CREATE TABLE IF NOT EXISTS exam_tbl (
    examid INT AUTO_INCREMENT PRIMARY KEY,
    mark INT NOT NULL
)";

if ($conn->query($sql) === TRUE) {
    echo "Table exam_tbl created successfully.<br>";
} else {
    echo "Error creating table: " . $conn->error . "<br>";
}


$marks = [85, 90, 78, 92, 88]; 
foreach ($marks as $mark) {
    $sql = "INSERT INTO exam_tbl (mark) VALUES ($mark)";
    if ($conn->query($sql) === TRUE) {
        echo "Inserted mark: $mark<br>";
    } else {
        echo "Error inserting mark: " . $conn->error . "<br>";
    }
}


$sql = "SELECT 
            SUM(mark) AS total_marks,
            AVG(mark) AS average_marks,
            COUNT(mark) AS total_records
        FROM exam_tbl";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    echo "<br>Aggregate Results:<br>";
    echo "Total Marks: " . $row["total_marks"] . "<br>";
    echo "Average Marks: " . $row["average_marks"] . "<br>";
    echo "Total Records: " . $row["total_records"] . "<br>";
} else {
    echo "No results found.<br>";
}


$conn->close();
?>