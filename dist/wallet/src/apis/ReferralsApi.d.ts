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
import * as runtime from '../runtime';
import type { Referral, ReferralResponse } from '../models/index';
export interface GetReferralByIdRequest {
    referralId: number;
}
export interface GetReferralsRequest {
    name?: string;
}
export interface RedeemReferralRequest {
    referralId: number;
}
export interface ValidateReferralRequest {
    referralId: number;
}
/**
 * ReferralsApi - interface
 *
 * @export
 * @interface ReferralsApiInterface
 */
export interface ReferralsApiInterface {
    /**
     * Get a referral by its ID.
     * @summary Get referral by ID
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    getReferralByIdRaw(requestParameters: GetReferralByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Referral>>;
    /**
     * Get a referral by its ID.
     * Get referral by ID
     */
    getReferralById(requestParameters: GetReferralByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Referral>;
    /**
     * Get referrals by user ID or name.
     * @summary Get referrals
     * @param {string} [name] Referral name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    getReferralsRaw(requestParameters: GetReferralsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReferralResponse>>;
    /**
     * Get referrals by user ID or name.
     * Get referrals
     */
    getReferrals(requestParameters: GetReferralsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReferralResponse>;
    /**
     * Redeem a referral for a user.
     * @summary Redeem a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    redeemReferralRaw(requestParameters: RedeemReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Redeem a referral for a user.
     * Redeem a referral
     */
    redeemReferral(requestParameters: RedeemReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Validate a referral to check if it can be redeemed.
     * @summary Validate a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    validateReferralRaw(requestParameters: ValidateReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Validate a referral to check if it can be redeemed.
     * Validate a referral
     */
    validateReferral(requestParameters: ValidateReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 *
 */
export declare class ReferralsApi extends runtime.BaseAPI implements ReferralsApiInterface {
    /**
     * Get a referral by its ID.
     * Get referral by ID
     */
    getReferralByIdRaw(requestParameters: GetReferralByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Referral>>;
    /**
     * Get a referral by its ID.
     * Get referral by ID
     */
    getReferralById(requestParameters: GetReferralByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Referral>;
    /**
     * Get referrals by user ID or name.
     * Get referrals
     */
    getReferralsRaw(requestParameters: GetReferralsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReferralResponse>>;
    /**
     * Get referrals by user ID or name.
     * Get referrals
     */
    getReferrals(requestParameters?: GetReferralsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReferralResponse>;
    /**
     * Redeem a referral for a user.
     * Redeem a referral
     */
    redeemReferralRaw(requestParameters: RedeemReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Redeem a referral for a user.
     * Redeem a referral
     */
    redeemReferral(requestParameters: RedeemReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Validate a referral to check if it can be redeemed.
     * Validate a referral
     */
    validateReferralRaw(requestParameters: ValidateReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Validate a referral to check if it can be redeemed.
     * Validate a referral
     */
    validateReferral(requestParameters: ValidateReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
//# sourceMappingURL=ReferralsApi.d.ts.map