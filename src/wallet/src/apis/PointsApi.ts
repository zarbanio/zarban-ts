/* tslint:disable */
/* eslint-disable */
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


import * as runtime from '../runtime';
import type {
  FriendPointsResponse,
} from '../models/index';
import {
    FriendPointsResponseFromJSON,
    FriendPointsResponseToJSON,
} from '../models/index';

/**
 * PointsApi - interface
 * 
 * @export
 * @interface PointsApiInterface
 */
export interface PointsApiInterface {
    /**
     * Get friends points.
     * @summary Get friends points.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PointsApiInterface
     */
    getFriendsPointsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FriendPointsResponse>>;

    /**
     * Get friends points.
     * Get friends points.
     */
    getFriendsPoints(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FriendPointsResponse>;

}

/**
 * 
 */
export class PointsApi extends runtime.BaseAPI implements PointsApiInterface {

    /**
     * Get friends points.
     * Get friends points.
     */
    async getFriendsPointsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<FriendPointsResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/points/frineds`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => FriendPointsResponseFromJSON(jsonValue));
    }

    /**
     * Get friends points.
     * Get friends points.
     */
    async getFriendsPoints(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<FriendPointsResponse> {
        const response = await this.getFriendsPointsRaw(initOverrides);
        return await response.value();
    }

}
