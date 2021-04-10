export default class IoCContainer {
    private static _instance: IoCContainer = new IoCContainer();
    private dependencies: {
        [key: string]: Object
    } = {};

     constructor() {
        IoCContainer._instance = this;
    }

    public static get instance(): IoCContainer {
        return IoCContainer._instance;
    }

    public register(name: string, dependencies:string[], implementation: any) {
        if (this.dependencies[name]) {
            throw new Error("depenedncy alread yexists");
        }

        let dependencyImplementations = this.getDependenciesImplementation(dependencies);


        this.dependencies[name] = new implementation(...dependencyImplementations)
    }

    public resolve<T>(name: string): T {
        if (!this.dependencies[name]) {
            throw new Error("unresolved dependency");
        }

        return this.dependencies[name] as T;
    }

    private getDependenciesImplementation(dependencies: string[]) {
        return dependencies.map(dependency => this.resolve(dependency))
    }
}