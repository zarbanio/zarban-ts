"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferralsApi = void 0;
const tslib_1 = require("tslib");
const runtime = tslib_1.__importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class ReferralsApi extends runtime.BaseAPI {
    /**
     * Get a referral by its ID.
     * Get referral by ID
     */
    async getReferralByIdRaw(requestParameters, initOverrides) {
        if (requestParameters['referralId'] == null) {
            throw new runtime.RequiredError('referralId', 'Required parameter "referralId" was null or undefined when calling getReferralById().');
        }
        const queryParameters = {};
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ReferralFromJSON)(jsonValue));
    }
    /**
     * Get a referral by its ID.
     * Get referral by ID
     */
    async getReferralById(requestParameters, initOverrides) {
        const response = await this.getReferralByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get referrals by user ID or name.
     * Get referrals
     */
    async getReferralsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }
        const headerParameters = {};
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
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.ReferralResponseFromJSON)(jsonValue));
    }
    /**
     * Get referrals by user ID or name.
     * Get referrals
     */
    async getReferrals(requestParameters = {}, initOverrides) {
        const response = await this.getReferralsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Redeem a referral for a user.
     * Redeem a referral
     */
    async redeemReferralRaw(requestParameters, initOverrides) {
        if (requestParameters['referralId'] == null) {
            throw new runtime.RequiredError('referralId', 'Required parameter "referralId" was null or undefined when calling redeemReferral().');
        }
        const queryParameters = {};
        const headerParameters = {};
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
    async redeemReferral(requestParameters, initOverrides) {
        await this.redeemReferralRaw(requestParameters, initOverrides);
    }
    /**
     * Validate a referral to check if it can be redeemed.
     * Validate a referral
     */
    async validateReferralRaw(requestParameters, initOverrides) {
        if (requestParameters['referralId'] == null) {
            throw new runtime.RequiredError('referralId', 'Required parameter "referralId" was null or undefined when calling validateReferral().');
        }
        const queryParameters = {};
        const headerParameters = {};
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
    async validateReferral(requestParameters, initOverrides) {
        await this.validateReferralRaw(requestParameters, initOverrides);
    }
}
exports.ReferralsApi = ReferralsApi;
//# sourceMappingURL=ReferralsApi.js.map