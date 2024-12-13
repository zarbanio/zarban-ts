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
import type { Currency } from './Currency';
import {
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
    CurrencyToJSONTyped,
} from './Currency';
import type { Timestamp } from './Timestamp';
import {
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
    TimestampToJSONTyped,
} from './Timestamp';
import type { BankInfo } from './BankInfo';
import {
    BankInfoFromJSON,
    BankInfoFromJSONTyped,
    BankInfoToJSON,
    BankInfoToJSONTyped,
} from './BankInfo';

/**
 * 
 * @export
 * @interface Redemption
 */
export interface Redemption {
    /**
     * 
     * @type {Currency}
     * @memberof Redemption
     */
    amount: Currency;
    /**
     * 
     * @type {BankInfo}
     * @memberof Redemption
     */
    destinationBankInfo: BankInfo;
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Redemption
     */
    status: { [key: string]: string | undefined; };
    /**
     * The ID of the redemption request
     * @type {string}
     * @memberof Redemption
     */
    id: string;
    /**
     * 
     * @type {Timestamp}
     * @memberof Redemption
     */
    createdAt: Timestamp;
    /**
     * 
     * @type {Timestamp}
     * @memberof Redemption
     */
    updatedAt?: Timestamp;
    /**
     * The Paya tracking code
     * @type {string}
     * @memberof Redemption
     */
    payaTrackingCode?: string;
}

/**
 * Check if a given object implements the Redemption interface.
 */
export function instanceOfRedemption(value: object): value is Redemption {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('destinationBankInfo' in value) || value['destinationBankInfo'] === undefined) return false;
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    return true;
}

export function RedemptionFromJSON(json: any): Redemption {
    return RedemptionFromJSONTyped(json, false);
}

export function RedemptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Redemption {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': CurrencyFromJSON(json['amount']),
        'destinationBankInfo': BankInfoFromJSON(json['destinationBankInfo']),
        'status': json['status'],
        'id': json['id'],
        'createdAt': TimestampFromJSON(json['createdAt']),
        'updatedAt': json['updatedAt'] == null ? undefined : TimestampFromJSON(json['updatedAt']),
        'payaTrackingCode': json['payaTrackingCode'] == null ? undefined : json['payaTrackingCode'],
    };
}

export function RedemptionToJSON(json: any): Redemption {
    return RedemptionToJSONTyped(json, false);
}

export function RedemptionToJSONTyped(value?: Redemption | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': CurrencyToJSON(value['amount']),
        'destinationBankInfo': BankInfoToJSON(value['destinationBankInfo']),
        'status': value['status'],
        'id': value['id'],
        'createdAt': TimestampToJSON(value['createdAt']),
        'updatedAt': TimestampToJSON(value['updatedAt']),
        'payaTrackingCode': value['payaTrackingCode'],
    };
}

