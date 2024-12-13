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
export const TransactionStatus = {
    SENT: 'Sent',
    SUCCESS: 'Success',
    FAILED: 'Failed'
} as const;
export type TransactionStatus = typeof TransactionStatus[keyof typeof TransactionStatus];


export function instanceOfTransactionStatus(value: any): boolean {
    for (const key in TransactionStatus) {
        if (Object.prototype.hasOwnProperty.call(TransactionStatus, key)) {
            if (TransactionStatus[key as keyof typeof TransactionStatus] === value) {
                return true;
            }
        }
    }
    return false;
}

export function TransactionStatusFromJSON(json: any): TransactionStatus {
    return TransactionStatusFromJSONTyped(json, false);
}

export function TransactionStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionStatus {
    return json as TransactionStatus;
}

export function TransactionStatusToJSON(value?: TransactionStatus | null): any {
    return value as any;
}

export function TransactionStatusToJSONTyped(value: any, ignoreDiscriminator: boolean): TransactionStatus {
    return value as TransactionStatus;
}

