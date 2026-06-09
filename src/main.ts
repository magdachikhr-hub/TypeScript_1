let name: string = "magda";

name = "hello";

const age: number = 34;

const arr: number[] = [1234, 56];

const arr2: (number | {})[] = [455, 554, 5432, 3333, 3334];

const users: {}[] = [{}, {}];

console.log(name);

function getSum(num?: number, name = "natia"): void {
  console.log(num, name);
}

getSum(12);

function getName(): string {
  return "hii";
}

getName();

//boolean
//undefined
//null

let answer: boolean = true;
console.log(answer);

let name2: string = "madu";
let age2: number = 20;
let isAdult: boolean = true;

console.log(name2);
console.log(age2);
console.log(isAdult);

//

// function getFullName(first: string, last: string): string {
//   const result = first + " " + last;
//   console.log(result);
//   return result;
// }

function getFullName(first: string, last: string = "chxiro"): string {
  console.log(`${first} ${last}`);

  return `${first} ${last}`;
}

getFullName("madu");

//TS_2

// interface UserData {
//   name: string;
//   year: number;
// }
//this has to be all the way up

let x: number | string = 568;

x = "sdfjksf";

let arr3: [number, number, number, number] = [123, 4545, 7, 4];

let arr4: number[] = [123, 4545, 7, 4];
let arr5: (number | string | boolean)[] = [true, 49594, "goodbye"];
//or | object

// let user: {
//   name: string;
//   year: number;
// } = {
//   name: "natia",
//   year: 1234,
// };

// let user: UserData = {
//   name: "natia",
//   year: 1234,
// };

// let admin: UserData = {
//   name: "gio",
//   year: 1999,
// };

const form = document.querySelector(".user_form") as HTMLFormElement;
const userNameInput = document.querySelector("#userName") as HTMLInputElement;
const mailInput = document.querySelector("#mail") as HTMLInputElement;
const messageInput = document.querySelector("#message") as HTMLInputElement;
////////
const outputName = document.querySelector(".outputName") as HTMLSpanElement;
const outputMail = document.querySelector(".outputmail") as HTMLSpanElement;
const outputMessage = document.querySelector(
  ".outputMessage",
) as HTMLSpanElement;

interface UserData {
  username: string;
  mail: string;
  message: string;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user: UserData = {
    username: userNameInput.value,
    mail: mailInput.value,
    message: messageInput.value,
  };
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
  displayInfo();
  form.reset();
});

function displayInfo(): void {
  const newUser: UserData = JSON.parse(localStorage.getItem("user") as strings);
  outputName.textContent = newUser.username;
  outputMail.textContent = newUser.mail;
  outputMessage.textContent = newUser.message;
}
