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
