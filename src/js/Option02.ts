"use strict";

import Logger from "./Logger";

class Option02 {

    private member: number;

    constructor() {
        /* develblock:start */
        Logger.log("Option02: constructor");
        /* develblock:end */
        this.member = 1;
    }

    public incrementMember() : number {
        this.member++;
        /* develblock:start */
        Logger.log("Option02: Increment Member to: " + this.member);
        /* develblock:end */
        return this.member;
    }
}

let o2: Option02  = new Option02();
console.log("Option02: " + o2.incrementMember());
