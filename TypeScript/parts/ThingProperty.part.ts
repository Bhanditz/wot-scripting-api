/**
 * Represents an interactable Thing Property
 */
export interface ThingProperty extends ThingInteraction, PropertyFragment //, Observable<any>
{
    read(): Promise<any>;
    write(value: any): Promise<void>;
    subscribe(next?: (value: any) => void, error?: (error: any) => void, complete?: () => void): Subscription;
}