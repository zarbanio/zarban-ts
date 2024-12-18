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
import type { LoanToValueOptions } from './LoanToValueOptions';
import {
    LoanToValueOptionsFromJSON,
    LoanToValueOptionsFromJSONTyped,
    LoanToValueOptionsToJSON,
    LoanToValueOptionsToJSONTyped,
} from './LoanToValueOptions';

/**
 * 
 * @export
 * @interface LoanCreateRequest
 */
export interface LoanCreateRequest {
    /**
     * Intent to create a vault
     * @type {string}
     * @memberof LoanCreateRequest
     */
    intent: LoanCreateRequestIntentEnum;
    /**
     * The name of the loan plan
     * @type {string}
     * @memberof LoanCreateRequest
     */
    planName: string;
    /**
     * Collateral amount
     * @type {string}
     * @memberof LoanCreateRequest
     */
    collateral?: string;
    /**
     * Debt amount
     * @type {string}
     * @memberof LoanCreateRequest
     */
    debt?: string;
    /**
     * Coin symbol
     * @type {string}
     * @memberof LoanCreateRequest
     */
    symbol: string;
    /**
     * 
     * @type {LoanToValueOptions}
     * @memberof LoanCreateRequest
     */
    loanToValueOption: LoanToValueOptions;
}


/**
 * @export
 */
export const LoanCreateRequestIntentEnum = {
    CREATE: 'create',
    PREVIEW: 'preview'
} as const;
export type LoanCreateRequestIntentEnum = typeof LoanCreateRequestIntentEnum[keyof typeof LoanCreateRequestIntentEnum];


/**
 * Check if a given object implements the LoanCreateRequest interface.
 */
export function instanceOfLoanCreateRequest(value: object): value is LoanCreateRequest {
    if (!('intent' in value) || value['intent'] === undefined) return false;
    if (!('planName' in value) || value['planName'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('loanToValueOption' in value) || value['loanToValueOption'] === undefined) return false;
    return true;
}

export function LoanCreateRequestFromJSON(json: any): LoanCreateRequest {
    return LoanCreateRequestFromJSONTyped(json, false);
}

export function LoanCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoanCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'intent': json['intent'],
        'planName': json['planName'],
        'collateral': json['collateral'] == null ? undefined : json['collateral'],
        'debt': json['debt'] == null ? undefined : json['debt'],
        'symbol': json['symbol'],
        'loanToValueOption': LoanToValueOptionsFromJSON(json['loanToValueOption']),
    };
}

export function LoanCreateRequestToJSON(json: any): LoanCreateRequest {
    return LoanCreateRequestToJSONTyped(json, false);
}

export function LoanCreateRequestToJSONTyped(value?: LoanCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'intent': value['intent'],
        'planName': value['planName'],
        'collateral': value['collateral'],
        'debt': value['debt'],
        'symbol': value['symbol'],
        'loanToValueOption': LoanToValueOptionsToJSON(value['loanToValueOption']),
    };
}

