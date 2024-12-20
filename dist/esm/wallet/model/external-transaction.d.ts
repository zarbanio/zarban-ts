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
import type { Currency } from './currency';
import type { Network } from './network';
import type { Symbol } from './symbol';
import type { Timestamp } from './timestamp';
import type { TransactionStatus } from './transaction-status';
import type { TransactionType } from './transaction-type';
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
    'Id': number;
    /**
     *
     * @type {Timestamp}
     * @memberof ExternalTransaction
     */
    'Time': Timestamp;
    /**
     *
     * @type {TransactionType}
     * @memberof ExternalTransaction
     */
    'Type': TransactionType;
    /**
     * The hash of the transaction
     * @type {string}
     * @memberof ExternalTransaction
     */
    'Hash': string;
    /**
     * The address from which the transaction originated
     * @type {string}
     * @memberof ExternalTransaction
     */
    'From': string;
    /**
     * The address to which the transaction is sent
     * @type {string}
     * @memberof ExternalTransaction
     */
    'To': string;
    /**
     * A comment associated with the transaction
     * @type {string}
     * @memberof ExternalTransaction
     */
    'Comment': string | null;
    /**
     *
     * @type {Currency}
     * @memberof ExternalTransaction
     */
    'Amount': Currency;
    /**
     *
     * @type {Symbol}
     * @memberof ExternalTransaction
     */
    'Symbol': Symbol;
    /**
     *
     * @type {Network}
     * @memberof ExternalTransaction
     */
    'Network': Network;
    /**
     *
     * @type {TransactionStatus}
     * @memberof ExternalTransaction
     */
    'Status': TransactionStatus;
}
//# sourceMappingURL=external-transaction.d.ts.map