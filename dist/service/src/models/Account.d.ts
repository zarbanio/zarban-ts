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
import type { WalletBalance } from './WalletBalance';
import type { AccountStakingSummary } from './AccountStakingSummary';
import type { AccountLendingpoolSummary } from './AccountLendingpoolSummary';
import type { AccountStablecoinSystemSummary } from './AccountStablecoinSystemSummary';
/**
 *
 * @export
 * @interface Account
 */
export interface Account {
    /**
     * The number of points the account has.
     * @type {number}
     * @memberof Account
     */
    points: number;
    /**
     * Ethereum address of the account
     * @type {string}
     * @memberof Account
     */
    address: string;
    /**
     *
     * @type {WalletBalance}
     * @memberof Account
     */
    walletBalance: WalletBalance;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Account
     */
    netWorth: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Account
     */
    totalDebt: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Account
     */
    totalDeposits: {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {AccountLendingpoolSummary}
     * @memberof Account
     */
    lendingpoolSummary: AccountLendingpoolSummary;
    /**
     *
     * @type {AccountStablecoinSystemSummary}
     * @memberof Account
     */
    stabelcoinSystemSummary: AccountStablecoinSystemSummary;
    /**
     *
     * @type {AccountStakingSummary}
     * @memberof Account
     */
    stakingSummary: AccountStakingSummary;
}
/**
 * Check if a given object implements the Account interface.
 */
export declare function instanceOfAccount(value: object): value is Account;
export declare function AccountFromJSON(json: any): Account;
export declare function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account;
export declare function AccountToJSON(json: any): Account;
export declare function AccountToJSONTyped(value?: Account | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=Account.d.ts.map