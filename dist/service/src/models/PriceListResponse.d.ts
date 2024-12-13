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
import type { Price } from './Price';
/**
 *
 * @export
 * @interface PriceListResponse
 */
export interface PriceListResponse {
    /**
     *
     * @type {Array<Price>}
     * @memberof PriceListResponse
     */
    data: Array<Price>;
}
/**
 * Check if a given object implements the PriceListResponse interface.
 */
export declare function instanceOfPriceListResponse(value: object): value is PriceListResponse;
export declare function PriceListResponseFromJSON(json: any): PriceListResponse;
export declare function PriceListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): PriceListResponse;
export declare function PriceListResponseToJSON(json: any): PriceListResponse;
export declare function PriceListResponseToJSONTyped(value?: PriceListResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=PriceListResponse.d.ts.map