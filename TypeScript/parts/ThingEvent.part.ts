/** Represents an interactable Thing Event */
// FIXME: Events are different on ConsumendThing and ExposedThing
export interface ThingEvent extends ThingInteraction, EventFragment {
    subscribe(next?: (data: any) => void, error?: (error: any) => void, complete?: () => void): Subscription;
    // FIXME emit should be only on ExposedThings' ThingEvents - therefore move emit() to ExposedThing?
    emit?(data?: any): void;
}