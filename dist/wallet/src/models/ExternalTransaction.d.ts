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
import type { TransactionType } from './TransactionType';
import type { Symbol } from './Symbol';
import type { Currency } from './Currency';
import type { Network } from './Network';
import type { TransactionStatus } from './TransactionStatus';
import type { Timestamp } from './Timestamp';
/**
 *
 * @export
 * @interface ExternalTransaction
 */
export interface ExternalTransaction {
    /**
     * Unique identifier of the transaction
     * @type {number}
     * @memberof ExternalTransaction
     */
    id: number;
    /**
     *
     * @type {Timestamp}
     * @memberof ExternalTransaction
     */
    time: Timestamp;
    /**
     *
     * @type {TransactionType}
     * @memberof ExternalTransaction
     */
    type: TransactionType;
    /**
     * The hash of the transaction
     * @type {string}
     * @memberof ExternalTransaction
     */
    hash: string;
    /**
     * The address from which the transaction originated
     * @type {string}
     * @memberof ExternalTransaction
     */
    from: string;
    /**
     * The address to which the transaction is sent
     * @type {string}
     * @memberof ExternalTransaction
     */
    to: string;
    /**
     * A comment associated with the transaction
     * @type {string}
     * @memberof ExternalTransaction
     */
    comment: string | null;
    /**
     *
     * @type {Currency}
     * @memberof ExternalTransaction
     */
    amount: Currency;
    /**
     *
     * @type {Symbol}
     * @memberof ExternalTransaction
     */
    symbol: Symbol;
    /**
     *
     * @type {Network}
     * @memberof ExternalTransaction
     */
    network: Network;
    /**
     *
     * @type {TransactionStatus}
     * @memberof ExternalTransaction
     */
    status: TransactionStatus;
}
/**
 * Check if a given object implements the ExternalTransaction interface.
 */
export declare function instanceOfExternalTransaction(value: object): value is ExternalTransaction;
export declare function ExternalTransactionFromJSON(json: any): ExternalTransaction;
export declare function ExternalTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalTransaction;
export declare function ExternalTransactionToJSON(json: any): ExternalTransaction;
export declare function ExternalTransactionToJSONTyped(value?: ExternalTransaction | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ExternalTransaction.d.ts.map