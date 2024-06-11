import { printInfo } from 'print.js';
import { createLogger } from 'logger.js';

const options = {};
const user = { name: "leonardo", age: 30 };
const logger = createLogger(options);

logger('starting...');
printInfo(user);
logger('ending...');