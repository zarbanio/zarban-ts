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


/**
 * 
 * @export
 */
export const TransactionType = {
    CREDIT: 'Credit',
    DEBIT: 'Debit',
    TRANSFER: 'Transfer',
    DEPOSIT: 'Deposit',
    WITHDRAW: 'Withdraw'
} as const;
export type TransactionType = typeof TransactionType[keyof typeof TransactionType];


export function instanceOfTransactionType(value: any): boolean {
    for (const key in TransactionType) {
        if (Object.prototype.hasOwnProperty.call(TransactionType, key)) {
            if (TransactionType[key as keyof typeof TransactionType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionTypeFromJSON(json: any): TransactionType {
    return TransactionTypeFromJSONTyped(json, false);
}

export function TransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionType {
    return json as TransactionType;
}

export function TransactionTypeToJSON(value?: TransactionType | null): any {
    return value as any;
}

export function TransactionTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionType {
    return value as TransactionType;
}
