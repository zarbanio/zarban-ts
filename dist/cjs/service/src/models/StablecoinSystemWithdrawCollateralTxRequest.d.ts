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
 * @interface StablecoinSystemWithdrawCollateralTxRequest
 */
export interface StablecoinSystemWithdrawCollateralTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof StablecoinSystemWithdrawCollateralTxRequest
     */
    user: string;
    /**
     * The ID of the vault
     * @type {number}
     * @memberof StablecoinSystemWithdrawCollateralTxRequest
     */
    vaultId: number;
    /**
     * The amount of collateral to withdraw in native token units, if not provided, it will be calculated based on the withdrawable balance
     * @type {string}
     * @memberof StablecoinSystemWithdrawCollateralTxRequest
     */
    amount?: string;
}
/**
 * Check if a given object implements the StablecoinSystemWithdrawCollateralTxRequest interface.
 */
export declare function instanceOfStablecoinSystemWithdrawCollateralTxRequest(value: object): value is StablecoinSystemWithdrawCollateralTxRequest;
export declare function StablecoinSystemWithdrawCollateralTxRequestFromJSON(json: any): StablecoinSystemWithdrawCollateralTxRequest;
export declare function StablecoinSystemWithdrawCollateralTxRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StablecoinSystemWithdrawCollateralTxRequest;
export declare function StablecoinSystemWithdrawCollateralTxRequestToJSON(json: any): StablecoinSystemWithdrawCollateralTxRequest;
export declare function StablecoinSystemWithdrawCollateralTxRequestToJSONTyped(value?: StablecoinSystemWithdrawCollateralTxRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=StablecoinSystemWithdrawCollateralTxRequest.d.ts.map