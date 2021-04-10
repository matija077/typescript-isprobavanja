"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IoCInterface_1 = require("./IoC/IoCInterface");
var ConcreteA = /** @class */ (function () {
    function ConcreteA() {
    }
    ConcreteA.prototype.doA = function () {
        console.log("doing A");
    };
    return ConcreteA;
}());
var ConcreteB = /** @class */ (function () {
    function ConcreteB() {
    }
    ConcreteB.prototype.doB = function () {
        console.log("doing B");
    };
    return ConcreteB;
}());
var ConcreteC = /** @class */ (function () {
    function ConcreteC(concreteA, concreteB) {
        this.concreteA = concreteA;
        this.concreteB = concreteB;
    }
    ConcreteC.prototype.doC = function () {
        this.concreteA.doA();
        this.concreteB.doB();
        console.log("doing C");
    };
    return ConcreteC;
}());
var dependenciesEnum;
(function (dependenciesEnum) {
    dependenciesEnum["IDepA"] = "iDepA";
    dependenciesEnum["IDepB"] = "IDepB";
    dependenciesEnum["IDepC"] = "IDepC";
})(dependenciesEnum || (dependenciesEnum = {}));
var container = IoCInterface_1.default.instance;
container.register(dependenciesEnum.IDepA, [], ConcreteA);
container.register(dependenciesEnum.IDepB, [], ConcreteB);
container.register(dependenciesEnum.IDepC, [dependenciesEnum.IDepA, dependenciesEnum.IDepB], ConcreteC);
var concreteC = container.resolve(dependenciesEnum.IDepC);
concreteC.doC();
