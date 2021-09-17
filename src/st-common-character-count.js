import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
    function strToObj(str) {
        str = str
            .split("")
            .sort((a, b) => a.charCodeAt() - b.charCodeAt())
            .join("");
        let obj = {};
        for (let letter of str) {
            if (!obj[letter]) {
                obj[letter] = 1;
            } else {
                obj[letter]++;
            }
        }
        return obj;
    }
    let res = [];
    const obj1 = strToObj(s1);
    const obj2 = strToObj(s2);
    const keys1 = Object.keys(obj1);
    for (let i = 0; i < keys1.length; i++) {
        if (obj2[keys1[i]]) {
            res.push(Math.min(obj1[keys1[i]], obj2[keys1[i]]));
        }
    }
    return res.reduce((accum, val) => (accum += val), 0);
}
