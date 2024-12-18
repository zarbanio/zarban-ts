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
import type { LendingpoolBorrow } from './LendingpoolBorrow';
/**
 *
 * @export
 * @interface UserBorrowsResponse
 */
export interface UserBorrowsResponse {
    /**
     *
     * @type {Array<LendingpoolBorrow>}
     * @memberof UserBorrowsResponse
     */
    data: Array<LendingpoolBorrow>;
}
/**
 * Check if a given object implements the UserBorrowsResponse interface.
 */
export declare function instanceOfUserBorrowsResponse(value: object): value is UserBorrowsResponse;
export declare function UserBorrowsResponseFromJSON(json: any): UserBorrowsResponse;
export declare function UserBorrowsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserBorrowsResponse;
export declare function UserBorrowsResponseToJSON(json: any): UserBorrowsResponse;
export declare function UserBorrowsResponseToJSONTyped(value?: UserBorrowsResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=UserBorrowsResponse.d.ts.map