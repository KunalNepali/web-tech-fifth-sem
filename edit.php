<?php
$mysqli = new mysqli("localhost", "root", "", "student_db");
$id = $_GET['id'];
$result = $mysqli->query("SELECT * FROM students WHERE id=$id");
$row = $result->fetch_assoc();
?>
<h2>Edit Student</h2>
<form action="update.php" method="POST">
    <input type="hidden" name="id" value="<?= $row['id'] ?>">
    Name: <input type="text" name="name" value="<?= $row['name'] ?>"><br>
    Branch: <input type="text" name="branch" value="<?= $row['branch'] ?>"><br>
    CGPA: <input type="text" name="cgpa" value="<?= $row['cgpa'] ?>"><br>
    <input type="submit" value="Update Student">
</form>
<a href="index.php">Back</a>
