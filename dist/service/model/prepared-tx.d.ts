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
import type { MethodParameters } from './method-parameters';
/**
 *
 * @export
 * @interface PreparedTx
 */
export interface PreparedTx {
    /**
     *
     * @type {string}
     * @memberof PreparedTx
     */
    'type': string;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof PreparedTx
     */
    'label': {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {number}
     * @memberof PreparedTx
     */
    'gasUseEstimate': number;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof PreparedTx
     */
    'gasFeeEstimate': {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {MethodParameters}
     * @memberof PreparedTx
     */
    'methodParameters': MethodParameters;
}
