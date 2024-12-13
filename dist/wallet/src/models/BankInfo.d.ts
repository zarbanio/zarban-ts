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
 * @interface BankInfo
 */
export interface BankInfo {
    /**
     * Bank name
     * @type {string}
     * @memberof BankInfo
     */
    bankName: string;
    /**
     * Card number
     * @type {string}
     * @memberof BankInfo
     */
    cardNumber: string;
    /**
     * IBAN
     * @type {string}
     * @memberof BankInfo
     */
    iban: string;
}
/**
 * Check if a given object implements the BankInfo interface.
 */
export declare function instanceOfBankInfo(value: object): value is BankInfo;
export declare function BankInfoFromJSON(json: any): BankInfo;
export declare function BankInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankInfo;
export declare function BankInfoToJSON(json: any): BankInfo;
export declare function BankInfoToJSONTyped(value?: BankInfo | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=BankInfo.d.ts.map