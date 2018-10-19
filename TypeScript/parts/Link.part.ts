export interface Link {
    href: USVString;
    mediaType?: USVString;
    rel?: USVString;

}

export interface WebLink extends Link {
    anchor?: USVString;
}