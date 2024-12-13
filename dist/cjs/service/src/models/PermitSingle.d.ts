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
import type { TypedData } from './TypedData';
/**
 *
 * @export
 * @interface PermitSingle
 */
export interface PermitSingle {
    /**
     *
     * @type {TypedData}
     * @memberof PermitSingle
     */
    typedData: TypedData;
    /**
     * The hash of the permit that needs to be signed
     * @type {string}
     * @memberof PermitSingle
     */
    hash: string;
}
/**
 * Check if a given object implements the PermitSingle interface.
 */
export declare function instanceOfPermitSingle(value: object): value is PermitSingle;
export declare function PermitSingleFromJSON(json: any): PermitSingle;
export declare function PermitSingleFromJSONTyped(json: any, ignoreDiscriminator: boolean): PermitSingle;
export declare function PermitSingleToJSON(json: any): PermitSingle;
export declare function PermitSingleToJSONTyped(value?: PermitSingle | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PermitSingle.d.ts.map