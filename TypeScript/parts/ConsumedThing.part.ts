/**
 * The ThingFragment dictionary contains fields to initialize a Thing or to match during discovery
 */
export interface ThingFragment {
    /** A hint to gernerate the identifier for the Thing */
    id?: string;
    
    /** The name attribute represents the user given name of the Thing */
    name?: string;

    /** A human-readable description of the Thing */
    description?: string;

    /** Information about the Thing maintainer, e.g., author or contact URI */
    support?: string;
    /** A list of security schemas used by the Thing */
    security?: Array<Security>;
    /** A map of PropertyFragments with decriptions only */
    properties?: { [key: string]: PropertyFragment }
    /** A map of ActionFragments with decriptions only */
    actions?: { [key: string]: ActionFragment }
    /** A map of EventFragments with decriptions only */
    events?: { [key: string]: EventFragment }
    /** A list of Web links to other Things or metadata */
    links?: Array<WebLink>;
    /**
     * A collection of predicate terms that reference values of any type,
     * e.g., @context, @type, or other terms from the vocabulary defined in @context.
     */
    [key: string]: any;
}

/** Base for representing Thing Interaction descriptions */
export interface InteractionFragment {
    label?: string;
    description?: string;
    [key: string]: any;
}

/** Represents a Thing Property description */
export interface PropertyFragment extends InteractionFragment {
    writable?: boolean;
    observable?: boolean;
}
/** Represents a Thing Action description */
export interface ActionFragment extends InteractionFragment {
    input?: DataSchema;
    output?: DataSchema;
}
/** Represents a Thing Event description */
export interface EventFragment extends InteractionFragment {
    
}

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

/**
 * Represents an interactable Thing Property
 */
export interface ThingProperty extends ThingInteraction, PropertyFragment //, Observable<any>
{
    read(): Promise<any>;
    write(value: any): Promise<void>;
    subscribe(next?: (value: any) => void, error?: (error: any) => void, complete?: () => void): Subscription;
}
/** Represents an interactable Thing Action */
export interface ThingAction extends ThingInteraction, ActionFragment {
    invoke(parameter?: any): Promise<any>;
}

/** Represents an interactable Thing Event */
// FIXME: Events are different on ConsumendThing and ExposedThing
export interface ThingEvent extends ThingInteraction, EventFragment {
    subscribe(next?: (value: any) => void, error?: (error: any) => void, complete?: () => void): Subscription;
    // FIXME emit should be only on ExposedThings' ThingEvents - therefore move emit() to ExposedThing?
    emit?(data?: any): void;
}

/** Represents a client API object to consume Things and their Properties, Actions, and Events */
export interface ConsumedThing extends ThingInstance {
    // none defined
}