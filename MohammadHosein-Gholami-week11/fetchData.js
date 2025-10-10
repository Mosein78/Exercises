export function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
      resolve(randomNumber);
    }, 500);
  });
}
import { doubleAndAdd } from "./Script.js";

doubleAndAdd()
  .then((result) => console.log("Result:", result))
  .catch((error) => console.error("Error:", error));
