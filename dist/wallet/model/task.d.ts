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
import type { Timestamp } from './timestamp';
/**
 *
 * @export
 * @interface Task
 */
export interface Task {
    /**
     * Task ID
     * @type {string}
     * @memberof Task
     */
    'id': string;
    /**
     * Task description
     * @type {string}
     * @memberof Task
     */
    'description': string;
    /**
     * Task reward
     * @type {number}
     * @memberof Task
     */
    'points': number;
    /**
     * Task status. Possible values \"Pending\", \"Completed\"
     * @type {string}
     * @memberof Task
     */
    'status': string;
    /**
     *
     * @type {Timestamp}
     * @memberof Task
     */
    'completedAt'?: Timestamp;
}
//# sourceMappingURL=task.d.ts.map