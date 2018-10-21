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
    links?: Array<Link>;
    
	/**
     * A collection of predicate terms that reference values of any type,
     * e.g., @context, @type, or other terms from the vocabulary defined in @context.
     */
    [key: string]: any;
	
}
