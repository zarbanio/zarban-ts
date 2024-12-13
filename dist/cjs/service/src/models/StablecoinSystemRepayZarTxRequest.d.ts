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
 * @interface StablecoinSystemRepayZarTxRequest
 */
export interface StablecoinSystemRepayZarTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof StablecoinSystemRepayZarTxRequest
     */
    user: string;
    /**
     * The ID of the vault
     * @type {number}
     * @memberof StablecoinSystemRepayZarTxRequest
     */
    vaultId: number;
    /**
     * The amount of stablecoin to repay in native token units, if not provided, it will be calculated based on the borrow balance
     * @type {string}
     * @memberof StablecoinSystemRepayZarTxRequest
     */
    amount?: string;
}
/**
 * Check if a given object implements the StablecoinSystemRepayZarTxRequest interface.
 */
export declare function instanceOfStablecoinSystemRepayZarTxRequest(value: object): value is StablecoinSystemRepayZarTxRequest;
export declare function StablecoinSystemRepayZarTxRequestFromJSON(json: any): StablecoinSystemRepayZarTxRequest;
export declare function StablecoinSystemRepayZarTxRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StablecoinSystemRepayZarTxRequest;
export declare function StablecoinSystemRepayZarTxRequestToJSON(json: any): StablecoinSystemRepayZarTxRequest;
export declare function StablecoinSystemRepayZarTxRequestToJSONTyped(value?: StablecoinSystemRepayZarTxRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=StablecoinSystemRepayZarTxRequest.d.ts.map