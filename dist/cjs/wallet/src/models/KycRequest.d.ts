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
 * @interface KycRequest
 */
export interface KycRequest {
    /**
     * National ID
     * @type {string}
     * @memberof KycRequest
     */
    nationalId: string;
    /**
     * Date of birth
     * @type {string}
     * @memberof KycRequest
     */
    dateOfBirth: string;
    /**
     * Card number
     * @type {string}
     * @memberof KycRequest
     */
    cardNumber: string;
}
/**
 * Check if a given object implements the KycRequest interface.
 */
export declare function instanceOfKycRequest(value: object): value is KycRequest;
export declare function KycRequestFromJSON(json: any): KycRequest;
export declare function KycRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycRequest;
export declare function KycRequestToJSON(json: any): KycRequest;
export declare function KycRequestToJSONTyped(value?: KycRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=KycRequest.d.ts.map