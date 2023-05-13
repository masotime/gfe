/**
 * @param {Object} object
 * @param {string|Array<string>} path
 * @param {*} defaultValue
 * @return {*}
 */
export default function get(object, path, defaultValue) {
  const parts = Array.isArray(path) ? path : path.split('.');
  let current = object;

  do {
    const index = parts.shift();
    if (!index) {
      // end of parts
      break;
    }

    const currentIsIndexable = Array.isArray(current) || current instanceof Object;

    if (!currentIsIndexable || !(index in current)) {
      // can't find path
      return defaultValue;
    }

    // keep going
    current = current[index];    
  } while (current !== undefined)

  return current;
}

const obj = {
  apple: ['orange', { vegetable: 'guava' }]
};

console.log(get({ a: { b: true } }, 'a.b.c'));
