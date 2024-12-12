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
 * @interface StablecoinSystemDepositCollateralTxRequest
 */
export interface StablecoinSystemDepositCollateralTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof StablecoinSystemDepositCollateralTxRequest
     */
    'user': string;
    /**
     * The ID of the vault
     * @type {number}
     * @memberof StablecoinSystemDepositCollateralTxRequest
     */
    'vaultId': number;
    /**
     * The amount of collateral to deposit in native token units, if not provided, it will be calculated based on the wallet balance
     * @type {string}
     * @memberof StablecoinSystemDepositCollateralTxRequest
     */
    'amount'?: string;
}
//# sourceMappingURL=stablecoin-system-deposit-collateral-tx-request.d.ts.map