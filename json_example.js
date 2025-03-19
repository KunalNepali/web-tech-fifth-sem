// Example Object in JavaScript
let user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    },
    hobbies: ["reading", "traveling", "coding"]
};

// Convert JavaScript object to JSON string using JSON.stringify()
let jsonString = JSON.stringify(user);
console.log("JSON String:", jsonString);

// Convert JSON string back to JavaScript object using JSON.parse()
let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// Accessing properties from the parsed object
console.log("Name:", parsedObject.name);
console.log("City:", parsedObject.address.city);
console.log("First Hobby:", parsedObject.hobbies[0]);
