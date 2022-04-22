// Array All methods

// ARRAY CONCAT()
// The concat() method concatenates (joins) two or more arrays.
// The concat() method returns a new array, containing the joined arrays.
// The concat() method does not change the existing arrays.

// Syntax
// array1.concat(array2, array3, ..., arrayX)

// Parameters
// Parameter
// array2
// array3
// ...
// arrayX

// Description
// Required.
// The arrays to be joined.

// Examples
const firstArray = ["Akram", "Rabbi"];
const secondArray = ["Nasim", "Nasir", "Raihan"];
// const totalArray = firstArray.concat(secondArray);

// console.log(totalArray);
// console.log(firstArray);

// ARRAY copyWithIn()
// Definition and Usage
// The copyWithin() method copies array elements to another position in the array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.

// Syntax
// array.copyWithin(target, start, end)

// Parameters
// Parameter
// target
// start
// end

// Description
// Required. The index (position) to copy the elements to.
// Optional.The start index (position). Default is 0.
// Optional. The end index (position). Default is the array length

// Type	Description
// An array	The changed array.
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits.copyWithin(2, 0, 2));

console.log(fruits);
