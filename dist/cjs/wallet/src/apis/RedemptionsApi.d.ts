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
import type { AdminRedemptionUpdateRequest, Redemption, RedemptionRequest, RedemptionResponse } from '../models/index';
export interface GetAllRedemptionsRequest {
    state?: GetAllRedemptionsStateEnum;
}
export interface GetRedemptionDetailsRequest {
    id: number;
}
export interface RedeemZarRequest {
    redemptionRequest: RedemptionRequest;
}
export interface UpdateRedemptionStatusRequest {
    id: string;
    adminRedemptionUpdateRequest: AdminRedemptionUpdateRequest;
}
/**
 * RedemptionsApi - interface
 *
 * @export
 * @interface RedemptionsApiInterface
 */
export interface RedemptionsApiInterface {
    /**
     * Get a list of all redemptions.
     * @summary Get all redemptions
     * @param {'pending' | 'approved' | 'completed' | 'rejected'} [state] Cursor for pagination
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApiInterface
     */
    getAllRedemptionsRaw(requestParameters: GetAllRedemptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RedemptionResponse>>;
    /**
     * Get a list of all redemptions.
     * Get all redemptions
     */
    getAllRedemptions(requestParameters: GetAllRedemptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RedemptionResponse>;
    /**
     * Get the details of a redemption.
     * @summary Get redemption
     * @param {number} id Redemption ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApiInterface
     */
    getRedemptionDetailsRaw(requestParameters: GetRedemptionDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Redemption>>;
    /**
     * Get the details of a redemption.
     * Get redemption
     */
    getRedemptionDetails(requestParameters: GetRedemptionDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Redemption>;
    /**
     * Redeem zar
     * @summary Redeem zar
     * @param {RedemptionRequest} redemptionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApiInterface
     */
    redeemZarRaw(requestParameters: RedeemZarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Redemption>>;
    /**
     * Redeem zar
     * Redeem zar
     */
    redeemZar(requestParameters: RedeemZarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Redemption>;
    /**
     * Update the status of a redemption.
     * @summary Update redemption
     * @param {string} id Redemption ID
     * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApiInterface
     */
    updateRedemptionStatusRaw(requestParameters: UpdateRedemptionStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Redemption>>;
    /**
     * Update the status of a redemption.
     * Update redemption
     */
    updateRedemptionStatus(requestParameters: UpdateRedemptionStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Redemption>;
}
/**
 *
 */
export declare class RedemptionsApi extends runtime.BaseAPI implements RedemptionsApiInterface {
    /**
     * Get a list of all redemptions.
     * Get all redemptions
     */
    getAllRedemptionsRaw(requestParameters: GetAllRedemptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RedemptionResponse>>;
    /**
     * Get a list of all redemptions.
     * Get all redemptions
     */
    getAllRedemptions(requestParameters?: GetAllRedemptionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RedemptionResponse>;
    /**
     * Get the details of a redemption.
     * Get redemption
     */
    getRedemptionDetailsRaw(requestParameters: GetRedemptionDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Redemption>>;
    /**
     * Get the details of a redemption.
     * Get redemption
     */
    getRedemptionDetails(requestParameters: GetRedemptionDetailsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Redemption>;
    /**
     * Redeem zar
     * Redeem zar
     */
    redeemZarRaw(requestParameters: RedeemZarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Redemption>>;
    /**
     * Redeem zar
     * Redeem zar
     */
    redeemZar(requestParameters: RedeemZarRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Redemption>;
    /**
     * Update the status of a redemption.
     * Update redemption
     */
    updateRedemptionStatusRaw(requestParameters: UpdateRedemptionStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Redemption>>;
    /**
     * Update the status of a redemption.
     * Update redemption
     */
    updateRedemptionStatus(requestParameters: UpdateRedemptionStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Redemption>;
}
/**
 * @export
 */
export declare const GetAllRedemptionsStateEnum: {
    readonly PENDING: "pending";
    readonly APPROVED: "approved";
    readonly COMPLETED: "completed";
    readonly REJECTED: "rejected";
};
export type GetAllRedemptionsStateEnum = typeof GetAllRedemptionsStateEnum[keyof typeof GetAllRedemptionsStateEnum];
//# sourceMappingURL=RedemptionsApi.d.ts.map