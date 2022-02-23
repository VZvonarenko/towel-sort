// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newArray = [];
    if (arguments.length != 0) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                let index = i % 2 === 0 ? j : (matrix[i].length - j - 1);
                newArray.push(matrix[i][index]);
            }
        }
    }
    return newArray;



}