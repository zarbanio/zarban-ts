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
import type { BankInfo } from './bank-info';
import type { Referral } from './referral';
import type { User } from './user';
/**
 *
 * @export
 * @interface ProfileResponse
 */
export interface ProfileResponse {
    /**
     *
     * @type {Referral}
     * @memberof ProfileResponse
     */
    'referral': Referral;
    /**
     *
     * @type {number}
     * @memberof ProfileResponse
     */
    'points': number;
    /**
     *
     * @type {User}
     * @memberof ProfileResponse
     */
    'user': User;
    /**
     *
     * @type {Array<BankInfo>}
     * @memberof ProfileResponse
     */
    'bankInfo': Array<BankInfo>;
}
//# sourceMappingURL=profile-response.d.ts.map