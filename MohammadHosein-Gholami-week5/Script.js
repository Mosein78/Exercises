// First Practice

const email = "Milad.botostart@gmail.com";
const letterIndex = email.indexOf("@");
const Username = email.slice(0, letterIndex);
const text = `Email: ${email}
Username: ${Username}`;
console.log(text)

// Second Practice
const numbers = [
  "+989486253348",
  "+989355233348",
  "+989356953348",
  "+989456954548",
  "+989356882655",
];
const lengthNumbers = numbers.length
const middleNumber = (lengthNumbers - 1) / 2 
const indexNumber = numbers[2]
const selectNumber = indexNumber.slice(0 , 3)
const changeNumber = indexNumber.replace(selectNumber , "0")
const text2 = `The Call Number : ${indexNumber} and Saved Number : ${changeNumber}`
console.log(text2)
