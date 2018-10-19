/** Represents a Thing Action description */
export interface ActionFragment extends InteractionFragment {
    input?: DataSchema;
    output?: DataSchema;
}
