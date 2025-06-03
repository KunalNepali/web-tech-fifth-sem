<?php
$mysqli = new mysqli("localhost", "root", "", "student_db");
$id = $_POST['id'];
$name = $_POST['name'];
$branch = $_POST['branch'];
$cgpa = $_POST['cgpa'];
$mysqli->query("UPDATE students SET name='$name', branch='$branch', cgpa='$cgpa' WHERE id=$id");
header("Location: index.php");
?>
