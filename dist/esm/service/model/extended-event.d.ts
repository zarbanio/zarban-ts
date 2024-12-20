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
import type { EventDomain } from './event-domain';
import type { EventName } from './event-name';
import type { EventType } from './event-type';
import type { Log } from './log';
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
    'domain': EventDomain;
    /**
     * Identifier for the event.
     * @type {number}
     * @memberof ExtendedEvent
     */
    'id': number;
    /**
     *
     * @type {EventName}
     * @memberof ExtendedEvent
     */
    'name': EventName;
    /**
     *
     * @type {Log}
     * @memberof ExtendedEvent
     */
    'raw': Log;
    /**
     *
     * @type {EventType}
     * @memberof ExtendedEvent
     */
    'type': EventType;
    /**
     * The payload of the event. The payload is a JSON-marshalled
     * @type {{ [key: string]: any | undefined; }}
     * @memberof ExtendedEvent
     */
    'payload': {
        [key: string]: any | undefined;
    };
}
//# sourceMappingURL=extended-event.d.ts.map