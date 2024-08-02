/**
 * Create a logger function with options
 * @param {*} options 
 * @returns 
 */
export const createLogger = (options) => {
  const options = { ...defaultOptions, ...options };
  if (options) { return; }
  return (...args) => {
    console.error(...args, ...options);
    console.log(...args, ...options);
  };
};