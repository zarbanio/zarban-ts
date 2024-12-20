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
import type { OrderInfo } from './order-info';
import type { OrderType } from './order-type';
import type { RouteItem } from './route-item';
import type { Timestamp } from './timestamp';
import type { TradeType } from './trade-type';
import type { TypedData } from './typed-data';
/**
 *
 * @export
 * @interface QuoteResponse
 */
export interface QuoteResponse {
    /**
     *
     * @type {OrderType}
     * @memberof QuoteResponse
     */
    'type': OrderType;
    /**
     *
     * @type {TradeType}
     * @memberof QuoteResponse
     */
    'tradeType': TradeType;
    /**
     *
     * @type {Timestamp}
     * @memberof QuoteResponse
     */
    'time': Timestamp;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof QuoteResponse
     */
    'amount': {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof QuoteResponse
     */
    'quote': {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {string}
     * @memberof QuoteResponse
     */
    'quoteId': string;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof QuoteResponse
     */
    'gasPrice': {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {number}
     * @memberof QuoteResponse
     */
    'gasUseEstimate': number;
    /**
     *
     * @type {{ [key: string]: string | undefined; }}
     * @memberof QuoteResponse
     */
    'gasFeeEstimate': {
        [key: string]: string | undefined;
    };
    /**
     *
     * @type {string}
     * @memberof QuoteResponse
     */
    'routeString': string;
    /**
     *
     * @type {MethodParameters}
     * @memberof QuoteResponse
     */
    'methodParameters'?: MethodParameters;
    /**
     *
     * @type {Array<RouteItem>}
     * @memberof QuoteResponse
     */
    'route': Array<RouteItem>;
    /**
     *
     * @type {OrderInfo}
     * @memberof QuoteResponse
     */
    'orderInfo'?: OrderInfo;
    /**
     *
     * @type {string}
     * @memberof QuoteResponse
     */
    'encodedOrder'?: string;
    /**
     *
     * @type {string}
     * @memberof QuoteResponse
     */
    'orderHash'?: string;
    /**
     *
     * @type {TypedData}
     * @memberof QuoteResponse
     */
    'permitData'?: TypedData;
}
//# sourceMappingURL=quote-response.d.ts.map