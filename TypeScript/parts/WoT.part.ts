/**
 * The WoTFactory (usually instantiated as "WoT" object) is the main API entry point
 * and it is exposed by an implementation of the WoT Runtime.
 */
export interface WoTFactory {
    /**
     * Starts the discovery process that will provide ConsumedThing 
     * 
     * @param filter represents the constraints for discovering Things as key-value pairs
     */
    discover(filter?: ThingFilter): Observable<ConsumedThing>;

    /**
     * Accepts an url argument and returns a Promise of a ThingDescription
     * @param url URL of a thing description
     */
    fetch(url: USVString): Promise<ThingDescription>;

    /**
     * Accepts a ThingDescription and returns a ConsumedThing
     * @param url URL of a thing description
     */
    consume(td: ThingDescription): ConsumedThing;

    /**
     * Accepts a model argument of type ThingModel and returns an ExposedThing object
     * 
     * @param model can be either a ThingTemplate, or a ThingDescription. 
     */
    produce(model: ThingModel): ExposedThing;

    /**
     * Make a request to register td to the given WoT Thing Directory..
     */
    register(directory: USVString, thing: ExposedThing): Promise<void>;

    /**
     * Makes a request to unregister the thing from the given WoT Thing Directory. */
    unregister(directory: USVString, thing: ExposedThing): Promise<void>;
}