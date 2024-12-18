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
import type { Ilk } from './Ilk';
import {
    IlkFromJSON,
    IlkFromJSONTyped,
    IlkToJSON,
    IlkToJSONTyped,
} from './Ilk';

/**
 * 
 * @export
 * @interface IlksResponse
 */
export interface IlksResponse {
    /**
     * 
     * @type {Array<Ilk>}
     * @memberof IlksResponse
     */
    data: Array<Ilk>;
}

/**
 * Check if a given object implements the IlksResponse interface.
 */
export function instanceOfIlksResponse(value: object): value is IlksResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function IlksResponseFromJSON(json: any): IlksResponse {
    return IlksResponseFromJSONTyped(json, false);
}

export function IlksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IlksResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(IlkFromJSON)),
    };
}

export function IlksResponseToJSON(json: any): IlksResponse {
    return IlksResponseToJSONTyped(json, false);
}

export function IlksResponseToJSONTyped(value?: IlksResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(IlkToJSON)),
    };
}

