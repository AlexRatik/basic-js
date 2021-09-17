import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement chainMaker object according to task description
 *
 */

export default {
    res: [],
    getLength() {
        return this.res.length;
    },
    addLink(value) {
        if (value === undefined) {
            this.res.push(" ");
            return this;
        } else {
            this.res.push(`${value}`);
            return this;
        }
    },
    removeLink(position) {
        try {
            if (this.res[position - 1] !== undefined) {
                this.res.splice(position - 1, 1);
                console.log(this.res);
                return this;
            } else throw new Error("You can't remove incorrect link!");
        } catch (e) {
            this.res = [];
            throw e;
        }
    },
    reverseChain() {
        this.res = this.res.reverse();
        return this;
    },
    finishChain() {
        let chain = "";
        for (let i = 0; i < this.res.length; i++) {
            if (i > 0) {
                chain += `~~( ${this.res[i]} )`;
            } else {
                chain += `( ${this.res[i]} )`;
            }
        }
        this.res = [];
        return chain;
    },
};
