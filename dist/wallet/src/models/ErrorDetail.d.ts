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
 * @interface ErrorDetail
 */
export interface ErrorDetail {
    /**
     * User-friendly error message
     * @type {string}
     * @memberof ErrorDetail
     */
    userMessage: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ErrorDetail
     */
    solutions: Array<string>;
}
/**
 * Check if a given object implements the ErrorDetail interface.
 */
export declare function instanceOfErrorDetail(value: object): value is ErrorDetail;
export declare function ErrorDetailFromJSON(json: any): ErrorDetail;
export declare function ErrorDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorDetail;
export declare function ErrorDetailToJSON(json: any): ErrorDetail;
export declare function ErrorDetailToJSONTyped(value?: ErrorDetail | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ErrorDetail.d.ts.map