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


// May contain unused imports in some cases
// @ts-ignore
import type { Network } from './network';

/**
 * 
 * @export
 * @interface DepositResponse
 */
export interface DepositResponse {
    /**
     * Deposit address
     * @type {string}
     * @memberof DepositResponse
     */
    'address': string;
    /**
     * 
     * @type {Network}
     * @memberof DepositResponse
     */
    'network': Network;
    /**
     * Coin symbol
     * @type {string}
     * @memberof DepositResponse
     */
    'symbol': string;
}
