// Function to calculate the sum and average of numbers in an array
function calculateSumAndAvg(arr) {
    // If the array is empty, return sum and average as 0
    if (arr.length === 0) {
        return { sum: 0, avg: 0 }; // Return object with sum and average as 0
    }

    // Use the reduce method to calculate the sum of all elements in the array
    let sum = arr.reduce((acc, curr) => acc + curr, 0); // acc: accumulator, curr: current value

    // Calculate the average by dividing the sum by the length of the array
    let avg = sum / arr.length; // avg is sum divided by the number of elements

    // Return an object containing both sum and average
    return { sum, avg };
}

// Example array of numbers
const numbers = [1, 2, 3, 4, 5];

// Call the function and store the result in a variable
const result = calculateSumAndAvg(numbers);

// Log the sum and average to the console
console.log('Sum:', result.sum); // Logs the sum of the numbers in the array
console.log('Average:', result.avg); // Logs the average of the numbers in the array

//  Function to remove duplicate values from a string array
function removeDuplicates(arr) {
    // Use a Set to remove duplicates, then convert it back to an array
    return [...new Set(arr)]; // The Set object automatically removes duplicates
}

// Example array of strings with duplicates
const stringArray = ['apple', 'banana', 'apple', 'cherry', 'banana'];

// Call the function and store the result in a variable
const uniqueArray = removeDuplicates(stringArray);

// Log the unique array to the console
console.log('Unique Array:', uniqueArray); // Logs the array with duplicates removed
