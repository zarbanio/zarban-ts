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
 * @interface KycConfirmRequest
 */
export interface KycConfirmRequest {
    /**
     * KYC request ID
     * @type {string}
     * @memberof KycConfirmRequest
     */
    id: string;
}
/**
 * Check if a given object implements the KycConfirmRequest interface.
 */
export declare function instanceOfKycConfirmRequest(value: object): value is KycConfirmRequest;
export declare function KycConfirmRequestFromJSON(json: any): KycConfirmRequest;
export declare function KycConfirmRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycConfirmRequest;
export declare function KycConfirmRequestToJSON(json: any): KycConfirmRequest;
export declare function KycConfirmRequestToJSONTyped(value?: KycConfirmRequest | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=KycConfirmRequest.d.ts.map