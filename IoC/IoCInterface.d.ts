export default class IoCContainer {
    private static _instance;
    private dependencies;
    constructor();
    static get instance(): IoCContainer;
    register(name: string, dependencies: string[], implementation: any): void;
    resolve<T>(name: string): T;
    private getDependenciesImplementation;
}
