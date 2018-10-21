/**
 * A Thing instance must have an id and a name and its Interactions do have forms and
 * functions to interact (read/write/invoke/subscribe/emit).
 */
export interface ThingInstance extends ThingFragment {
    /** id becomes mandatory for Thing instances */
    id: string;
    /** name becomes mandatory for Thing instances */
    name: string;
    /** base becomes available for Thing instances (part of binding metadata) */
    base?: string;

    /** A map of ThingProperties (PropertyFragment plus mandatory binding metadata (forms)) */
    properties: { [key: string]: ThingProperty };
    /** A map of ThingActions (ActionFragment plus mandatory binding metadata (forms)) */
    actions: { [key: string]: ThingAction };
    /** A map of ThingEvents (EventFragment plus mandatory binding metadata (forms)) */
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
    // no additional functions defined
}