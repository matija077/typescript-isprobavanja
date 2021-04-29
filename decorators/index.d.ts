interface IBase {
    foo: () => void;
    boo: () => void;
}
declare function decorated(target: Object, methodName: string, descriptior: PropertyDescriptor): void;
declare class Base implements IBase {
    foo(): void;
    boo(): void;
}
declare class Mid extends Base {
    private test;
    private test2;
    test3: string;
    static test4: number;
    constructor(t: string);
    static staticMethod(): void;
    normalMethod(): void;
    private privateMethod;
}
declare const base: Base;
declare let base2: Base;
