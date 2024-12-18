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
 * @interface ModelError
 */
export interface ModelError {
    /**
     * Error message
     * @type {string}
     * @memberof ModelError
     */
    msg: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelError
     */
    reasons: Array<string>;
}

/**
 * Check if a given object implements the ModelError interface.
 */
export function instanceOfModelError(value: object): value is ModelError {
    if (!('msg' in value) || value['msg'] === undefined) return false;
    if (!('reasons' in value) || value['reasons'] === undefined) return false;
    return true;
}

export function ModelErrorFromJSON(json: any): ModelError {
    return ModelErrorFromJSONTyped(json, false);
}

export function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError {
    if (json == null) {
        return json;
    }
    return {
        
        'msg': json['msg'],
        'reasons': json['reasons'],
    };
}

export function ModelErrorToJSON(json: any): ModelError {
    return ModelErrorToJSONTyped(json, false);
}

export function ModelErrorToJSONTyped(value?: ModelError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'msg': value['msg'],
        'reasons': value['reasons'],
    };
}

