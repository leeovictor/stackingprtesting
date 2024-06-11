import { createLogger } from 'logger.js';

const logger = createLogger();

export function printAge(age) {
  logger(age);
}

export function printName(name) {
  logger(name);
}

export function printInfo({ name, age }) {
  printName(name);
  printAge(age);
}