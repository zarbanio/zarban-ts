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



/**
 * 
 * @export
 * @interface AccountStablecoinSystemSummary
 */
export interface AccountStablecoinSystemSummary {
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof AccountStablecoinSystemSummary
     */
    'totalDebt': { [key: string]: string | undefined; };
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof AccountStablecoinSystemSummary
     */
    'totalDeposits': { [key: string]: string | undefined; };
    /**
     * Net annual percentage yield in stablecoin system
     * @type {string}
     * @memberof AccountStablecoinSystemSummary
     */
    'netApy': string;
}

