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
/**
 * 
 * @export
 * @interface BankInfo
 */
export interface BankInfo {
    /**
     * Bank name
     * @type {string}
     * @memberof BankInfo
     */
    bankName: string;
    /**
     * Card number
     * @type {string}
     * @memberof BankInfo
     */
    cardNumber: string;
    /**
     * IBAN
     * @type {string}
     * @memberof BankInfo
     */
    iban: string;
}

/**
 * Check if a given object implements the BankInfo interface.
 */
export function instanceOfBankInfo(value: object): value is BankInfo {
    if (!('bankName' in value) || value['bankName'] === undefined) return false;
    if (!('cardNumber' in value) || value['cardNumber'] === undefined) return false;
    if (!('iban' in value) || value['iban'] === undefined) return false;
    return true;
}

export function BankInfoFromJSON(json: any): BankInfo {
    return BankInfoFromJSONTyped(json, false);
}

export function BankInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'bankName': json['bankName'],
        'cardNumber': json['cardNumber'],
        'iban': json['iban'],
    };
}

export function BankInfoToJSON(json: any): BankInfo {
    return BankInfoToJSONTyped(json, false);
}

export function BankInfoToJSONTyped(value?: BankInfo | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'bankName': value['bankName'],
        'cardNumber': value['cardNumber'],
        'iban': value['iban'],
    };
}

