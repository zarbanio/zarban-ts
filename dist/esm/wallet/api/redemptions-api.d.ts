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
import { type RequestArgs, BaseAPI } from '../base';
import type { AdminRedemptionUpdateRequest } from '../model';
import type { Redemption } from '../model';
import type { RedemptionRequest } from '../model';
import type { RedemptionResponse } from '../model';
/**
 * RedemptionsApi - axios parameter creator
 * @export
 */
export declare const RedemptionsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get a list of all redemptions.
     * @summary Get all redemptions
     * @param {GetAllRedemptionsStateEnum} [state] Cursor for pagination
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllRedemptions: (state?: GetAllRedemptionsStateEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get the details of a redemption.
     * @summary Get redemption
     * @param {number} id Redemption ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRedemptionDetails: (id: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Redeem zar
     * @summary Redeem zar
     * @param {RedemptionRequest} redemptionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    redeemZar: (redemptionRequest: RedemptionRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Update the status of a redemption.
     * @summary Update redemption
     * @param {string} id Redemption ID
     * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRedemptionStatus: (id: string, adminRedemptionUpdateRequest: AdminRedemptionUpdateRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * RedemptionsApi - functional programming interface
 * @export
 */
export declare const RedemptionsApiFp: (configuration?: Configuration) => {
    /**
     * Get a list of all redemptions.
     * @summary Get all redemptions
     * @param {GetAllRedemptionsStateEnum} [state] Cursor for pagination
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllRedemptions(state?: GetAllRedemptionsStateEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RedemptionResponse>>;
    /**
     * Get the details of a redemption.
     * @summary Get redemption
     * @param {number} id Redemption ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRedemptionDetails(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Redemption>>;
    /**
     * Redeem zar
     * @summary Redeem zar
     * @param {RedemptionRequest} redemptionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    redeemZar(redemptionRequest: RedemptionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Redemption>>;
    /**
     * Update the status of a redemption.
     * @summary Update redemption
     * @param {string} id Redemption ID
     * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRedemptionStatus(id: string, adminRedemptionUpdateRequest: AdminRedemptionUpdateRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Redemption>>;
};
/**
 * RedemptionsApi - factory interface
 * @export
 */
export declare const RedemptionsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get a list of all redemptions.
     * @summary Get all redemptions
     * @param {GetAllRedemptionsStateEnum} [state] Cursor for pagination
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getAllRedemptions(state?: GetAllRedemptionsStateEnum, options?: RawAxiosRequestConfig): AxiosPromise<RedemptionResponse>;
    /**
     * Get the details of a redemption.
     * @summary Get redemption
     * @param {number} id Redemption ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getRedemptionDetails(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Redemption>;
    /**
     * Redeem zar
     * @summary Redeem zar
     * @param {RedemptionRequest} redemptionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    redeemZar(redemptionRequest: RedemptionRequest, options?: RawAxiosRequestConfig): AxiosPromise<Redemption>;
    /**
     * Update the status of a redemption.
     * @summary Update redemption
     * @param {string} id Redemption ID
     * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    updateRedemptionStatus(id: string, adminRedemptionUpdateRequest: AdminRedemptionUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<Redemption>;
};
/**
 * RedemptionsApi - interface
 * @export
 * @interface RedemptionsApi
 */
export interface RedemptionsApiInterface {
    /**
     * Get a list of all redemptions.
     * @summary Get all redemptions
     * @param {GetAllRedemptionsStateEnum} [state] Cursor for pagination
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApiInterface
     */
    getAllRedemptions(state?: GetAllRedemptionsStateEnum, options?: RawAxiosRequestConfig): AxiosPromise<RedemptionResponse>;
    /**
     * Get the details of a redemption.
     * @summary Get redemption
     * @param {number} id Redemption ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApiInterface
     */
    getRedemptionDetails(id: number, options?: RawAxiosRequestConfig): AxiosPromise<Redemption>;
    /**
     * Redeem zar
     * @summary Redeem zar
     * @param {RedemptionRequest} redemptionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApiInterface
     */
    redeemZar(redemptionRequest: RedemptionRequest, options?: RawAxiosRequestConfig): AxiosPromise<Redemption>;
    /**
     * Update the status of a redemption.
     * @summary Update redemption
     * @param {string} id Redemption ID
     * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApiInterface
     */
    updateRedemptionStatus(id: string, adminRedemptionUpdateRequest: AdminRedemptionUpdateRequest, options?: RawAxiosRequestConfig): AxiosPromise<Redemption>;
}
/**
 * RedemptionsApi - object-oriented interface
 * @export
 * @class RedemptionsApi
 * @extends {BaseAPI}
 */
export declare class RedemptionsApi extends BaseAPI implements RedemptionsApiInterface {
    /**
     * Get a list of all redemptions.
     * @summary Get all redemptions
     * @param {GetAllRedemptionsStateEnum} [state] Cursor for pagination
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApi
     */
    getAllRedemptions(state?: GetAllRedemptionsStateEnum, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<RedemptionResponse, any>>;
    /**
     * Get the details of a redemption.
     * @summary Get redemption
     * @param {number} id Redemption ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApi
     */
    getRedemptionDetails(id: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Redemption, any>>;
    /**
     * Redeem zar
     * @summary Redeem zar
     * @param {RedemptionRequest} redemptionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApi
     */
    redeemZar(redemptionRequest: RedemptionRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Redemption, any>>;
    /**
     * Update the status of a redemption.
     * @summary Update redemption
     * @param {string} id Redemption ID
     * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApi
     */
    updateRedemptionStatus(id: string, adminRedemptionUpdateRequest: AdminRedemptionUpdateRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<Redemption, any>>;
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
//# sourceMappingURL=redemptions-api.d.ts.map