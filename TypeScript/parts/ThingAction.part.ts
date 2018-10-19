/** Represents an interactable Thing Action */
export interface ThingAction extends ThingInteraction, ActionFragment {
    invoke(parameter?: any): Promise<any>;
}