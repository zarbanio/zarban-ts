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
/**
 *
 * @export
 * @interface WithdrawResponseBody
 */
export interface WithdrawResponseBody {
    /**
     * Withdrawal request ID
     * @type {number}
     * @memberof WithdrawResponseBody
     */
    id: number;
}
/**
 * Check if a given object implements the WithdrawResponseBody interface.
 */
export declare function instanceOfWithdrawResponseBody(value: object): value is WithdrawResponseBody;
export declare function WithdrawResponseBodyFromJSON(json: any): WithdrawResponseBody;
export declare function WithdrawResponseBodyFromJSONTyped(json: any, ignoreDiscriminator: boolean): WithdrawResponseBody;
export declare function WithdrawResponseBodyToJSON(json: any): WithdrawResponseBody;
export declare function WithdrawResponseBodyToJSONTyped(value?: WithdrawResponseBody | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=WithdrawResponseBody.d.ts.map