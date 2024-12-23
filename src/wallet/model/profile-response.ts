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


// May contain unused imports in some cases
// @ts-ignore
import type { BankInfo } from './bank-info';
// May contain unused imports in some cases
// @ts-ignore
import type { Referral } from './referral';
// May contain unused imports in some cases
// @ts-ignore
import type { User } from './user';

/**
 * 
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     * 
     * @type {Referral}
     * @memberof ProfileResponse
     */
    'referral': Referral;
    /**
     * 
     * @type {number}
     * @memberof ProfileResponse
     */
    'points': number;
    /**
     * 
     * @type {User}
     * @memberof ProfileResponse
     */
    'user': User;
    /**
     * 
     * @type {Array<BankInfo>}
     * @memberof ProfileResponse
     */
    'bankInfo': Array<BankInfo>;
}

