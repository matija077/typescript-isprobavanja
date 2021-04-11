//import { Decorator } from "./decorator"
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function decorated(target, methodName, descriptior) {
    console.log("decorated");
}
var Base = /** @class */ (function () {
    function Base() {
    }
    Base.prototype.foo = function () {
        console.log("foo");
    };
    Base.prototype.boo = function () {
        console.log("boo");
    };
    __decorate([
        decorated
    ], Base.prototype, "foo");
    return Base;
}());
var base = new Base();
base.foo();
console.log(base.foo);
