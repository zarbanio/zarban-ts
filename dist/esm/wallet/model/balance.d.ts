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
import type { Coin } from './coin';
import type { Currency } from './currency';
/**
 *
 * @export
 * @interface Balance
 */
export interface Balance {
    /**
     *
     * @type {Currency}
     * @memberof Balance
     */
    'locked': Currency;
    /**
     *
     * @type {Coin}
     * @memberof Balance
     */
    'coin': Coin;
    /**
     *
     * @type {Currency}
     * @memberof Balance
     */
    'balance': Currency;
}
//# sourceMappingURL=balance.d.ts.map