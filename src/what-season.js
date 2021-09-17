import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
    if (!date) {
        return "Unable to determine the time of year!";
    }
    try {
        date.getTime();
    } catch (e) {
        throw new Error("Invalid date!");
    }
    const seasons = {
        0: "winter",
        1: "spring",
        2: "summer",
        3: "autumn",
    };
    const newDate = new Date(date);
    const mon = Math.floor((newDate.getMonth() + 1) / 3);
    return seasons[mon === 4 ? 0 : mon];
}
