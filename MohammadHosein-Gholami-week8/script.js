// First Practice

const countOccurrences = (arr) => {
  const myMap = new Map();
  // console.log(myMap);
  for (const item of arr) {
    // console.log(item)
    if (myMap.has(item)) {
      myMap.set(item, myMap.get(item) + 1);
    } else {
      myMap.set(item, 1);
    }
  }
  return myMap;
};
const items = ["apple", "banana", "apple", "orange", "banana", "banana"];

// console.log(countOccurrences(items));

// Second Practice

const multiply = (...array) => {
  console.log(array);
  const mySet = new Set(array);
  console.log(mySet);
  const newArray = [...mySet].reduce((acc, curr) => acc * curr, 1);
  console.log(`Result : ${newArray}`);
  return newArray;
};
// multiply(2, 3, 4);
// multiply(2, 3, 2, 4);
// multiply(5 , 5 , 5 , 1);
// multiply(7 , 7 , 2);

// Third Practice

let arr = [1, 2, 3, 4, 5];

function getElement(array, index) {
  try {
    if (!Array.isArray(array)) {
      throw new TypeError("First argument must be an array");
    } else if (!typeof index !== "number") {
      throw new TypeError("Second argument must be an number");
    } else if (index <= array.length) {
      throw new RangeError("Index out of bounds");
    }
    return array[index];
  } catch (error) {
    return error
  }
}

console.log(getElement(5 ,3))
