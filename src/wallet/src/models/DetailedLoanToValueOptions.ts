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
 * @interface DetailedLoanToValueOptions
 */
export interface DetailedLoanToValueOptions {
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof DetailedLoanToValueOptions
     */
    name: { [key: string]: string | undefined; };
    /**
     * The loan to value of the vault.
     * @type {string}
     * @memberof DetailedLoanToValueOptions
     */
    value: string;
}

/**
 * Check if a given object implements the DetailedLoanToValueOptions interface.
 */
export function instanceOfDetailedLoanToValueOptions(value: object): value is DetailedLoanToValueOptions {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function DetailedLoanToValueOptionsFromJSON(json: any): DetailedLoanToValueOptions {
    return DetailedLoanToValueOptionsFromJSONTyped(json, false);
}

export function DetailedLoanToValueOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetailedLoanToValueOptions {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'value': json['value'],
    };
}

export function DetailedLoanToValueOptionsToJSON(json: any): DetailedLoanToValueOptions {
    return DetailedLoanToValueOptionsToJSONTyped(json, false);
}

export function DetailedLoanToValueOptionsToJSONTyped(value?: DetailedLoanToValueOptions | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'value': value['value'],
    };
}

