<?php
$mysqli = new mysqli("localhost", "root", "", "student_db");
$id = $_GET['id'];
$mysqli->query("DELETE FROM students WHERE id=$id");
header("Location: index.php");
?>
