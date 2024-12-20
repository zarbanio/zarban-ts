/* tslint:disable */
/* eslint-disable */
/**
 * Zarban API
 * API for Zarban services.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@zarban.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface TypedDataDomain
 */
export interface TypedDataDomain {
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    'version'?: string;
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    'chainId': string;
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    'verifyingContract': string;
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    'salt'?: string;
}
