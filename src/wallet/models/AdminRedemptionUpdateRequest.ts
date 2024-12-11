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
 * @interface AdminRedemptionUpdateRequest
 */
export interface AdminRedemptionUpdateRequest {
    /**
     * The status of the redemption request
     * @type {string}
     * @memberof AdminRedemptionUpdateRequest
     */
    status: AdminRedemptionUpdateRequestStatusEnum;
    /**
     * The Paya tracking code
     * @type {string}
     * @memberof AdminRedemptionUpdateRequest
     */
    payaTrackingCode?: string;
}


/**
 * @export
 */
export const AdminRedemptionUpdateRequestStatusEnum = {
    Approved: 'Approved',
    Rejected: 'Rejected',
    Completed: 'Completed'
} as const;
export type AdminRedemptionUpdateRequestStatusEnum = typeof AdminRedemptionUpdateRequestStatusEnum[keyof typeof AdminRedemptionUpdateRequestStatusEnum];


/**
 * Check if a given object implements the AdminRedemptionUpdateRequest interface.
 */
export function instanceOfAdminRedemptionUpdateRequest(value: object): value is AdminRedemptionUpdateRequest {
    if (!('status' in value) || value['status'] === undefined) return false;
    return true;
}

export function AdminRedemptionUpdateRequestFromJSON(json: any): AdminRedemptionUpdateRequest {
    return AdminRedemptionUpdateRequestFromJSONTyped(json, false);
}

export function AdminRedemptionUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AdminRedemptionUpdateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'status': json['status'],
        'payaTrackingCode': json['payaTrackingCode'] == null ? undefined : json['payaTrackingCode'],
    };
}

export function AdminRedemptionUpdateRequestToJSON(json: any): AdminRedemptionUpdateRequest {
    return AdminRedemptionUpdateRequestToJSONTyped(json, false);
}

export function AdminRedemptionUpdateRequestToJSONTyped(value?: AdminRedemptionUpdateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'status': value['status'],
        'payaTrackingCode': value['payaTrackingCode'],
    };
}
