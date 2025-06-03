<?php
$mysqli = new mysqli("localhost", "root", "", "student_db");
$name = $_POST['name'];
$branch = $_POST['branch'];
$cgpa = $_POST['cgpa'];
$mysqli->query("INSERT INTO students (name, branch, cgpa) VALUES ('$name', '$branch', '$cgpa')");
header("Location: index.php");
?>
