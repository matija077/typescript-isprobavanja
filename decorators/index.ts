//import { Decorator } from "./decorator"

interface IBase {
    foo: () => void;
    boo: () => void;
}

function decorated(target: Object, methodName: string, descriptior: PropertyDescriptor) {
    console.log("decorated");
}

class Base implements IBase {
    @decorated
    foo() {
        console.log("foo");
    }

    boo() {
        console.log("boo");
    }
}

const base = new Base();

base.foo();
console.log(base.foo);