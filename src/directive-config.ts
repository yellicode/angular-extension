/**
 * Extract from the Angular Core API, adapted so that it can be used
 * for code generation.
 */

/**
 * The strategy that the default change detector uses to detect changes.
 * When set, takes effect the next time change detection is triggered.
 *
 */
export enum ChangeDetectionStrategy {
    /**
     * Use the `CheckOnce` strategy, meaning that automatic change detection is deactivated
     * until reactivated by setting the strategy to `Default` (`CheckAlways`).
     * Change detection can still be explictly invoked.
     */
    OnPush = 0,
    /**
     * Use the default `CheckAlways` strategy, in which change detection is automatic until
     * explicitly deactivated.
     */
    Default = 1
}

/**
 * Defines template and style encapsulation options available for Component's {@link Component}.
 *
 * See {@link Component#encapsulation encapsulation}.
 *
 */
export enum ViewEncapsulation {
    /**
     * Emulate `Native` scoping of styles by adding an attribute containing surrogate id to the Host
     * Element and pre-processing the style rules provided via {@link Component#styles styles} or
     * {@link Component#styleUrls styleUrls}, and adding the new Host Element attribute to all
     * selectors.
     *
     * This is the default option.
     */
    Emulated = 0,
    /**
     * @deprecated v6.1.0 - use {ViewEncapsulation.ShadowDom} instead.
     * Use the native encapsulation mechanism of the renderer.
     *
     * For the DOM this means using the deprecated [Shadow DOM
     * v0](https://w3c.github.io/webcomponents/spec/shadow/) and
     * creating a ShadowRoot for Component's Host Element.
     */
    Native = 1,
    /**
     * Don't provide any template or style encapsulation.
     */
    None = 2,
    /**
     * Use Shadow DOM to encapsulate styles.
     *
     * For the DOM this means using modern [Shadow
     * DOM](https://w3c.github.io/webcomponents/spec/shadow/) and
     * creating a ShadowRoot for Component's Host Element.
     *
     * ### Example
     * {@example core/ts/metadata/encapsulation.ts region='longform'}
     */
    ShadowDom = 3
}

export interface DirectiveConfig {
    /**
      * The CSS selector that identifies this directive in a template
      * and triggers instantiation of the directive.
      *
      * Declare as one of the following:
      *
      * - `element-name`: Select by element name.
      * - `.class`: Select by class name.
      * - `[attribute]`: Select by attribute name.
      * - `[attribute=value]`: Select by attribute name and value.
      * - `:not(sub_selector)`: Select only if the element does not match the `sub_selector`.
      * - `selector1, selector2`: Select if either `selector1` or `selector2` matches.
      *
      * Angular only allows directives to apply on CSS selectors that do not cross
      * element boundaries.
      *
      * For the following template HTML, a directive with an `input[type=text]` selector,
      * would be instantiated only on the `<input type="text">` element.
      *
      * ```html
      * <form>
      *   <input type="text">
      *   <input type="radio">
      * <form>
      * ```
      *
      */
    selector?: string;
    /**
     * The set of event-bound output properties.
     * When an output property emits an event, an event handler attached
     * to that event in the template is invoked.
     *
     * Each output property maps a `directiveProperty` to a `bindingProperty`:
     * - `directiveProperty` specifies the component property that emits events.
     * - `bindingProperty` specifies the HTML attribute the event handler is attached to.
     *
     */
    outputs?: string[];
    /**
     * Maps class properties to host element bindings for properties,
     * attributes, and events, using a set of key-value pairs.
     *
     * Angular automatically checks host property bindings during change detection.
     * If a binding changes, Angular updates the directive's host element.
     *
     * When the key is a property of the host element, the property value is
     * the propagated to the specified DOM property.
     *
     * When the key is a static attribute in the DOM, the attribute value
     * is propagated to the specified property in the host element.
     *
     * For event handling:
     * - The key is the DOM event that the directive listens to.
     * To listen to global events, add the target to the event name.
     * The target can be `window`, `document` or `body`.
     * - The value is the statement to execute when the event occurs. If the
     * statement evalueates to `false`, then `preventDefault` is applied on the DOM
     * event. A handler method can refer to the `$event` local variable.
     *
     */
    host?: {
        [key: string]: string;
    };
    /**
     * Configures the [injector](guide/glossary#injector) of this
     * directive or component with a [token](guide/glossary#di-token)
     * that maps to a [provider](guide/glossary#provider) of a dependency.
     */
    // providers?: Provider[]; // <!-- original
    providers?: string[]; // <!-- codegen friendly
    /**
     * The name or names that can be used in the template to assign this directive to a variable.
     * For multiple names, use a comma-separated string.
     *
     */
    exportAs?: string;
    /**
     * Configures the queries that will be injected into the directive.
     *
     * Content queries are set before the `ngAfterContentInit` callback is called.
     * View queries are set before the `ngAfterViewInit` callback is called.
     *
     */
    queries?: {
        [key: string]: any;
    };
}

