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
import type { Coin } from './Coin';
import type { Currency } from './Currency';
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
    locked: Currency;
    /**
     *
     * @type {Coin}
     * @memberof Balance
     */
    coin: Coin;
    /**
     *
     * @type {Currency}
     * @memberof Balance
     */
    balance: Currency;
}
/**
 * Check if a given object implements the Balance interface.
 */
export declare function instanceOfBalance(value: object): value is Balance;
export declare function BalanceFromJSON(json: any): Balance;
export declare function BalanceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Balance;
export declare function BalanceToJSON(json: any): Balance;
export declare function BalanceToJSONTyped(value?: Balance | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Balance.d.ts.map