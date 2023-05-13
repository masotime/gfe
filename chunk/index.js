/**
 * @param {Array} array - The array to process.
 * @param {number} [size=1] - The length of each chunk.
 * @returns {Array} - Returns the new array of chunks.
 */
export default function chunk(array, size = 1) {
  const output = [];

  for (let i=0; i < array.length;) {
    const current = [];
    const jEnd = Math.min(size, array.length - i);
    for (let j=0; j < jEnd; j+= 1) {      
      current.push(array[i]);
      i+= 1;
    }
    output.push(current);
  }

  return output;
  
}

