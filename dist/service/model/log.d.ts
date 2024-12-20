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
import type { Timestamp } from './timestamp';
/**
 *
 * @export
 * @interface Log
 */
export interface Log {
    /**
     * The name of the log
     * @type {string}
     * @memberof Log
     */
    'name': string;
    /**
     * The contract address
     * @type {string}
     * @memberof Log
     */
    'contract': string;
    /**
     *
     * @type {Timestamp}
     * @memberof Log
     */
    'timestamp': Timestamp;
    /**
     * The Ethereum address
     * @type {string}
     * @memberof Log
     */
    'address': string;
    /**
     * The block number
     * @type {number}
     * @memberof Log
     */
    'blockNumber': number;
    /**
     * The transaction hash
     * @type {string}
     * @memberof Log
     */
    'txHash': string;
    /**
     * The block hash
     * @type {string}
     * @memberof Log
     */
    'blockHash': string;
    /**
     * The index
     * @type {number}
     * @memberof Log
     */
    'index': number;
    /**
     *
     * @type {Array<string>}
     * @memberof Log
     */
    'topics': Array<string>;
    /**
     * The data of the log
     * @type {string}
     * @memberof Log
     */
    'data': string;
    /**
     * The decoded log, if available
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Log
     */
    'decoded'?: {
        [key: string]: string | undefined;
    };
}
//# sourceMappingURL=log.d.ts.map