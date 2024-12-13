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
 * @interface ExtendedEvent
 */
export interface ExtendedEvent {
    /**
     *
     * @type {EventDomain}
     * @memberof ExtendedEvent
     */
    domain: EventDomain;
    /**
     * Identifier for the event.
     * @type {number}
     * @memberof ExtendedEvent
     */
    id: number;
    /**
     *
     * @type {EventName}
     * @memberof ExtendedEvent
     */
    name: EventName;
    /**
     *
     * @type {Log}
     * @memberof ExtendedEvent
     */
    raw: Log;
    /**
     *
     * @type {EventType}
     * @memberof ExtendedEvent
     */
    type: EventType;
    /**
     * The payload of the event. The payload is a JSON-marshalled
     * @type {{ [key: string]: any | undefined; }}
     * @memberof ExtendedEvent
     */
    payload: {
        [key: string]: any | undefined;
    };
}
/**
 * Check if a given object implements the ExtendedEvent interface.
 */
export declare function instanceOfExtendedEvent(value: object): value is ExtendedEvent;
export declare function ExtendedEventFromJSON(json: any): ExtendedEvent;
export declare function ExtendedEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExtendedEvent;
export declare function ExtendedEventToJSON(json: any): ExtendedEvent;
export declare function ExtendedEventToJSONTyped(value?: ExtendedEvent | null, ignoreDiscriminator?: boolean): any;
//# sourceMappingURL=ExtendedEvent.d.ts.map