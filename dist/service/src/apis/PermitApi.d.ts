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
import type { PermitSingle } from '../models/index';
export interface GetSingleTokenPermitRequest {
    token: string;
    user: string;
}
/**
 * PermitApi - interface
 *
 * @export
 * @interface PermitApiInterface
 */
export interface PermitApiInterface {
    /**
     * Get permit for single token
     * @summary Get permit for single token
     * @param {string} token Ethereum address of the token
     * @param {string} user Ethereum address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermitApiInterface
     */
    getSingleTokenPermitRaw(requestParameters: GetSingleTokenPermitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermitSingle>>;
    /**
     * Get permit for single token
     * Get permit for single token
     */
    getSingleTokenPermit(requestParameters: GetSingleTokenPermitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermitSingle>;
}
/**
 *
 */
export declare class PermitApi extends runtime.BaseAPI implements PermitApiInterface {
    /**
     * Get permit for single token
     * Get permit for single token
     */
    getSingleTokenPermitRaw(requestParameters: GetSingleTokenPermitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PermitSingle>>;
    /**
     * Get permit for single token
     * Get permit for single token
     */
    getSingleTokenPermit(requestParameters: GetSingleTokenPermitRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PermitSingle>;
}
//# sourceMappingURL=PermitApi.d.ts.map