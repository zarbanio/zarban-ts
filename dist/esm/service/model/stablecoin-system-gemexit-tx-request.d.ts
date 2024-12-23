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
 * @interface StablecoinSystemGemexitTxRequest
 */
export interface StablecoinSystemGemexitTxRequest {
    /**
     * Ethereum address of the user intends to exit gem tokens from the Vat contract and receive them..
     * @type {string}
     * @memberof StablecoinSystemGemexitTxRequest
     */
    'user': string;
    /**
     * The amount of Gem token to exit from Vat contract
     * @type {string}
     * @memberof StablecoinSystemGemexitTxRequest
     */
    'amount': string;
    /**
     * Name of the ILK
     * @type {string}
     * @memberof StablecoinSystemGemexitTxRequest
     */
    'ilk': string;
}
//# sourceMappingURL=stablecoin-system-gemexit-tx-request.d.ts.map