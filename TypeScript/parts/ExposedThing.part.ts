/** Represents a server API object to expose Things and their Properties, Actions, and Events */
export interface ExposedThing extends ThingInstance {

    // define how to expose and run the Thing

    /**
     * Start serving external requests for the Thing, so that WoT Interactions using Properties, Actions and Events will be possible.
     */
    expose(): Promise<void>;

    /**
     * Stop serving external requests for the Thing and destroy the object. Note that eventual unregistering should be done before invoking this method.
     */
    destroy(): Promise<void>;

    // define Thing Description modifiers

    /**
     * Adds a Property with name defined by the name argument, the data schema provided by the property argument of type PropertyFragment, and optionally an initial value provided in the argument initValue whose type should match the one defined in the type property.
     */
    addProperty(name: string, property: PropertyFragment, init?: any): ExposedThing;

    /**
     * Removes the Property specified by the name argument and updates the Thing Description. Throws on error. Returns a reference to the same object for supporting chaining.
     */
    removeProperty(name: string): ExposedThing;

    /**
     * Adds to the actions property of a Thing object an Action with name defined by the name argument, defines input and output data format by the action argument of type ActionFragment, and adds the function provided in the handler argument as a handler, then updates the Thing Description.
     * Throws on error.
     * Returns a reference to the same object for supporting chaining.
     */
    addAction(name: string, action: ActionFragment, handler: ActionHandler): ExposedThing;

    /**
     * Removes the Action specified by the name argument and updates the Thing Description.
     * Throws on error.
     * Returns a reference to the same object for supporting chaining.
     */
    removeAction(name: string): ExposedThing;

    /**
     * Adds an event with name defined by the name argument and qualifiers and initialization value provided by the event argument of type EventFragmentto the Thing object and updates the Thing Description.
     * Throws on error.
     * Returns a reference to the same object for supporting chaining.
     */
    addEvent(name: string, event: EventFragment): ExposedThing;

    /**
     * Removes the event specified by the name argument and updates the Thing Description.
     * Returns a reference to the same object for supporting chaining.
     */
    removeEvent(name: string): ExposedThing;

    // define request handlers

    /**
     * Takes name as string argument and handler as argument of type PropertyReadHandler.
     * Sets the handler function for reading the specified Property matched by name.
     * Throws on error.
     * Returns a reference to the same object for supporting chaining.
     */
    setPropertyReadHandler(name: string, handler: PropertyReadHandler): ExposedThing;

    /**
     * Takes name as string argument and handler as argument of type PropertyWriteHandler.
     * Sets the handler function for writing the specified Property matched by name.
     * Throws on error.
     * Returns a reference to the same object for supporting chaining.
     */
    setPropertyWriteHandler(name: string, handler: PropertyWriteHandler): ExposedThing;

    /**
     * Takes name as string argument and handler as argument of type ActionHandler.
     * Sets the handler function for the specified Action matched by name.
     * Throws on error.
     * Returns a reference to the same object for supporting chaining.
     */
    setActionHandler(name: string, handler: ActionHandler): ExposedThing;
	
}

// TODO: Decide if decorator (with 'internal') or replacement (without 'internal') for get()
// For now decorator in node-wot
export declare type PropertyReadHandler = (internal?: any) => Promise<any>;

// TODO: Decide if decorator (return any) or replacement (return void) for set()
// For now decorator in node-wot
export declare type PropertyWriteHandler = (value: any) => Promise<any>;

export declare type ActionHandler = (parameters: any) => Promise<any>;
