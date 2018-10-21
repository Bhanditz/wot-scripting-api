/** Base for representing Thing Interaction descriptions */
export interface InteractionFragment {
    /** A human-readable title for the Interaction, e.g., for UIs */
    title?: string;
    /** A human-readable description of the Interaction */
    description?: string;
	/**
     * A collection of predicate terms that reference values of any type,
     * e.g., @type, or other terms from the vocabulary defined in @context.
     */
    [key: string]: any;
}