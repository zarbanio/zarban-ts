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
import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import { type RequestArgs, BaseAPI } from '../base';
import type { Referral } from '../model';
import type { ReferralResponse } from '../model';
/**
 * ReferralsApi - axios parameter creator
 * @export
 */
export declare const ReferralsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get a referral by its ID.
     * @summary Get referral by ID
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReferralById: (referralId: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get referrals by user ID or name.
     * @summary Get referrals
     * @param {string} [name] Referral name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReferrals: (name?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Redeem a referral for a user.
     * @summary Redeem a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    redeemReferral: (referralId: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Validate a referral to check if it can be redeemed.
     * @summary Validate a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateReferral: (referralId: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * ReferralsApi - functional programming interface
 * @export
 */
export declare const ReferralsApiFp: (configuration?: Configuration) => {
    /**
     * Get a referral by its ID.
     * @summary Get referral by ID
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReferralById(referralId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Referral>>;
    /**
     * Get referrals by user ID or name.
     * @summary Get referrals
     * @param {string} [name] Referral name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReferrals(name?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ReferralResponse>>;
    /**
     * Redeem a referral for a user.
     * @summary Redeem a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    redeemReferral(referralId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
    /**
     * Validate a referral to check if it can be redeemed.
     * @summary Validate a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateReferral(referralId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>>;
};
/**
 * ReferralsApi - factory interface
 * @export
 */
export declare const ReferralsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get a referral by its ID.
     * @summary Get referral by ID
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReferralById(referralId: number, options?: RawAxiosRequestConfig): AxiosPromise<Referral>;
    /**
     * Get referrals by user ID or name.
     * @summary Get referrals
     * @param {string} [name] Referral name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getReferrals(name?: string, options?: RawAxiosRequestConfig): AxiosPromise<ReferralResponse>;
    /**
     * Redeem a referral for a user.
     * @summary Redeem a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    redeemReferral(referralId: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * Validate a referral to check if it can be redeemed.
     * @summary Validate a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    validateReferral(referralId: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;
};
/**
 * ReferralsApi - interface
 * @export
 * @interface ReferralsApi
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
    getReferralById(referralId: number, options?: RawAxiosRequestConfig): AxiosPromise<Referral>;
    /**
     * Get referrals by user ID or name.
     * @summary Get referrals
     * @param {string} [name] Referral name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    getReferrals(name?: string, options?: RawAxiosRequestConfig): AxiosPromise<ReferralResponse>;
    /**
     * Redeem a referral for a user.
     * @summary Redeem a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    redeemReferral(referralId: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;
    /**
     * Validate a referral to check if it can be redeemed.
     * @summary Validate a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApiInterface
     */
    validateReferral(referralId: number, options?: RawAxiosRequestConfig): AxiosPromise<void>;
}
/**
 * ReferralsApi - object-oriented interface
 * @export
 * @class ReferralsApi
 * @extends {BaseAPI}
 */
export declare class ReferralsApi extends BaseAPI implements ReferralsApiInterface {
    /**
     * Get a referral by its ID.
     * @summary Get referral by ID
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    getReferralById(referralId: number, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<Referral, any>>;
    /**
     * Get referrals by user ID or name.
     * @summary Get referrals
     * @param {string} [name] Referral name
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    getReferrals(name?: string, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<ReferralResponse, any>>;
    /**
     * Redeem a referral for a user.
     * @summary Redeem a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    redeemReferral(referralId: number, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<void, any>>;
    /**
     * Validate a referral to check if it can be redeemed.
     * @summary Validate a referral
     * @param {number} referralId Referral ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReferralsApi
     */
    validateReferral(referralId: number, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<void, any>>;
}
//# sourceMappingURL=referrals-api.d.ts.map