/**
 * Dictionary that represents the constraints for discovering Things as key-value pairs. 
 */
export interface ThingFilter {
    /**
     * The method field represents the discovery type that should be used in the discovery process. The possible values are defined by the DiscoveryMethod enumeration that can be extended by string values defined by solutions (with no guarantee of interoperability). 
     */
    method?: DiscoveryMethod | string; // default value "any", DOMString
    /**
     * The url field represents additional information for the discovery method, such as the URL of the target entity serving the discovery request, such as a Thing Directory or a Thing.
     */
    url?: USVString;
    /**
     * The query field represents a query string accepted by the implementation, for instance a SPARQL query. 
     */
    query?: USVString;
    /**
     * The fragment field represents a ThingFragment dictionary used for matching against discovered Things.
     */
    fragment?: ThingFragment;
}