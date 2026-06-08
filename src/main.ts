let name: string = "magda";

name = "hello";

const age: number = 34;

const arr: number[] = [1234, 56];

const arr2: (number | {})[] = [455, 554, 5432, 3333, 3334];

const users: {}[] = [{}, {}];

console.log(name);

function getSum(num?: number): void {
  console.log(num);
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
