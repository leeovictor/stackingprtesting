import { printInfo } from 'print.js';

const me = { name: "leonardo victor", age: 30 };

if (typeof me !== 'undefined') {
  printInfo(me);
  printInfo(me * 2);
}