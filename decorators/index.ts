//import { Decorator } from "./decorator"

interface IBase {
    foo: () => void;
    boo: () => void;
}

function decorated(target: Object, methodName: string, descriptior: PropertyDescriptor) {
    console.log("decorated");
}

class Base implements IBase {
    //@decorated
    foo() {
        console.log("foo");
    }

    boo() {
        console.log("boo");
    }
}

class Mid extends Base {
    private test: string;
    private test2: any;
    test3:string;
    static test4: number = 40;
    constructor(t: string) {
        super();
        this.test = t;
        this.test2 = 2;
        this.test3 = "aa";
    }

    static staticMethod() {}
    normalMethod(){}
    private privateMethod(){}
}

const base = new Base();
let base2 = new Base();

base.foo();
console.log(base.foo);