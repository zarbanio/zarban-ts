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
import type { Balance } from './balance';
import type { Currency } from './currency';
/**
 *
 * @export
 * @interface WalletBalance
 */
export interface WalletBalance {
    /**
     *
     * @type {Currency}
     * @memberof WalletBalance
     */
    'total': Currency;
    /**
     *
     * @type {Array<Balance>}
     * @memberof WalletBalance
     */
    'balances': Array<Balance>;
}
//# sourceMappingURL=wallet-balance.d.ts.map