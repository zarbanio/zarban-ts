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
import type { Referral } from './Referral';
/**
 *
 * @export
 * @interface ReferralResponse
 */
export interface ReferralResponse {
    /**
     *
     * @type {Array<Referral>}
     * @memberof ReferralResponse
     */
    data: Array<Referral>;
}
/**
 * Check if a given object implements the ReferralResponse interface.
 */
export declare function instanceOfReferralResponse(value: object): value is ReferralResponse;
export declare function ReferralResponseFromJSON(json: any): ReferralResponse;
export declare function ReferralResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferralResponse;
export declare function ReferralResponseToJSON(json: any): ReferralResponse;
export declare function ReferralResponseToJSONTyped(value?: ReferralResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ReferralResponse.d.ts.map