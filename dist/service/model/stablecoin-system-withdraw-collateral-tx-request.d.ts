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
    'user': string;
    /**
     * The ID of the vault
     * @type {number}
     * @memberof StablecoinSystemWithdrawCollateralTxRequest
     */
    'vaultId': number;
    /**
     * The amount of collateral to withdraw in native token units, if not provided, it will be calculated based on the withdrawable balance
     * @type {string}
     * @memberof StablecoinSystemWithdrawCollateralTxRequest
     */
    'amount'?: string;
}
//# sourceMappingURL=stablecoin-system-withdraw-collateral-tx-request.d.ts.map