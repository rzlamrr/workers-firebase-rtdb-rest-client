import { Options } from './types';
/**
 * Represents a database obejct
 */
export default class Database {
    /**
     * @type {string}
     * The suffix needed to be appended to the DB url to access json
     */
    private readonly URL_SUFFIX;
    /**
     * @type {string}
     * Suffix appended to DB URL to do authed requests if you're using FB ID auth
     * See: https://firebase.google.com/docs/database/rest/auth#authenticate_with_an_id_token
     */
    private readonly ID_SUFFIX;
    /**
     * @type {string}
     * Suffix appended to DB URL to do authed requests if you are using token auth
     * See: https://firebase.google.com/docs/database/rest/auth#authenticate_with_an_access_token
     */
    private readonly TOKEN_SUFFIX;
    /**
     * @type {string}
     * Suffix to be appended to DB URL is set based on your options
     */
    private authSuffix;
    /**
     * @type {boolean}
     * If we have recieved an invalid Database URL the SDK will be disabled
     */
    private disabled;
    /**
     * @type {Options}
     * Options for initializing the class look at type def
     */
    private options;
    /**
     * @param {Options} options Config for initializing the lib
     */
    constructor(options: Options);
    /**
     * Writes the given data to the database
     * See: https://firebase.google.com/docs/reference/rest/database#section-put
     * @param {string} location Where to write the data
     * @param {string} data JSON to write, stringified
     * @param {boolean} authenticated Should the request be authenticated
     * @param {Headers} reqHeaders Headers to be sent with the req
     * @return {boolean} If the write operation suceeded
     */
    write(location: string, data: string, authenticated: boolean, reqHeaders?: Headers): Promise<boolean>;
    /**
     * Read data at the given location in DB
     * See: https://firebase.google.com/docs/reference/rest/database#section-get
     * @param {string} location Where to read the data
     * @param {boolean} authenticated Should the request be authenticated
     * @param {Headers} reqHeaders Headers to be sent with the req
     * @return {string} The JSON data, or an empty string for a failure
     */
    read(location: string, authenticated: boolean, reqHeaders?: Headers): Promise<string>;
    /**
     * Delete data at the given location in DB
     * See: https://firebase.google.com/docs/reference/rest/database#section-delete
     * @param {string} location Where to delete the data
     * @param {boolean} authenticated Should the request be authenticated
     * @param {Headers} reqHeaders Headers to be sent with the req
     * @return {boolean} If the delete operation suceeded
     */
    delete(location: string, authenticated: boolean, reqHeaders?: Headers): Promise<boolean>;
    /**
     * Attempts to update the given data in the database
     * See: https://firebase.google.com/docs/reference/rest/database#section-patch
     * @param {string} location Where to update the data
     * @param {string} data JSON to update, stringified
     * @param {boolean} authenticated Should the request be authenticated
     * @param {Headers} reqHeaders Headers to be sent with the req
     * @return {boolean} If the update operation suceeded
     */
    update(location: string, data: string, authenticated: boolean, reqHeaders?: Headers): Promise<boolean>;
    /**
     * Writes the given data to the database via POST request
     * (Equivalent of JS .push())
     * See: https://firebase.google.com/docs/reference/rest/database#section-post
     * @param {string} location Where to write the data
     * @param {string} data JSON to write, stringified
     * @param {boolean} authenticated Should the request be authenticated
     * @param {Headers} reqHeaders Headers to be sent with the req
     * @return {boolean} If the write operation suceeded
     */
    push(location: string, data: string, authenticated: boolean, reqHeaders?: Headers): Promise<boolean>;
    /**
     * Adds a header to get an ETag to your headers, the ETag
     * can be used for conditional requests, like with appendETagIfToHeaders();
     * See: https://firebase.google.com/docs/reference/rest/database#section-cond-etag
     * @param {Headers} reqHeaders Your current headers
     * @return {Headers} The updated headers to use on your next request
     */
    appendGetEtagHeader(reqHeaders: Headers): Headers;
    /**
     * Adds a conditional write header to your headers, takes in
     * an ETag and will only write to the next location if the ETag matches
     * See: https://firebase.google.com/docs/reference/rest/database#section-cond-ifmatch
     * @param {Headers} reqHeaders Your current headers
     * @param {string} eTag The ETag to match
     * @return {Headers} The updated headers to use on your next request
     */
    appendEtagIfHeader(reqHeaders: Headers, eTag: string): Headers;
}
//# sourceMappingURL=index.d.ts.map