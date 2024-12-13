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
import type { Symbol } from './Symbol';
import type { Network } from './Network';
import type { Timestamp } from './Timestamp';
/**
 *
 * @export
 * @interface WithdrawRequest
 */
export interface WithdrawRequest {
    /**
     *
     * @type {number}
     * @memberof WithdrawRequest
     */
    id: number;
    /**
     *
     * @type {Timestamp}
     * @memberof WithdrawRequest
     */
    timeCreated: Timestamp;
    /**
     *
     * @type {Network}
     * @memberof WithdrawRequest
     */
    network: Network;
    /**
     *
     * @type {Symbol}
     * @memberof WithdrawRequest
     */
    symbol: Symbol;
    /**
     *
     * @type {string}
     * @memberof WithdrawRequest
     */
    amount: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawRequest
     */
    to: string;
    /**
     *
     * @type {string}
     * @memberof WithdrawRequest
     */
    comment?: string | null;
    /**
     *
     * @type {string}
     * @memberof WithdrawRequest
     */
    status: WithdrawRequestStatusEnum;
    /**
     *
     * @type {string}
     * @memberof WithdrawRequest
     */
    blockExplorerUrl?: string | null;
}
/**
 * @export
 */
export declare const WithdrawRequestStatusEnum: {
    readonly PENDING: "Pending";
    readonly CANCELED: "Canceled";
    readonly APPROVED: "Approved";
    readonly REJECTED: "Rejected";
    readonly PROCCESSING: "Proccessing";
    readonly FAILED: "Failed";
    readonly SENT: "Sent";
    readonly ACCOUNT_DEBITED: "AccountDebited";
    readonly ACCOUNT_BALANCE_UNLOCKED: "AccountBalanceUnlocked";
    readonly COMPLETED: "Completed";
};
export type WithdrawRequestStatusEnum = typeof WithdrawRequestStatusEnum[keyof typeof WithdrawRequestStatusEnum];
/**
 * Check if a given object implements the WithdrawRequest interface.
 */
export declare function instanceOfWithdrawRequest(value: object): value is WithdrawRequest;
export declare function WithdrawRequestFromJSON(json: any): WithdrawRequest;
export declare function WithdrawRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WithdrawRequest;
export declare function WithdrawRequestToJSON(json: any): WithdrawRequest;
export declare function WithdrawRequestToJSONTyped(value?: WithdrawRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=WithdrawRequest.d.ts.map