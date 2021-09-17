import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
    if (!str) return str;
    let prev;
    let counter;
    let res = "";
    for (let letter of str) {
        if (letter !== prev) {
            if (prev !== undefined) {
                if (counter === 1) {
                    res += prev;
                } else {
                    res += counter + prev;
                }
            }
            counter = 1;
            prev = letter;
        } else {
            counter++;
        }
    }
    return (res += (counter > 1 ? counter : "") + prev);
}