/**
 * Supplies configuration metadata for an Angular component.
 */
export interface ComponentConfig extends DirectiveConfig {
    /**
     * Added for Yellicode code generation to avoid TypeScript error TS7017.
     */
    [key: string]: any;
    /**
     * The change-detection strategy to use for this component.
     *
     * When a component is instantiated, Angular creates a change detector,
     * which is responsible for propagating the component's bindings.
     * The strategy is one of:
     * - `ChangeDetectionStrategy#OnPush` sets the strategy to `CheckOnce` (on demand).
     * - `ChangeDetectionStrategy#Default` sets the strategy to `CheckAlways`.
     */
    changeDetection?: ChangeDetectionStrategy;
    /**
     * Defines the set of injectable objects that are visible to its view DOM children.
     * See [example](#injecting-a-class-with-a-view-provider).
     *
     */
    //viewProviders?: Provider[]; // <!-- original
    viewProviders?: string[]; // <!-- codegen friendly
    /**
     * The module ID of the module that contains the component.
     * The component must be able to resolve relative URLs for templates and styles.
     * SystemJS exposes the `__moduleName` variable within each module.
     * In CommonJS, this can  be set to `module.id`.
     *
     */
    moduleId?: string;
    /**
     * The URL of a template file for an Angular component. If provided,
     * do not supply an inline template using `template`.
     *
     */
    templateUrl?: string;
    /**
     * An inline template for an Angular component. If provided,
     * do not supply a template file using `templateUrl`.
     *
     */
    template?: string;
    /**
     * One or more URLs for files containing CSS stylesheets to use
     * in this component.
     */
    styleUrls?: string[];
    /**
     * One or more inline CSS stylesheets to use
     * in this component.
     */
    styles?: string[];
    /**
     * One or more animation `trigger()` calls, containing
     * `state()` and `transition()` definitions.
     * See the [Animations guide](/guide/animations) and animations API documentation.
     *
     */
    animations?: any[];
    /**
     * An encapsulation policy for the template and CSS styles. One of:
     * - `ViewEncapsulation.Native`: Use shadow roots. This works
     * only if natively available on the platform.
     * - `ViewEncapsulation.Emulated`: Use shimmed CSS that
     * emulates the native behavior.
     * - `ViewEncapsulation.None`: Use global CSS without any
     * encapsulation.
     *
     * If not supplied, the value is taken from `CompilerOptions`. The default compiler option is
     * `ViewEncapsulation.Emulated`.
     *
     * If the policy is set to `ViewEncapsulation.Emulated` and the component has no `styles`
     * or `styleUrls` specified, the policy is automatically switched to `ViewEncapsulation.None`.
     */
    encapsulation?: ViewEncapsulation;
    /**
     * Overrides the default encapsulation start and end delimiters (`{{` and `}}`)
     */
    interpolation?: [string, string];
    /**
     * A set of components that should be compiled along with
     * this component. For each component listed here,
     * Angular creates a {@link ComponentFactory} and stores it in the
     * {@link ComponentFactoryResolver}.
     */
    // entryComponents?: Array<Type<any> | any[]>;   // <!-- original
    entryComponents?: string[]; // <!-- codegen friendly
    /**
     * True to preserve or false to remove potentially superfluous whitespace characters
     * from the compiled template. Whitespace characters are those matching the `\s`
     * character class in JavaScript regular expressions. Default is false, unless
     * overridden in compiler options.
     */
    preserveWhitespaces?: boolean;
}
