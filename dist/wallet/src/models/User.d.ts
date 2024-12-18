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
import type { TelegramProfile } from './TelegramProfile';
/**
 *
 * @export
 * @interface User
 */
export interface User {
    /**
     * User's first name
     * @type {string}
     * @memberof User
     */
    firstName?: string;
    /**
     * User's last name
     * @type {string}
     * @memberof User
     */
    lastName?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof User
     */
    phone?: string;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    isEmailVerified?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    isPhoneVerified?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    isKycVerified?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    isChild?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    isSuperUser?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof User
     */
    isAdmin?: boolean;
    /**
     *
     * @type {TelegramProfile}
     * @memberof User
     */
    telegram?: TelegramProfile;
}
/**
 * Check if a given object implements the User interface.
 */
export declare function instanceOfUser(value: object): value is User;
export declare function UserFromJSON(json: any): User;
export declare function UserFromJSONTyped(json: any, ignoreDiscriminator: boolean): User;
export declare function UserToJSON(json: any): User;
export declare function UserToJSONTyped(value?: User | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=User.d.ts.map