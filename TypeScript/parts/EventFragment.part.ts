/** Represents a Thing Event description */
export interface EventFragment extends InteractionFragment {
    subscription?: DataSchema;
    data?: DataSchema;
    cancellation?: DataSchema;
}
