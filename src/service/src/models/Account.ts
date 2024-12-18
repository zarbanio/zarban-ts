/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { WalletBalance } from './WalletBalance';
import {
    WalletBalanceFromJSON,
    WalletBalanceFromJSONTyped,
    WalletBalanceToJSON,
    WalletBalanceToJSONTyped,
} from './WalletBalance';
import type { AccountStakingSummary } from './AccountStakingSummary';
import {
    AccountStakingSummaryFromJSON,
    AccountStakingSummaryFromJSONTyped,
    AccountStakingSummaryToJSON,
    AccountStakingSummaryToJSONTyped,
} from './AccountStakingSummary';
import type { AccountLendingpoolSummary } from './AccountLendingpoolSummary';
import {
    AccountLendingpoolSummaryFromJSON,
    AccountLendingpoolSummaryFromJSONTyped,
    AccountLendingpoolSummaryToJSON,
    AccountLendingpoolSummaryToJSONTyped,
} from './AccountLendingpoolSummary';
import type { AccountStablecoinSystemSummary } from './AccountStablecoinSystemSummary';
import {
    AccountStablecoinSystemSummaryFromJSON,
    AccountStablecoinSystemSummaryFromJSONTyped,
    AccountStablecoinSystemSummaryToJSON,
    AccountStablecoinSystemSummaryToJSONTyped,
} from './AccountStablecoinSystemSummary';

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
    netWorth: { [key: string]: string | undefined; };
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Account
     */
    totalDebt: { [key: string]: string | undefined; };
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Account
     */
    totalDeposits: { [key: string]: string | undefined; };
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
export function instanceOfAccount(value: object): value is Account {
    if (!('points' in value) || value['points'] === undefined) return false;
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('walletBalance' in value) || value['walletBalance'] === undefined) return false;
    if (!('netWorth' in value) || value['netWorth'] === undefined) return false;
    if (!('totalDebt' in value) || value['totalDebt'] === undefined) return false;
    if (!('totalDeposits' in value) || value['totalDeposits'] === undefined) return false;
    if (!('lendingpoolSummary' in value) || value['lendingpoolSummary'] === undefined) return false;
    if (!('stabelcoinSystemSummary' in value) || value['stabelcoinSystemSummary'] === undefined) return false;
    if (!('stakingSummary' in value) || value['stakingSummary'] === undefined) return false;
    return true;
}

export function AccountFromJSON(json: any): Account {
    return AccountFromJSONTyped(json, false);
}

export function AccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): Account {
    if (json == null) {
        return json;
    }
    return {
        
        'points': json['points'],
        'address': json['address'],
        'walletBalance': WalletBalanceFromJSON(json['walletBalance']),
        'netWorth': json['netWorth'],
        'totalDebt': json['totalDebt'],
        'totalDeposits': json['totalDeposits'],
        'lendingpoolSummary': AccountLendingpoolSummaryFromJSON(json['lendingpoolSummary']),
        'stabelcoinSystemSummary': AccountStablecoinSystemSummaryFromJSON(json['stabelcoinSystemSummary']),
        'stakingSummary': AccountStakingSummaryFromJSON(json['stakingSummary']),
    };
}

export function AccountToJSON(json: any): Account {
    return AccountToJSONTyped(json, false);
}

export function AccountToJSONTyped(value?: Account | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'points': value['points'],
        'address': value['address'],
        'walletBalance': WalletBalanceToJSON(value['walletBalance']),
        'netWorth': value['netWorth'],
        'totalDebt': value['totalDebt'],
        'totalDeposits': value['totalDeposits'],
        'lendingpoolSummary': AccountLendingpoolSummaryToJSON(value['lendingpoolSummary']),
        'stabelcoinSystemSummary': AccountStablecoinSystemSummaryToJSON(value['stabelcoinSystemSummary']),
        'stakingSummary': AccountStakingSummaryToJSON(value['stakingSummary']),
    };
}

