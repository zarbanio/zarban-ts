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
import * as runtime from '../runtime';
import type { Payment, PaymentRequest } from '../models/index';
export interface CreatePaymentRequest {
    paymentRequest: PaymentRequest;
}
/**
 * PaymentApi - interface
 *
 * @export
 * @interface PaymentApiInterface
 */
export interface PaymentApiInterface {
    /**
     * Create a new payment.
     * @summary Create a payment
     * @param {PaymentRequest} paymentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApiInterface
     */
    createPaymentRaw(requestParameters: CreatePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Payment>>;
    /**
     * Create a new payment.
     * Create a payment
     */
    createPayment(requestParameters: CreatePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Payment>;
}
/**
 *
 */
export declare class PaymentApi extends runtime.BaseAPI implements PaymentApiInterface {
    /**
     * Create a new payment.
     * Create a payment
     */
    createPaymentRaw(requestParameters: CreatePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Payment>>;
    /**
     * Create a new payment.
     * Create a payment
     */
    createPayment(requestParameters: CreatePaymentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Payment>;
}
//# sourceMappingURL=PaymentApi.d.ts.map