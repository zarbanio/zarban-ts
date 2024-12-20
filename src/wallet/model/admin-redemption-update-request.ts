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
    'status': AdminRedemptionUpdateRequestStatusEnum;
    /**
     * The Paya tracking code
     * @type {string}
     * @memberof AdminRedemptionUpdateRequest
     */
    'payaTrackingCode'?: string;
}

export const AdminRedemptionUpdateRequestStatusEnum = {
    APPROVED: 'Approved',
    REJECTED: 'Rejected',
    COMPLETED: 'Completed'
} as const;

export type AdminRedemptionUpdateRequestStatusEnum = typeof AdminRedemptionUpdateRequestStatusEnum[keyof typeof AdminRedemptionUpdateRequestStatusEnum];

