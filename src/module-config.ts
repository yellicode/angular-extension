/**
 * Type of the NgModule metadata.
 *
 *
 */
export interface ModuleConfig {
    /**
    * Added for Yellicode code generation to avoid TypeScript error TS7017.
    */
    [key: string]: any;
    /**
     * The set of injectable objects that are available in the injector
     * of this module.
     *
     * @see [Dependency Injection guide](guide/dependency-injection)
     * @see [NgModule guide](guide/providers)
     *
     * @usageNotes
     *
     * Dependencies whose providers are listed here become available for injection
     * into any component, directive, pipe or service that is a child of this injector.
     * The NgModule used for bootstrapping uses the root injector, and can provide dependencies
     * to any part of the app.
     *
     * A lazy-loaded module has its own injector, typically a child of the app root injector.
     * Lazy-loaded services are scoped to the lazy-loaded module's injector.
     * If a lazy-loaded module also provides the `UserService`, any component created
     * within that module's context (such as by router navigation) gets the local instance
     * of the service, not the instance in the root injector.
     * Components in external modules continue to receive the instance provided by their injectors.
     *
     * ### Example
     *
     * The following example defines a class that is injected in
     * the HelloWorld NgModule:
     *
     * ```
     * class Greeter {
     *    greet(name:string) {
     *      return 'Hello ' + name + '!';
     *    }
     * }
     *
     * @NgModule({
     *   providers: [
     *     Greeter
     *   ]
     * })
     * class HelloWorld {
     *   greeter:Greeter;
     *
     *   constructor(greeter:Greeter) {
     *     this.greeter = greeter;
     *   }
     * }
     * ```
     */
    // providers?: Provider[]; // <!-- original
    providers?: string[]; // <!-- codegen friendly
    /**
     * The set of components, directives, and pipes ([declarables](guide/glossary#declarable))
     * that belong to this module.
     *
     * @usageNotes
     *
     * The set of selectors that are available to a template include those declared here, and
     * those that are exported from imported NgModules.
     *
     * Declarables must belong to exactly one module.
     * The compiler emits an error if you try to declare the same class in more than one module.
     * Be careful not to declare a class that is imported from another module.
     *
     * ### Example
     *
     * The following example allows the CommonModule to use the `NgFor`
     * directive.
     *
     * ```javascript
     * @NgModule({
     *   declarations: [NgFor]
     * })
     * class CommonModule {
     * }
     * ```
     */
    // declarations?: Array<Type<any> | any[]>; // <!-- original
    declarations?: string[];  // <!-- codegen friendly

    /**
     * The set of NgModules whose exported [declarables](guide/glossary#declarable)
     * are available to templates in this module.
     *
     * @usageNotes
     *
     * A template can use exported declarables from any
     * imported module, including those from modules that are imported indirectly
     * and re-exported.
     * For example, `ModuleA` imports `ModuleB`, and also exports
     * it, which makes the declarables from `ModuleB` available
     * wherever `ModuleA` is imported.
     *
     * ### Example
     *
     * The following example allows MainModule to use anthing exported by
     * `CommonModule`:
     *
     * ```javascript
     * @NgModule({
     *   imports: [CommonModule]
     * })
     * class MainModule {
     * }
     * ```
     *
     */
    // imports?: Array<Type<any> | ModuleWithProviders | any[]>; // <!-- original
    imports?: string[]; // <!-- codegen friendly

    /**
     * The set of components, directives, and pipes declared in this
     * NgModule that can be used in the template of any component that is part of an
     * NgModule that imports this NgModule. Exported declarations are the module's public API.
     *
     * A declarable belongs to one and only one NgModule.
     * A module can list another module among its exports, in which case all of that module's
     * public declaration are exported.
     *
     * @usageNotes
     *
     * Declarations are private by default.
     * If this ModuleA does not export UserComponent, then only the components within this
     * ModuleA can use UserComponent.
     *
     * ModuleA can import ModuleB and also export it, making exports from ModuleB
     * available to an NgModule that imports ModuleA.
     *
     * ### Example
     *
     * The following example exports the `NgFor` directive from CommonModule.
     *
     * ```javascript
     * @NgModule({
     *   exports: [NgFor]
     * })
     * class CommonModule {
     * }
     * ```
     */
    // exports?: Array<Type<any> | any[]>; // <!-- original
    exports?: string[]; // <!-- codegen friendly

    /**
     * The set of components to compile when this NgModule is defined,
     * so that they can be dynamically loaded into the view.
     *
     * For each component listed here, Angular creates a `ComponentFactory`
     * and stores it in the `ComponentFactoryResolver`.
     *
     * Angular automatically adds components in the module's bootstrap
     * and route definitions into the `entryComponents` list. Use this
     * option to add components that are bootstrapped
     * using one of the imperative techniques, such as `ViewContainerRef.createComponent()`.
     *
     * @see [Entry Components](guide/entry-components)
     */
    // entryComponents?: Array<Type<any> | any[]>;
    entryComponents?: string[]; // <!-- codegen friendly
    /**
     * The set of components that are bootstrapped when
     * this module is bootstrapped. The components listed here
     * are automatically added to `entryComponents`.
     */
    // bootstrap?: Array<Type<any> | any[]>; // <!-- original
    bootstrap?: string[]; // <!-- codegen friendly

    /**
     * The set of schemas that declare elements to be allowed in the NgModule.
     * Elements and properties that are neither Angular components nor directives
     * must be declared in a schema.
     *
     * Allowed value are `NO_ERRORS_SCHEMA` and `CUSTOM_ELEMENTS_SCHEMA`.
     *
     * @security When using one of `NO_ERRORS_SCHEMA` or `CUSTOM_ELEMENTS_SCHEMA`
     * you must ensure that allowed elements and properties securely escape inputs.
     */
    // schemas?: Array<SchemaMetadata | any[]>; // <!-- original
    schemas?: string[]; // <!-- codegen friendly

    /**
     * A name or path that uniquely identifies this NgModule in `getModuleFactory`.
     * If left `undefined`, the NgModule is not registered with
     * `getModuleFactory`.
     */
    id?: string;
    /**
     * If true, this module will be skipped by the AOT compiler and so will always be compiled
     * using JIT.
     *
     * This exists to support future Ivy work and has no effect currently.
     */
    jit?: true;
}