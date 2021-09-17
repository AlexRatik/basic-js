import { NotImplementedError } from "../extensions/index.js";

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    const rev_sp_arr = domains.map((item) => item.split(".").reverse());
    let res = {};
    rev_sp_arr.forEach((dns) => {
        let s = "";
        dns.forEach((d) => {
            s = s + "." + d;
            if (res[s] !== undefined) {
                res[s]++;
            } else {
                res[s] = 1;
            }
        });
    });
    return res;
}
