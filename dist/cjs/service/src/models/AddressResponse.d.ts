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
import type { Address } from './Address';
/**
 *
 * @export
 * @interface AddressResponse
 */
export interface AddressResponse {
    /**
     *
     * @type {Array<Address>}
     * @memberof AddressResponse
     */
    data: Array<Address>;
}
/**
 * Check if a given object implements the AddressResponse interface.
 */
export declare function instanceOfAddressResponse(value: object): value is AddressResponse;
export declare function AddressResponseFromJSON(json: any): AddressResponse;
export declare function AddressResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressResponse;
export declare function AddressResponseToJSON(json: any): AddressResponse;
export declare function AddressResponseToJSONTyped(value?: AddressResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=AddressResponse.d.ts.map