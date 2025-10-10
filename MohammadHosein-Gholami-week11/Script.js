// First Practice

// const randomPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     // console.log(randomNumber);
//     if (randomNumber < 0.5) {
//       resolve("Hello World");
//     } else {
//       reject("Error occurred");
//     }
//   },1000);
// });

// randomPromise
// .then((message) =>console.log(message))
// .catch((error) =>console.log(error));

// Second Practice

import { fetchData } from "./fetchData.js";
export function doubleAndAdd() {
  return new Promise((resolve, reject) => {
    fetchData().then((first) => {
      return fetchData().then((second) => {
        if (first < 2 || second < 2) {
          reject(new Error("Not in valid range"));
        } else {
          resolve(first * 2 + second);
        }
      });
    });
  });
}
