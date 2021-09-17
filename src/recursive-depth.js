import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
    calculateDepth(arr) {
        if (arr.length === 0) return 1;
        let res_arr = [];
        for (let i = 0; i < arr.length; i++) {
            let res = 1;
            if (Array.isArray(arr[i])) {
                res += this.calculateDepth(arr[i]);
            }
            res_arr.push(res);
        }
        return Math.max(...res_arr);
    }
}
// export default class DepthCalculator {
//     calculateDepth(arr, deep = 0) {
//         if (Array.isArray(arr)) {
//             let counter = ++deep;
//             for (let i = 0; i < arr.length; i++) {
//                 let sub = this.calculateDepth(arr[i], deep);
//                 counter = Math.max(counter, sub);
//             }
//             return counter;
//         }
//         else{
//           return deep;
//         }
//     }
// }
