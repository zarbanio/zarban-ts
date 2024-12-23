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
 * @interface LendingpoolRepayTxRequest
 */
export interface LendingpoolRepayTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof LendingpoolRepayTxRequest
     */
    'user': string;
    /**
     *
     * @type {string}
     * @memberof LendingpoolRepayTxRequest
     */
    'symbol': string;
    /**
     * The amount to repay in native token units, if not provided, it will be calculated based on the borrow balance
     * @type {string}
     * @memberof LendingpoolRepayTxRequest
     */
    'amount'?: string;
}
//# sourceMappingURL=lendingpool-repay-tx-request.d.ts.map