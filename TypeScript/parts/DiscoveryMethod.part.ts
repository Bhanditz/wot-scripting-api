/** The DiscoveryMethod enumeration represents the discovery type to be used */
export declare enum DiscoveryMethod {
    /** does not restrict */
    "any",
    /** for discovering Things defined in the same Servient */
    "local",
    /** for discovery based on a service provided by a Thing Directory */
    "directory",
    /** for discovering Things in the same/reachable network by using a supported multicast protocol */
    "multicast"
}