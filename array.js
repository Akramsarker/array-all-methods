// Array All methods Information, Syntax, Description Examples.....

// ARRAY CONCAT() All information NUMBER(1)
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

// ARRAY copyWithIn() All information NUMBER(2)
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

// Type
// An array

// Description
// 	The changed array.

// Examples
const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.copyWithin(2, 1, 2);
// console.log(fruits);

// ARRAY entries() All information NUMBER(3)
// Definition and Usage
// The entries() method returns an Array Iterator object with key/value pairs:
// The entries() method does not change the original array.

// Syntax
// array.entries()

// Type
// An iterable

// Description
// An array with key/value pairs.

// Examples
const fruitsItem = ["Banana", "Orange", "Apple", "Mango"];
const f = fruitsItem.entries();

for (let x of f) {
  // console.log(x);
}

// ARRAY every() All information NUMBER(4)
// Definition and Usage
// The every() method executes a function for each array element.
// The every() method returns true if the function returns true for all elements.
// The every() method returns false if the function returns false for one element.
// The every() method does not execute the function for empty elements.
// The every() method does not change the original array

// Syntax
// array.every(function(currentValue, index, arr), thisValue)

// Type
// A boolean

// Description
// true if all elements pass the test, otherwise false.

// Examples
const ages = [32, 33, 16, 40];
const result = ages.every(function (age) {
  return age > 18;
});
// console.log(result);
// ages.every(checkAge);
// function checkAge(age) {
//   return age > 18;
// }
// console.log(checkAge());

// ARRAY some() All information NUMBER(5)
// Definition and Usage
// The some() method checks if any array elements pass a test (provided as a function).
// The some() method executes the function once for each array element:
// If the function returns true, some() returns true and stops.
// If the function returns false, some() returns false and stops.
// The some() method does not execute the function for empty array elements.
// The some() method does not change the original array.

// Syntax
// array.some(function(value, index, arr), this)

// Type
// A boolean

// Description
// true if any of the aray elements pass the test, otherwise false.

// Examples
const numbers = [32, 33, 16, 40];
const output = numbers.some(function (number) {
  return number < 18;
});
// console.log(output);

// ARRAY sort() All information NUMBER(6)
// Definition and Usage
// The sort() sorts the elements of an array.
// The sort() overwrites the original array. Main array ke change kore.
// The sort() sorts the elements as strings in alphabetical and ascending order.

// Syntax
// array.sort(compareFunction)

// Examples
const fruitsList = ["Banana", "Orange", "Apple", "Mango"];
const sortFruitsList = fruitsList.sort();
// console.log(sortFruitsList);
// console.log(fruitsList);

const points = [40, 100, 1, 5, 25, 10];
// Sort the numbers in ascending order
const sortNumber = points.sort(function (a, b) {
  return a - b;
});
// console.log(sortNumber);
let firstNum = sortNumber[0];
// console.log(firstNum);

// ARRAY some() All information NUMBER(7)
// Definition and Usage
// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.

// Syntax
// array.push(item1, item2, ..., itemX)

// Type
// A number

// Description
// The new length of the array.

// Examples
const Names = ["Akram", "Rabbi", "Nasim", "Nasir"];
const newName = Names.push("Raihan");
// console.log(newName);
// console.log(Names);

// ARRAY pop() All information NUMBER(8)
// Definition and Usage
// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.

// Syntax
// array.pop()

// Type
// A variable

// Description
// The removed item.
// A string, a number, an array, or any other type allowed in an array.

// Examples
const names = ["Akram", "Rabbi", "Nasim", "Nasir"];
const lastName = names.pop();
// console.log(lastName);
// console.log(names);

// ARRAY shift() All information  NUMBER(9)
// Definition and Usage
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.

// Syntax
// array.shift()

// Type
// A variable

// Description
// The removed item.
// A string, a number, an array, or any other type allowed in an array.

// Examples
const namesList = ["Akram", "Rabbi", "Nasim", "Nasir"];
const nameShift = namesList.shift();
// console.log(nameShift);
// console.log(namesList);

// ARRAY unshift() All information NUMBER(10)
// Definition and Usage
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.

// Syntax
// array.unshift(item1, item2, ..., itemX)
//
// Type
// A number

// Description
// The removed item.
// The new length of the array.

// Examples
const fruitsFavList = ["Banana", "Orange", "Apple", "Mango"];
const lists = fruitsFavList.unshift("Lemon");
// console.log(lists);
// console.log(fruitsFavList);

// ARRAY length() All information NUMBER(11)
// Definition and Usage
// The length property sets or returns the number of elements in an array.

// Syntax
// array.length

// Type
// A number

// Description
// The number of elements in the array.

// Examples
const randomList = ["Banana", "Orange", "Apple", "Mango"];
const randomListNum = randomList.length;
// console.log(randomList);

// ARRAY isArray() All information NUMBER(12)
// Definition and Usage
// The isArray() method returns true if an object is an array, otherwise false.

// Syntax
// Array.isArray(obj)

// Type
// A boolean

// Description
// true if the object is an array, otherwise false.

// Examples
const arrayList = ["Banana", "Orange", "Apple", "Mango", 67];
const isArray = Array.isArray(arrayList);
// console.log(isArray);
const text = "This is a string";
const thisIsArray = Array.isArray(text);
// console.log(thisIsArray);

// ARRAY reverse() All information NUMBER(13)
// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.

// Syntax
// array.reverse()

// Examples
const fruitsListOfArray = ["Banana", "Orange", "Apple", "Mango"];
const resultOfArray = fruitsListOfArray.reverse();
console.log(resultOfArray);
