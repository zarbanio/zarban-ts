/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { BulletContent } from './BulletContent';
import {
    BulletContentFromJSON,
    BulletContentFromJSONTyped,
    BulletContentToJSON,
    BulletContentToJSONTyped,
} from './BulletContent';
import type { Currency } from './Currency';
import {
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
    CurrencyToJSONTyped,
} from './Currency';
import type { LoanPlan } from './LoanPlan';
import {
    LoanPlanFromJSON,
    LoanPlanFromJSONTyped,
    LoanPlanToJSON,
    LoanPlanToJSONTyped,
} from './LoanPlan';

/**
 * 
 * @export
 * @interface LoansResponse
 */
export interface LoansResponse {
    /**
     * Identifier for the vault.
     * @type {string}
     * @memberof LoansResponse
     */
    id?: string;
    /**
     * Identifier for the user.
     * @type {number}
     * @memberof LoansResponse
     */
    userId: number;
    /**
     * 
     * @type {Currency}
     * @memberof LoansResponse
     */
    liquidationPrice: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof LoansResponse
     */
    collateral: Currency;
    /**
     * The collateralization ratio of the vault.
     * @type {string}
     * @memberof LoansResponse
     */
    collateralizationRatio: string;
    /**
     * The loan to value of the vault.
     * @type {string}
     * @memberof LoansResponse
     */
    loanToValue: string;
    /**
     * 
     * @type {Currency}
     * @memberof LoansResponse
     */
    debt: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof LoansResponse
     */
    principal: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof LoansResponse
     */
    scaledDebt: Currency;
    /**
     * 
     * @type {LoanPlan}
     * @memberof LoansResponse
     */
    plan: LoanPlan;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof LoansResponse
     */
    state: { [key: string]: string; };
    /**
     * 
     * @type {Currency}
     * @memberof LoansResponse
     */
    updatedCollateralTokenBalance?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof LoansResponse
     */
    updatedDebtTokenBalance?: Currency;
    /**
     * 
     * @type {BulletContent}
     * @memberof LoansResponse
     */
    termsAndConditions?: BulletContent;
}

/**
 * Check if a given object implements the LoansResponse interface.
 */
export function instanceOfLoansResponse(value: object): value is LoansResponse {
    if (!('userId' in value) || value['userId'] === undefined) return false;
    if (!('liquidationPrice' in value) || value['liquidationPrice'] === undefined) return false;
    if (!('collateral' in value) || value['collateral'] === undefined) return false;
    if (!('collateralizationRatio' in value) || value['collateralizationRatio'] === undefined) return false;
    if (!('loanToValue' in value) || value['loanToValue'] === undefined) return false;
    if (!('debt' in value) || value['debt'] === undefined) return false;
    if (!('principal' in value) || value['principal'] === undefined) return false;
    if (!('scaledDebt' in value) || value['scaledDebt'] === undefined) return false;
    if (!('plan' in value) || value['plan'] === undefined) return false;
    if (!('state' in value) || value['state'] === undefined) return false;
    return true;
}

export function LoansResponseFromJSON(json: any): LoansResponse {
    return LoansResponseFromJSONTyped(json, false);
}

export function LoansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoansResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'userId': json['userId'],
        'liquidationPrice': CurrencyFromJSON(json['liquidationPrice']),
        'collateral': CurrencyFromJSON(json['collateral']),
        'collateralizationRatio': json['collateralizationRatio'],
        'loanToValue': json['loanToValue'],
        'debt': CurrencyFromJSON(json['debt']),
        'principal': CurrencyFromJSON(json['principal']),
        'scaledDebt': CurrencyFromJSON(json['scaledDebt']),
        'plan': LoanPlanFromJSON(json['plan']),
        'state': json['state'],
        'updatedCollateralTokenBalance': json['updatedCollateralTokenBalance'] == null ? undefined : CurrencyFromJSON(json['updatedCollateralTokenBalance']),
        'updatedDebtTokenBalance': json['updatedDebtTokenBalance'] == null ? undefined : CurrencyFromJSON(json['updatedDebtTokenBalance']),
        'termsAndConditions': json['termsAndConditions'] == null ? undefined : BulletContentFromJSON(json['termsAndConditions']),
    };
}

export function LoansResponseToJSON(json: any): LoansResponse {
    return LoansResponseToJSONTyped(json, false);
}

export function LoansResponseToJSONTyped(value?: LoansResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'userId': value['userId'],
        'liquidationPrice': CurrencyToJSON(value['liquidationPrice']),
        'collateral': CurrencyToJSON(value['collateral']),
        'collateralizationRatio': value['collateralizationRatio'],
        'loanToValue': value['loanToValue'],
        'debt': CurrencyToJSON(value['debt']),
        'principal': CurrencyToJSON(value['principal']),
        'scaledDebt': CurrencyToJSON(value['scaledDebt']),
        'plan': LoanPlanToJSON(value['plan']),
        'state': value['state'],
        'updatedCollateralTokenBalance': CurrencyToJSON(value['updatedCollateralTokenBalance']),
        'updatedDebtTokenBalance': CurrencyToJSON(value['updatedDebtTokenBalance']),
        'termsAndConditions': BulletContentToJSON(value['termsAndConditions']),
    };
}

