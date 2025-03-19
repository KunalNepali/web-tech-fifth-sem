// Define a class
class Person {
    // Constructor to initialize properties
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display person's details
    displayDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }

    // Method to check if the person is an adult
    isAdult() {
        return this.age >= 18 ? "Yes, an adult." : "No, not an adult.";
    }
}

// Create objects (instances of the class)
let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 16);

// Call methods on the objects
person1.displayDetails(); // Output: Name: Alice, Age: 25
console.log(person1.isAdult()); // Output: Yes, an adult.

person2.displayDetails(); // Output: Name: Bob, Age: 16
console.log(person2.isAdult()); // Output: No, not an adult.
