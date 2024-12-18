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
import type { EventDomain } from './EventDomain';
import type { EventType } from './EventType';
import type { Log } from './Log';
import type { EventName } from './EventName';
/**
 *
 * @export
 * @interface BasicEvent
 */
export interface BasicEvent {
    /**
     * Identifier for the event.
     * @type {number}
     * @memberof BasicEvent
     */
    id: number;
    /**
     *
     * @type {EventName}
     * @memberof BasicEvent
     */
    name: EventName;
    /**
     *
     * @type {EventType}
     * @memberof BasicEvent
     */
    type: EventType;
    /**
     *
     * @type {EventDomain}
     * @memberof BasicEvent
     */
    domain: EventDomain;
    /**
     *
     * @type {Log}
     * @memberof BasicEvent
     */
    raw: Log;
}
/**
 * Check if a given object implements the BasicEvent interface.
 */
export declare function instanceOfBasicEvent(value: object): value is BasicEvent;
export declare function BasicEventFromJSON(json: any): BasicEvent;
export declare function BasicEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): BasicEvent;
export declare function BasicEventToJSON(json: any): BasicEvent;
export declare function BasicEventToJSONTyped(value?: BasicEvent | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=BasicEvent.d.ts.map