// First Practice
const numbers = [5, 12, 8, 130, 44];
const newNumber = () => {
  const copyNumber = [...numbers];
  const sortNumber = copyNumber.sort((a, b) => a - b);
  return sortNumber;
};
console.log(newNumber());

const smallNumber = () => {
  const underThirtyNumber = numbers.filter((number) => number <= 30);
  return underThirtyNumber;
};
console.log(smallNumber());

const resultNumber = () => {
  const result = numbers.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return result;
};
console.log("Result :", resultNumber());

const numberToString = () => {
  const string = numbers.map((number) => number.toString());
  return string;
};
console.log(numberToString());

const resultAfterIndex = () => {
  const result1 = numbers.map((number, index) => {
    return number - index;
  });
  return result1;
};
console.log(resultAfterIndex());

// Second Practice

function getWeekday(date) {
  const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];
  const dayName = days[date.getDay()];
  return dayName;
}
console.log("Day :", getWeekday(new Date("2012-10-10")));

// Third Practice

function getRandomInt(min, max) {
  const randomNumber = Math.random();
  const realRandomNumber = randomNumber * (max - min + 1);
  const floorNumber = Math.floor(realRandomNumber + min);
  return floorNumber;
}
console.log("Number :", getRandomInt(0, 10));

// Forth Number
function kebabToPascalCase(sentence) {
  const words = sentence.split(" ");
  const transformedWords = words.map((word) => {
    if (word.includes("-")) {
      const parts = word.split("-");
      const pascalCaseWord = parts
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join("");
      return pascalCaseWord;
    } else {
      return word;
    }
  });
  return transformedWords.join(" ");
}

const sentence = "convert kebab-case to pascal-case";
const result = kebabToPascalCase(sentence);
console.log(result);
// ٍExpected to be: "Convert KebabCase To PascalCase"
