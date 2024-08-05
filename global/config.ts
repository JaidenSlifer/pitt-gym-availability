/**
 * Recursively freeze an object's properties
 * @param obj Object to freeze
 * @returns Frozen (readonly) object
 */
const deepFreeze = <T extends object>(obj: T) => {
  Object.keys(obj).forEach((prop) => {
    let child = obj[prop as keyof T]
    if (
      child &&
      typeof child === 'object' &&
      !Object.isFrozen(child)
    ) {
      deepFreeze(child);
    }
  });
  return Object.freeze(obj);
};

const config = deepFreeze({
  urls: {
    liveCounts: 'https://connect2concepts.com/connect2/?type=bar&key=17c2cbcb-ec92-4178-a5f5-c4860330aea0'
  }
});

export default config;