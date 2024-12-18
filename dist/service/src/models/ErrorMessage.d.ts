/**
 * Zarban API
 * API for Zarban services.
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
 * @interface ErrorMessage
 */
export interface ErrorMessage {
    /**
     * User-friendly error message
     * @type {string}
     * @memberof ErrorMessage
     */
    userMessage: string;
    /**
     *
     * @type {Array<string>}
     * @memberof ErrorMessage
     */
    solutions: Array<string>;
}
/**
 * Check if a given object implements the ErrorMessage interface.
 */
export declare function instanceOfErrorMessage(value: object): value is ErrorMessage;
export declare function ErrorMessageFromJSON(json: any): ErrorMessage;
export declare function ErrorMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ErrorMessage;
export declare function ErrorMessageToJSON(json: any): ErrorMessage;
export declare function ErrorMessageToJSONTyped(value?: ErrorMessage | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ErrorMessage.d.ts.map