"use strict";

import Logger from "./Logger";

class Option03 {

    private member: number;

    constructor() {
        Logger.log("Option03: constructor");
        this.member = 1;
    }

    public incrementMember() : number {
        this.member++;
        Logger.log("Option03: Increment Member to: " + this.member);
        return this.member;
    }
}

let o3: Option03  = new Option03();
console.log("Option03: " + o3.incrementMember());
