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
import type { Transaction } from './Transaction';
/**
 *
 * @export
 * @interface TransactionResponse
 */
export interface TransactionResponse {
    /**
     *
     * @type {Array<Transaction>}
     * @memberof TransactionResponse
     */
    data: Array<Transaction>;
}
/**
 * Check if a given object implements the TransactionResponse interface.
 */
export declare function instanceOfTransactionResponse(value: object): value is TransactionResponse;
export declare function TransactionResponseFromJSON(json: any): TransactionResponse;
export declare function TransactionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionResponse;
export declare function TransactionResponseToJSON(json: any): TransactionResponse;
export declare function TransactionResponseToJSONTyped(value?: TransactionResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=TransactionResponse.d.ts.map