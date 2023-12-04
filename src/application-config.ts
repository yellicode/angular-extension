/**
 * Set of config options available during the application bootstrap operation.
 *
 * @publicApi
 */
export declare interface ApplicationConfig {
    /**
    * Added for Yellicode code generation to avoid TypeScript error TS7017.
    */
    [key: string]: any;
    /**
     * List of providers that should be available to the root component and all its children.
     */
    // providers: Array<Provider | EnvironmentProviders>;
    providers?: string[]; // <!-- codegen friendly
}