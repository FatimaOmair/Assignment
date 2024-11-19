//  Function to Calculate Total Price

// Defining an interface for the structure of product objects
interface ProductValues {
    name: string;   // Name of the product (string)
    price: number;  // Price of the product (number)
  }
  
  // This function takes an array of product objects and calculates the total price
  function getTotalPrice(products: ProductValues[]): number {
    // The reduce method accumulates the total price of all products in the array
    return products.reduce((total, product) => total + product.price, 0);
  }
  
  // Array of product objects to be used as input for the getTotalPrice function
  const products: ProductValues[] = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
    { name: 'Product 4', price: 40 },
    { name: 'Product 5', price: 50 },
  ];
  
  // Calling the function to calculate the total price of all products
  const totalPrice = getTotalPrice(products);
  // Logging the total price to the console
  console.log('Total Price:', totalPrice);  // Output: Total Price: 150
  
  
  //  Function to Validate Email Address
  
  // This function checks if the provided email is in a valid format
  function isValidEmail(email: string): boolean {
    // Regular expression pattern to validate the email format
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // Returns true if the email matches the regex pattern, otherwise false
    return regex.test(email);
  }
  
  // Test email addresses to check if the function works as expected
  const email1 = 'test@example.com';
  console.log(isValidEmail(email1)); // Output: true (valid email)
  
  const email2 = 'invalid-email.com';
  console.log(isValidEmail(email2)); // Output: false (invalid email)
  