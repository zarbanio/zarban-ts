/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
import type { TransactionType } from './TransactionType';
import {
    TransactionTypeFromJSON,
    TransactionTypeFromJSONTyped,
    TransactionTypeToJSON,
    TransactionTypeToJSONTyped,
} from './TransactionType';
import type { ExternalTransaction } from './ExternalTransaction';
import {
    ExternalTransactionFromJSON,
    ExternalTransactionFromJSONTyped,
    ExternalTransactionToJSON,
    ExternalTransactionToJSONTyped,
} from './ExternalTransaction';
import type { Symbol } from './Symbol';
import {
    SymbolFromJSON,
    SymbolFromJSONTyped,
    SymbolToJSON,
    SymbolToJSONTyped,
} from './Symbol';
import type { Currency } from './Currency';
import {
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
    CurrencyToJSONTyped,
} from './Currency';
import type { Timestamp } from './Timestamp';
import {
    TimestampFromJSON,
    TimestampFromJSONTyped,
    TimestampToJSON,
    TimestampToJSONTyped,
} from './Timestamp';

/**
 * 
 * @export
 * @interface Transaction
 */
export interface Transaction {
    /**
     * Unique identifier of the transaction
     * @type {number}
     * @memberof Transaction
     */
    id: number;
    /**
     * 
     * @type {Timestamp}
     * @memberof Transaction
     */
    time: Timestamp;
    /**
     * 
     * @type {TransactionType}
     * @memberof Transaction
     */
    type: TransactionType;
    /**
     * The ID of the user from whom the transaction originated
     * @type {string}
     * @memberof Transaction
     */
    from: string;
    /**
     * The ID of the user to whom the transaction is directed
     * @type {string}
     * @memberof Transaction
     */
    to: string;
    /**
     * 
     * @type {Symbol}
     * @memberof Transaction
     */
    symbol: Symbol;
    /**
     * 
     * @type {Currency}
     * @memberof Transaction
     */
    amount: Currency;
    /**
     * Equal to "Inbound" if the transaction is directed to the user, and "Outbound" if the transaction is directed from the user.
     * @type {string}
     * @memberof Transaction
     */
    direction: TransactionDirectionEnum;
    /**
     * 
     * @type {ExternalTransaction}
     * @memberof Transaction
     */
    externalTransaction?: ExternalTransaction;
}


/**
 * @export
 */
export const TransactionDirectionEnum = {
    Inbound: 'Inbound',
    Outbound: 'Outbound'
} as const;
export type TransactionDirectionEnum = typeof TransactionDirectionEnum[keyof typeof TransactionDirectionEnum];


/**
 * Check if a given object implements the Transaction interface.
 */
export function instanceOfTransaction(value: object): value is Transaction {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('time' in value) || value['time'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('from' in value) || value['from'] === undefined) return false;
    if (!('to' in value) || value['to'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('direction' in value) || value['direction'] === undefined) return false;
    return true;
}

export function TransactionFromJSON(json: any): Transaction {
    return TransactionFromJSONTyped(json, false);
}

export function TransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Transaction {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'time': TimestampFromJSON(json['time']),
        'type': TransactionTypeFromJSON(json['type']),
        'from': json['from'],
        'to': json['to'],
        'symbol': SymbolFromJSON(json['symbol']),
        'amount': CurrencyFromJSON(json['amount']),
        'direction': json['direction'],
        'externalTransaction': json['externalTransaction'] == null ? undefined : ExternalTransactionFromJSON(json['externalTransaction']),
    };
}

export function TransactionToJSON(json: any): Transaction {
    return TransactionToJSONTyped(json, false);
}

export function TransactionToJSONTyped(value?: Transaction | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'time': TimestampToJSON(value['time']),
        'type': TransactionTypeToJSON(value['type']),
        'from': value['from'],
        'to': value['to'],
        'symbol': SymbolToJSON(value['symbol']),
        'amount': CurrencyToJSON(value['amount']),
        'direction': value['direction'],
        'externalTransaction': ExternalTransactionToJSON(value['externalTransaction']),
    };
}

