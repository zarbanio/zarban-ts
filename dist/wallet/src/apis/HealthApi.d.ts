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
import type { HealthStatus } from '../models/index';
/**
 * HealthApi - interface
 *
 * @export
 * @interface HealthApiInterface
 */
export interface HealthApiInterface {
    /**
     * Check the health of the API.
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiInterface
     */
    checkApiHealthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthStatus>>;
    /**
     * Check the health of the API.
     * Health check
     */
    checkApiHealth(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthStatus>;
}
/**
 *
 */
export declare class HealthApi extends runtime.BaseAPI implements HealthApiInterface {
    /**
     * Check the health of the API.
     * Health check
     */
    checkApiHealthRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<HealthStatus>>;
    /**
     * Check the health of the API.
     * Health check
     */
    checkApiHealth(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<HealthStatus>;
}
//# sourceMappingURL=HealthApi.d.ts.map