"use strict";

import Logger from "./Logger";

class Option01 {

    private member: number;

    constructor() {
        if (process.env.NODE_ENV === 'development') {
            Logger.log("Option01: constructor");
        }
        this.member = 1;
    }

    public incrementMember() : number {
        this.member++;
        if (process.env.NODE_ENV === 'development') {
            Logger.log("Option01: Increment Member to: " + this.member);
        }
        return this.member;
    }
}

let o1: Option01  = new Option01();
console.log("Option01: " + o1.incrementMember());
