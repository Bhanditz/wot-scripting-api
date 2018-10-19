/** Base for representing Thing Interaction descriptions */
export interface InteractionFragment {
    label?: string;
    description?: string;
    [key: string]: any;
}