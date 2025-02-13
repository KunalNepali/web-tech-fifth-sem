<?php

class Animal {
    
    public function makeSound() {
        return "Animal sound!";
    }
}
class Dog extends Animal {
    
    public function makeSound() {
        return "Bark!";
    }
}


class Cat extends Animal {
    
    public function makeSound() {
        return "Meow!";
    }
}


$animal = new Animal();
$dog = new Dog();
$cat = new Cat();


echo "Animal: " . $animal->makeSound() . "<br>"; 
echo "Dog: " . $dog->makeSound() . "<br>";       
echo "Cat: " . $cat->makeSound() . "<br>";       
?>

