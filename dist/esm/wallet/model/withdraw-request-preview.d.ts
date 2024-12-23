/**
 * Zarban Wallet API
 * API for Zarban wallet services.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@zarban.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Currency } from './currency';
import type { Network } from './network';
import type { Symbol } from './symbol';
/**
 *
 * @export
 * @interface WithdrawRequestPreview
 */
export interface WithdrawRequestPreview {
    /**
     * Withdrawal address
     * @type {string}
     * @memberof WithdrawRequestPreview
     */
    'address': string;
    /**
     *
     * @type {Network}
     * @memberof WithdrawRequestPreview
     */
    'network': Network;
    /**
     *
     * @type {Symbol}
     * @memberof WithdrawRequestPreview
     */
    'symbol': Symbol;
    /**
     *
     * @type {Currency}
     * @memberof WithdrawRequestPreview
     */
    'amount': Currency;
    /**
     *
     * @type {Currency}
     * @memberof WithdrawRequestPreview
     */
    'fee': Currency;
    /**
     *
     * @type {Currency}
     * @memberof WithdrawRequestPreview
     */
    'balanceAfterWithdraw': Currency;
}
//# sourceMappingURL=withdraw-request-preview.d.ts.map