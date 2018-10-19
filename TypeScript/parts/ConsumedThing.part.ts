/**
 * A Thing instance must have an id and a name and its Interactions do have forms and
 * functions to interact (read/write/invoke/subscribe/emit).
 */
export interface ThingInstance extends ThingFragment {
    id: string;
    name: string;
    base?: string;

    properties: { [key: string]: ThingProperty };
    actions: { [key: string]: ThingAction };
    events: { [key: string]: ThingEvent };
}


/**
 * The Interaction interface is an abstract class to represent Thing interactions: Properties, Actions and Events.
 */
export interface ThingInteraction extends InteractionFragment {
    forms: Array<Form>;
}

/** Represents a client API object to consume Things and their Properties, Actions, and Events */
export interface ConsumedThing extends ThingInstance {
    // none defined
}