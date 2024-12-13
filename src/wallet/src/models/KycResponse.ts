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
 * @interface KycResponse
 */
export interface KycResponse {
    /**
     * KYC request ID
     * @type {string}
     * @memberof KycResponse
     */
    id: string;
    /**
     * First name
     * @type {string}
     * @memberof KycResponse
     */
    firstName: string;
    /**
     * Last name
     * @type {string}
     * @memberof KycResponse
     */
    lastName: string;
    /**
     * National code
     * @type {string}
     * @memberof KycResponse
     */
    nationalId: string;
    /**
     * Date of birth
     * @type {string}
     * @memberof KycResponse
     */
    dateOfBirth: string;
    /**
     * 
     * @type {BankInfo}
     * @memberof KycResponse
     */
    bankInfo: BankInfo;
}

/**
 * Check if a given object implements the KycResponse interface.
 */
export function instanceOfKycResponse(value: object): value is KycResponse {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    if (!('nationalId' in value) || value['nationalId'] === undefined) return false;
    if (!('dateOfBirth' in value) || value['dateOfBirth'] === undefined) return false;
    if (!('bankInfo' in value) || value['bankInfo'] === undefined) return false;
    return true;
}

export function KycResponseFromJSON(json: any): KycResponse {
    return KycResponseFromJSONTyped(json, false);
}

export function KycResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'nationalId': json['nationalId'],
        'dateOfBirth': json['dateOfBirth'],
        'bankInfo': BankInfoFromJSON(json['bankInfo']),
    };
}

export function KycResponseToJSON(json: any): KycResponse {
    return KycResponseToJSONTyped(json, false);
}

export function KycResponseToJSONTyped(value?: KycResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'nationalId': value['nationalId'],
        'dateOfBirth': value['dateOfBirth'],
        'bankInfo': BankInfoToJSON(value['bankInfo']),
    };
}

