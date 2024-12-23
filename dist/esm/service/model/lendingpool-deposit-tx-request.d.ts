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
 * @interface LendingpoolDepositTxRequest
 */
export interface LendingpoolDepositTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof LendingpoolDepositTxRequest
     */
    'user': string;
    /**
     *
     * @type {string}
     * @memberof LendingpoolDepositTxRequest
     */
    'symbol': string;
    /**
     * The amount to deposit in native token units, if not provided, it will be calculated based on the token balance
     * @type {string}
     * @memberof LendingpoolDepositTxRequest
     */
    'amount'?: string;
}
//# sourceMappingURL=lendingpool-deposit-tx-request.d.ts.map