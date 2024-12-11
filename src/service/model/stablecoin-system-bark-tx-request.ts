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
 * @interface StablecoinSystemBarkTxRequest
 */
export interface StablecoinSystemBarkTxRequest {
    /**
     * Ethereum address of the user who is liquidating the vault and receiving incentives.
     * @type {string}
     * @memberof StablecoinSystemBarkTxRequest
     */
    'user': string;
    /**
     * The ID of the vault
     * @type {number}
     * @memberof StablecoinSystemBarkTxRequest
     */
    'vaultId': number;
}

