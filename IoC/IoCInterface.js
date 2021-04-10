"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
var IoCContainer = /** @class */ (function () {
    function IoCContainer() {
        this.dependencies = {};
        IoCContainer._instance = this;
    }
    Object.defineProperty(IoCContainer, "instance", {
        get: function () {
            return IoCContainer._instance;
        },
        enumerable: false,
        configurable: true
    });
    IoCContainer.prototype.register = function (name, dependencies, implementation) {
        if (this.dependencies[name]) {
            throw new Error("depenedncy alread yexists");
        }
        var dependencyImplementations = this.getDependenciesImplementation(dependencies);
        this.dependencies[name] = new (implementation.bind.apply(implementation, __spreadArray([void 0], dependencyImplementations)))();
    };
    IoCContainer.prototype.resolve = function (name) {
        if (!this.dependencies[name]) {
            throw new Error("unresolved dependency");
        }
        return this.dependencies[name];
    };
    IoCContainer.prototype.getDependenciesImplementation = function (dependencies) {
        var _this = this;
        return dependencies.map(function (dependency) { return _this.resolve(dependency); });
    };
    IoCContainer._instance = new IoCContainer();
    return IoCContainer;
}());
exports.default = IoCContainer;
