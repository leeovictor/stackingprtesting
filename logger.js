/**
 * Create a logger function with options
 * @param {*} options 
 * @returns 
 */
export const createLogger = (options) => {
  const options = { ...defaultOptions, ...options };
  return (...args) => {
    console.log(...args, ...options);
  };
};