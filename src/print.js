import { createLogger } from 'logger.js';

const logger = createLogger();

export function printAge(age) {
  if (typeof age !== 'undefined') {
    logger(age);
  }
}

export function printName(name) {
  if (typeof name !== 'undefined') {
    logger(name);
  }
}

export function printInfo({ name, age }) {
  printName(name);
  printAge(age);
}