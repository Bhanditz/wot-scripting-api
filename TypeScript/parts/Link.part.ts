export interface Link {
    href: USVString;
    rel?: USVString | Array&lt;USVString&gt;
    type?: USVString; // media type hint, no media type parameters
    anchor?: USVString;
}