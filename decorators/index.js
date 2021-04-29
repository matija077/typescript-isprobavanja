"use strict";
//import { Decorator } from "./decorator"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function decorated(target, methodName, descriptior) {
    console.log("decorated");
}
var Base = /** @class */ (function () {
    function Base() {
    }
    //@decorated
    Base.prototype.foo = function () {
        console.log("foo");
    };
    Base.prototype.boo = function () {
        console.log("boo");
    };
    return Base;
}());
var Mid = /** @class */ (function (_super) {
    __extends(Mid, _super);
    function Mid(t) {
        var _this = _super.call(this) || this;
        _this.test = t;
        _this.test2 = 2;
        _this.test3 = "aa";
        return _this;
    }
    Mid.staticMethod = function () { };
    Mid.prototype.normalMethod = function () { };
    Mid.prototype.privateMethod = function () { };
    Mid.test4 = 40;
    return Mid;
}(Base));
var base = new Base();
var base2 = new Base();
base.foo();
console.log(base.foo);
