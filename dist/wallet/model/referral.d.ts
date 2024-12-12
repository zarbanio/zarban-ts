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
import type { Timestamp } from './timestamp';
/**
 *
 * @export
 * @interface Referral
 */
export interface Referral {
    /**
     *
     * @type {number}
     * @memberof Referral
     */
    'id': number;
    /**
     *
     * @type {number}
     * @memberof Referral
     */
    'referrerId': number;
    /**
     *
     * @type {string}
     * @memberof Referral
     */
    'name'?: string | null;
    /**
     *
     * @type {number}
     * @memberof Referral
     */
    'usageLimit': number;
    /**
     *
     * @type {number}
     * @memberof Referral
     */
    'usageCount': number;
    /**
     *
     * @type {Timestamp}
     * @memberof Referral
     */
    'createdAt': Timestamp;
    /**
     *
     * @type {string}
     * @memberof Referral
     */
    'link'?: string | null;
    /**
     *
     * @type {string}
     * @memberof Referral
     */
    'shareUrl'?: string;
}
//# sourceMappingURL=referral.d.ts.map