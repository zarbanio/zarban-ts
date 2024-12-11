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
  UserBorrowsResponse,
} from '../models/index';
import {
    UserBorrowsResponseFromJSON,
    UserBorrowsResponseToJSON,
} from '../models/index';

export interface GetUserBorrowsRequest {
    user?: string;
    reserve?: string;
    cursor?: number;
    limit?: number;
}

/**
 * 
 */
export class BorrowsApi extends runtime.BaseAPI {

    /**
     * Get user borrows of lendingpool
     * Get user borrows of lendingpool
     */
    async getUserBorrowsRaw(requestParameters: GetUserBorrowsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserBorrowsResponse>> {
        const queryParameters: any = {};

        if (requestParameters['user'] != null) {
            queryParameters['user'] = requestParameters['user'];
        }

        if (requestParameters['reserve'] != null) {
            queryParameters['reserve'] = requestParameters['reserve'];
        }

        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/lendingpool/borrows`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserBorrowsResponseFromJSON(jsonValue));
    }

    /**
     * Get user borrows of lendingpool
     * Get user borrows of lendingpool
     */
    async getUserBorrows(requestParameters: GetUserBorrowsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserBorrowsResponse> {
        const response = await this.getUserBorrowsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
