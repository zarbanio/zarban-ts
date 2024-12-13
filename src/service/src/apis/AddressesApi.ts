/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import type {
  AddressResponse,
} from '../models/index';
import {
    AddressResponseFromJSON,
    AddressResponseToJSON,
} from '../models/index';

export interface GetAllAddressesRequest {
    format?: string;
}

/**
 * AddressesApi - interface
 * 
 * @export
 * @interface AddressesApiInterface
 */
export interface AddressesApiInterface {
    /**
     * All addresses knows to Zarban.
     * @summary Get all addresses
     * @param {string} [format] The type of addresses to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApiInterface
     */
    getAllAddressesRaw(requestParameters: GetAllAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressResponse>>;

    /**
     * All addresses knows to Zarban.
     * Get all addresses
     */
    getAllAddresses(requestParameters: GetAllAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressResponse>;

}

/**
 * 
 */
export class AddressesApi extends runtime.BaseAPI implements AddressesApiInterface {

    /**
     * All addresses knows to Zarban.
     * Get all addresses
     */
    async getAllAddressesRaw(requestParameters: GetAllAddressesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AddressResponse>> {
        const queryParameters: any = {};

        if (requestParameters['format'] != null) {
            queryParameters['format'] = requestParameters['format'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/addresses`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AddressResponseFromJSON(jsonValue));
    }

    /**
     * All addresses knows to Zarban.
     * Get all addresses
     */
    async getAllAddresses(requestParameters: GetAllAddressesRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AddressResponse> {
        const response = await this.getAllAddressesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}