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
import * as runtime from '../runtime';
import type { Vault, VaultEventsResponse, VaultsResponse } from '../models/index';
export interface GetVaultByIdRequest {
    id: number;
}
export interface GetVaultEventsByIdRequest {
    id: number;
    type?: GetVaultEventsByIdTypeEnum;
}
export interface GetVaultsByOwnerRequest {
    owner?: string;
}
/**
 * VaultsApi - interface
 *
 * @export
 * @interface VaultsApiInterface
 */
export interface VaultsApiInterface {
    /**
     *
     * @summary Get a vault by ID
     * @param {number} id Vault ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VaultsApiInterface
     */
    getVaultByIdRaw(requestParameters: GetVaultByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Vault>>;
    /**
     * Get a vault by ID
     */
    getVaultById(requestParameters: GetVaultByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Vault>;
    /**
     *
     * @summary Get vault events by ID
     * @param {number} id Vault ID
     * @param {'repay' | 'deposit' | 'withdraw' | 'mint'} [type] Event type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VaultsApiInterface
     */
    getVaultEventsByIdRaw(requestParameters: GetVaultEventsByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VaultEventsResponse>>;
    /**
     * Get vault events by ID
     */
    getVaultEventsById(requestParameters: GetVaultEventsByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VaultEventsResponse>;
    /**
     *
     * @summary Get vaults by owner query
     * @param {string} [owner] Ethereum address of the owner
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VaultsApiInterface
     */
    getVaultsByOwnerRaw(requestParameters: GetVaultsByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VaultsResponse>>;
    /**
     * Get vaults by owner query
     */
    getVaultsByOwner(requestParameters: GetVaultsByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VaultsResponse>;
}
/**
 *
 */
export declare class VaultsApi extends runtime.BaseAPI implements VaultsApiInterface {
    /**
     * Get a vault by ID
     */
    getVaultByIdRaw(requestParameters: GetVaultByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Vault>>;
    /**
     * Get a vault by ID
     */
    getVaultById(requestParameters: GetVaultByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Vault>;
    /**
     * Get vault events by ID
     */
    getVaultEventsByIdRaw(requestParameters: GetVaultEventsByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VaultEventsResponse>>;
    /**
     * Get vault events by ID
     */
    getVaultEventsById(requestParameters: GetVaultEventsByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VaultEventsResponse>;
    /**
     * Get vaults by owner query
     */
    getVaultsByOwnerRaw(requestParameters: GetVaultsByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<VaultsResponse>>;
    /**
     * Get vaults by owner query
     */
    getVaultsByOwner(requestParameters?: GetVaultsByOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<VaultsResponse>;
}
/**
 * @export
 */
export declare const GetVaultEventsByIdTypeEnum: {
    readonly REPAY: "repay";
    readonly DEPOSIT: "deposit";
    readonly WITHDRAW: "withdraw";
    readonly MINT: "mint";
};
export type GetVaultEventsByIdTypeEnum = typeof GetVaultEventsByIdTypeEnum[keyof typeof GetVaultEventsByIdTypeEnum];
//# sourceMappingURL=VaultsApi.d.ts.map