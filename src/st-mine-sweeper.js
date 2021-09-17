import { NotImplementedError } from "../extensions/index.js";

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    let copy = matrix.map((item) => {
        return (item = item.map((el) => Number(el)));
    });
    for (let i = 0; i < copy.length; i++) {
        for (let j = 0; j < copy[i].length; j++) {
            let temp = 0;
            if (copy[i + 1] !== undefined && copy[i + 1][j] === 1) temp++;
            if (copy[i + 1] !== undefined && copy[i + 1][j + 1] === 1) temp++;
            if (copy[i + 1] !== undefined && copy[i + 1][j - 1] === 1) temp++;
            if (copy[i][j + 1] === 1) temp++;
            if (copy[i][j - 1] === 1) temp++;
            if (copy[i - 1] !== undefined && copy[i - 1][j - 1] === 1) temp++;
            if (copy[i - 1] !== undefined && copy[i - 1][j] === 1) temp++;
            if (copy[i - 1] !== undefined && copy[i - 1][j + 1] === 1) temp++;
            matrix[i][j] = temp;
        }
    }
    return matrix;
}
