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
import type { UserDepositsResponse } from '../models/index';
export interface GetUserDepositsRequest {
    user?: string;
    reserve?: string;
    cursor?: number;
    limit?: number;
}
/**
 * DepositsApi - interface
 *
 * @export
 * @interface DepositsApiInterface
 */
export interface DepositsApiInterface {
    /**
     * Get user deposits of Lendingpool
     * @summary Get user deposits of Lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DepositsApiInterface
     */
    getUserDepositsRaw(requestParameters: GetUserDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDepositsResponse>>;
    /**
     * Get user deposits of Lendingpool
     * Get user deposits of Lendingpool
     */
    getUserDeposits(requestParameters: GetUserDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDepositsResponse>;
}
/**
 *
 */
export declare class DepositsApi extends runtime.BaseAPI implements DepositsApiInterface {
    /**
     * Get user deposits of Lendingpool
     * Get user deposits of Lendingpool
     */
    getUserDepositsRaw(requestParameters: GetUserDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserDepositsResponse>>;
    /**
     * Get user deposits of Lendingpool
     * Get user deposits of Lendingpool
     */
    getUserDeposits(requestParameters?: GetUserDepositsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserDepositsResponse>;
}
//# sourceMappingURL=DepositsApi.d.ts.map