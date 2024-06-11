export const createLogger = (options) => {
  const options = { ...defaultOptions, ...options };
  return (...args) => {
    console.log(...args, ...options);
  };
};