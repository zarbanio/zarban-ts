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
import type { Task } from './Task';
/**
 *
 * @export
 * @interface TaskResponse
 */
export interface TaskResponse {
    /**
     *
     * @type {Array<Task>}
     * @memberof TaskResponse
     */
    data: Array<Task>;
}
/**
 * Check if a given object implements the TaskResponse interface.
 */
export declare function instanceOfTaskResponse(value: object): value is TaskResponse;
export declare function TaskResponseFromJSON(json: any): TaskResponse;
export declare function TaskResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskResponse;
export declare function TaskResponseToJSON(json: any): TaskResponse;
export declare function TaskResponseToJSONTyped(value?: TaskResponse | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=TaskResponse.d.ts.map