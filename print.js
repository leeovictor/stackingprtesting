export function printAge(age) {
  console.log(age);
}

export function printName(name) {
  console.log(name);
}

export function printInfo({ name, age }) {
  printName(name);
  printAge(age);
}