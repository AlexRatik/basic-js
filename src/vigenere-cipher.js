import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
    constructor(check) {
        this.check = check;
        this.alphabet = "";
        for (let i = 65; i < 91; i++) {
            this.alphabet += String.fromCharCode(i);
        }
        this.alphabet;
    }
    encrypt(msg, key) {
        if (msg === undefined || key === undefined) {
            throw new Error("Incorrect arguments!");
        }
        msg = msg.toUpperCase();
        key = key.toUpperCase();
        let res = "";
        let iKey = 0;
        for (let i = 0; i < msg.length; i++) {
            if (
                msg[i].charCodeAt() >= 65 &&
                msg[i].charCodeAt() <= 90 &&
                key[iKey % key.length].charCodeAt() >= 65 &&
                key[iKey % key.length].charCodeAt() <= 90
            ) {
                const temp =
                    (msg[i].charCodeAt() +
                        key[iKey % key.length].charCodeAt()) %
                    26;
                res += this.alphabet[temp];
                iKey++;
                continue;
            }
            res += msg[i];
        }
        if (String(this.check) === "false") {
            return res.split("").reverse().join("");
        }
        return res;
    }
    decrypt(encryptedMsg, key) {
        if (encryptedMsg === undefined || key === undefined) {
            throw new Error("Incorrect arguments!");
        }
        encryptedMsg = encryptedMsg.toUpperCase();
        key = key.toUpperCase();
        let iKey = 0;
        let res = "";
        for (let i = 0; i < encryptedMsg.length; i++) {
            if (
                encryptedMsg[i].charCodeAt() >= 65 &&
                encryptedMsg[i].charCodeAt() <= 90 &&
                key[iKey % key.length].charCodeAt() >= 65 &&
                key[iKey % key.length].charCodeAt() <= 90
            ) {
                let temp =
                    (encryptedMsg[i].charCodeAt() -
                        key[iKey % key.length].charCodeAt() +
                        26) %
                    26;
                res += this.alphabet[temp];
                iKey++;
                continue;
            }
            res += encryptedMsg[i];
        }
        if (String(this.check) === "false") {
            return res.split("").reverse().join("");
        }
        return res;
    }
}

const directMachine = new VigenereCipheringMachine();
// const reverseMachine = new VigenereCipheringMachine(false);
directMachine.encrypt("attack at dawn!", "alphonse");
directMachine.decrypt("AEIHQX SX DLLU!", "alphonse");
