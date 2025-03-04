import { AotRuntimeResolver, ComponentDefinition, Dict, Invocation, ModuleLocator } from '@glimmer/interfaces';
import NativeComponentManager from './native-component-manager';
export interface TemplateMeta {
    specifier: string;
}
declare class NativeComponentDefinition implements ComponentDefinition {
    name: string;
    manager: NativeComponentManager;
    ComponentClass: any;
    handle: number;
    state: object;
    constructor(name: string, manager: NativeComponentManager, ComponentClass: any, handle: number);
    toJSON(): {
        GlimmerDebug: string;
    };
}
export default class Resolver implements AotRuntimeResolver {
    protected table: unknown[];
    protected managers: Dict<NativeComponentManager>;
    resolve<U>(handle: number): U;
    managerFor(managerId?: string): NativeComponentManager;
    getInvocation(locator: ModuleLocator): Invocation;
    lookupComponent(name: string, referrer: TemplateMeta): NativeComponentDefinition;
    lookupPartial(name: string, referrer: TemplateMeta): number;
    registerComponent(name: string, ComponentClass?: any): number;
    registerTemplateOnlyComponent(): number;
    registerHelper(helper: any): number;
    registerModifier(ModifierClass: any): number;
}
export {};
