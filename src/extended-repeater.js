import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    let strAddition = [];
    if (options.addition !== undefined) {
        for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {
            strAddition.push(String(options.addition));
        }
    }
    strAddition = strAddition.join(`${options.additionSeparator || "|"}`);
    str = str + strAddition;
    let res = [];
    for (let i = 0; i < (options.repeatTimes || 1); i++) {
        res.push(str);
    }
    return res.join(`${options.separator || "+"}`);
}
