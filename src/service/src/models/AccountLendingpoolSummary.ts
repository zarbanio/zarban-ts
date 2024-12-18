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
/**
 * 
 * @export
 * @interface AccountLendingpoolSummary
 */
export interface AccountLendingpoolSummary {
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof AccountLendingpoolSummary
     */
    totalDebt: { [key: string]: string | undefined; };
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof AccountLendingpoolSummary
     */
    totalDeposits: { [key: string]: string | undefined; };
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof AccountLendingpoolSummary
     */
    totalCollateral: { [key: string]: string | undefined; };
    /**
     * Health factor in lending pool
     * @type {string}
     * @memberof AccountLendingpoolSummary
     */
    healthFactor: string;
    /**
     * Net annual percentage yield in lending pool
     * @type {string}
     * @memberof AccountLendingpoolSummary
     */
    netApy: string;
    /**
     * Total supply rate in lending pool for account
     * @type {string}
     * @memberof AccountLendingpoolSummary
     */
    totalSupplyApy: string;
    /**
     * Total borrow rate in lending pool for account
     * @type {string}
     * @memberof AccountLendingpoolSummary
     */
    totalBorrowApy: string;
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof AccountLendingpoolSummary
     */
    availableToBorrow: { [key: string]: string | undefined; };
    /**
     * Borrow power used in lending pool
     * @type {string}
     * @memberof AccountLendingpoolSummary
     */
    borrowPowerUsed: string;
    /**
     * Current liquidation threshold in lending pool
     * @type {string}
     * @memberof AccountLendingpoolSummary
     */
    currentLiquidationThreshold: string;
    /**
     * Loan to value in lending pool
     * @type {string}
     * @memberof AccountLendingpoolSummary
     */
    loanToValue: string;
}

/**
 * Check if a given object implements the AccountLendingpoolSummary interface.
 */
export function instanceOfAccountLendingpoolSummary(value: object): value is AccountLendingpoolSummary {
    if (!('totalDebt' in value) || value['totalDebt'] === undefined) return false;
    if (!('totalDeposits' in value) || value['totalDeposits'] === undefined) return false;
    if (!('totalCollateral' in value) || value['totalCollateral'] === undefined) return false;
    if (!('healthFactor' in value) || value['healthFactor'] === undefined) return false;
    if (!('netApy' in value) || value['netApy'] === undefined) return false;
    if (!('totalSupplyApy' in value) || value['totalSupplyApy'] === undefined) return false;
    if (!('totalBorrowApy' in value) || value['totalBorrowApy'] === undefined) return false;
    if (!('availableToBorrow' in value) || value['availableToBorrow'] === undefined) return false;
    if (!('borrowPowerUsed' in value) || value['borrowPowerUsed'] === undefined) return false;
    if (!('currentLiquidationThreshold' in value) || value['currentLiquidationThreshold'] === undefined) return false;
    if (!('loanToValue' in value) || value['loanToValue'] === undefined) return false;
    return true;
}

export function AccountLendingpoolSummaryFromJSON(json: any): AccountLendingpoolSummary {
    return AccountLendingpoolSummaryFromJSONTyped(json, false);
}

export function AccountLendingpoolSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountLendingpoolSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'totalDebt': json['totalDebt'],
        'totalDeposits': json['totalDeposits'],
        'totalCollateral': json['totalCollateral'],
        'healthFactor': json['healthFactor'],
        'netApy': json['netApy'],
        'totalSupplyApy': json['totalSupplyApy'],
        'totalBorrowApy': json['totalBorrowApy'],
        'availableToBorrow': json['availableToBorrow'],
        'borrowPowerUsed': json['borrowPowerUsed'],
        'currentLiquidationThreshold': json['currentLiquidationThreshold'],
        'loanToValue': json['loanToValue'],
    };
}

export function AccountLendingpoolSummaryToJSON(json: any): AccountLendingpoolSummary {
    return AccountLendingpoolSummaryToJSONTyped(json, false);
}

export function AccountLendingpoolSummaryToJSONTyped(value?: AccountLendingpoolSummary | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'totalDebt': value['totalDebt'],
        'totalDeposits': value['totalDeposits'],
        'totalCollateral': value['totalCollateral'],
        'healthFactor': value['healthFactor'],
        'netApy': value['netApy'],
        'totalSupplyApy': value['totalSupplyApy'],
        'totalBorrowApy': value['totalBorrowApy'],
        'availableToBorrow': value['availableToBorrow'],
        'borrowPowerUsed': value['borrowPowerUsed'],
        'currentLiquidationThreshold': value['currentLiquidationThreshold'],
        'loanToValue': value['loanToValue'],
    };
}

