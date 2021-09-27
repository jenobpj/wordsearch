const transpose = function(matrix) {
    // Put your solution here
    const output = [];// create new array for ouput
  for (let i = 0; i < matrix.length; i++) {
      //array of arrays
      //make empty arrays first using loops
      let array = [];
      output.push(array)
  };
  for (row in output){
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
      output[j][i] = matrix[i][j] //we need to say where in the output array we are putting our data, so need to put that it is in [i][j]
    }
  }
  }
  return output;
  };
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticleJoin = transpose(letters).map(ls => ls.join(''));
    if(horizontalJoin.length === 0) {
        return false;
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) {
            return true
        }
    }
   for (l of verticleJoin) {
        if (l.includes(word)) {
            return true
        }
    }
    return false;
}
module.exports = wordSearch