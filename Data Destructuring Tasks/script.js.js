console.log("--- Step 2: Array Destructuring ---");
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// Extracting values, skipping elements ('green'), and assigning variables
const [primary, , secondary, ...others] = colors;

console.log(primary);   // 'red'
console.log(secondary); // 'blue'
console.log(others);    // ['yellow', 'purple']


console.log("\n--- Step 3: Object Destructuring ---");
const user = {
    username: 'JohnDoe',
    email: 'john@example.com',
    age: 25
};

// Extracting properties efficiently
const { username, email } = user;

console.log(username); // 'JohnDoe'
console.log(email);    // 'john@example.com'


console.log("\n--- Step 4: Advanced Destructuring ---");
const settings = {
    display: {
        theme: 'dark',
        fontSize: '16px'
    },
    notifications: true
};

// Nested destructuring, renaming 'theme' to 'currentTheme', and default values
const { 
    display: { theme: currentTheme, resolution = '1080p' } 
} = settings;

console.log(currentTheme); // 'dark' (renamed variable)
console.log(resolution);   // '1080p' (default value used because it didn't exist)


console.log("\n--- Step 5: Destructuring in Functions ---");
const product = {
    id: 101,
    title: 'Wireless Mouse',
    price: 29.99,
    specs: {
        color: 'black',
        wireless: true
    }
};

// Applying destructuring directly in parameters for readability
function displayProductSummary({ title, price, specs: { color } }) {
    console.log(`Product: ${title}`);
    console.log(`Price: $${price}`);
    console.log(`Color: ${color}`);
}

displayProductSummary(product);