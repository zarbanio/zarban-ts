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
import type { LendingpoolDeposit } from './LendingpoolDeposit';
/**
 *
 * @export
 * @interface UserDepositsResponse
 */
export interface UserDepositsResponse {
    /**
     *
     * @type {Array<LendingpoolDeposit>}
     * @memberof UserDepositsResponse
     */
    data: Array<LendingpoolDeposit>;
}
/**
 * Check if a given object implements the UserDepositsResponse interface.
 */
export declare function instanceOfUserDepositsResponse(value: object): value is UserDepositsResponse;
export declare function UserDepositsResponseFromJSON(json: any): UserDepositsResponse;
export declare function UserDepositsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDepositsResponse;
export declare function UserDepositsResponseToJSON(json: any): UserDepositsResponse;
export declare function UserDepositsResponseToJSONTyped(value?: UserDepositsResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=UserDepositsResponse.d.ts.map