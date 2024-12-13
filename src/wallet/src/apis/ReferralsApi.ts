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


import * as runtime from '../runtime';
import type {
  Referral,
  ReferralResponse,
} from '../models/index';
import {
    ReferralFromJSON,
    ReferralToJSON,
    ReferralResponseFromJSON,
    ReferralResponseToJSON,
} from '../models/index';

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
export class ReferralsApi extends runtime.BaseAPI implements ReferralsApiInterface {

    /**
     * Get a referral by its ID.
     * Get referral by ID
     */
    async getReferralByIdRaw(requestParameters: GetReferralByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Referral>> {
        if (requestParameters['referralId'] == null) {
            throw new runtime.RequiredError(
                'referralId',
                'Required parameter "referralId" was null or undefined when calling getReferralById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/referrals/{referralId}`.replace(`{${"referralId"}}`, encodeURIComponent(String(requestParameters['referralId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferralFromJSON(jsonValue));
    }

    /**
     * Get a referral by its ID.
     * Get referral by ID
     */
    async getReferralById(requestParameters: GetReferralByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Referral> {
        const response = await this.getReferralByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get referrals by user ID or name.
     * Get referrals
     */
    async getReferralsRaw(requestParameters: GetReferralsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReferralResponse>> {
        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/referrals`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReferralResponseFromJSON(jsonValue));
    }

    /**
     * Get referrals by user ID or name.
     * Get referrals
     */
    async getReferrals(requestParameters: GetReferralsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReferralResponse> {
        const response = await this.getReferralsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Redeem a referral for a user.
     * Redeem a referral
     */
    async redeemReferralRaw(requestParameters: RedeemReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['referralId'] == null) {
            throw new runtime.RequiredError(
                'referralId',
                'Required parameter "referralId" was null or undefined when calling redeemReferral().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/referrals/{referralId}/redeem`.replace(`{${"referralId"}}`, encodeURIComponent(String(requestParameters['referralId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Redeem a referral for a user.
     * Redeem a referral
     */
    async redeemReferral(requestParameters: RedeemReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.redeemReferralRaw(requestParameters, initOverrides);
    }

    /**
     * Validate a referral to check if it can be redeemed.
     * Validate a referral
     */
    async validateReferralRaw(requestParameters: ValidateReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['referralId'] == null) {
            throw new runtime.RequiredError(
                'referralId',
                'Required parameter "referralId" was null or undefined when calling validateReferral().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/referrals/{referralId}/validate`.replace(`{${"referralId"}}`, encodeURIComponent(String(requestParameters['referralId']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Validate a referral to check if it can be redeemed.
     * Validate a referral
     */
    async validateReferral(requestParameters: ValidateReferralRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.validateReferralRaw(requestParameters, initOverrides);
    }

}