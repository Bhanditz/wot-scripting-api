export interface Form {
    href: USVString;
    subprotocol?: USVString;
    op?: USVString | Array<USVString>;
    contenttype?: USVString; // media type + parameter(s), e.g., text/plain;charset=utf8
    security?: Security;
}