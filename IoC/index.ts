import IoCContainer from './IoCInterface';


interface IDepA {
    doA(): void;
}

interface IDepB {
    doB(): void;
}

interface IDepC {
    doC(): void;
}

class ConcreteA implements IDepA {
    doA(): void {
        console.log("doing A");
    }
}

class ConcreteB implements IDepB {
    doB(): void {
        console.log("doing B");
    }
}

class ConcreteC implements IDepC {
    constructor(private concreteA: IDepA, private concreteB: IDepB) {}

    doC(): void {
        this.concreteA.doA();
        this.concreteB.doB();
        console.log("doing C");
    }
}

enum dependenciesEnum {
    IDepA = "iDepA",
    IDepB = "IDepB",
    IDepC = "IDepC"
}

let container = IoCContainer.instance;
container.register(dependenciesEnum.IDepA, [], ConcreteA);
container.register(dependenciesEnum.IDepB, [], ConcreteB);
container.register(dependenciesEnum.IDepC, [dependenciesEnum.IDepA, dependenciesEnum.IDepB], ConcreteC);

const concreteC = container.resolve<IDepC>(dependenciesEnum.IDepC);
concreteC.doC();