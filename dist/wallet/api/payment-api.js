/* tslint:disable */
/* eslint-disable */
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
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI, operationServerMap } from '../base';
/**
 * PaymentApi - axios parameter creator
 * @export
 */
export const PaymentApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Create a new payment.
         * @summary Create a payment
         * @param {PaymentRequest} paymentRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPayment: async (paymentRequest, options = {}) => {
            // verify required parameter 'paymentRequest' is not null or undefined
            assertParamExists('createPayment', 'paymentRequest', paymentRequest);
            const localVarPath = `/payments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(paymentRequest, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * PaymentApi - functional programming interface
 * @export
 */
export const PaymentApiFp = function (configuration) {
    const localVarAxiosParamCreator = PaymentApiAxiosParamCreator(configuration);
    return {
        /**
         * Create a new payment.
         * @summary Create a payment
         * @param {PaymentRequest} paymentRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPayment(paymentRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPayment(paymentRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.createPayment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * PaymentApi - factory interface
 * @export
 */
export const PaymentApiFactory = function (configuration, basePath, axios) {
    const localVarFp = PaymentApiFp(configuration);
    return {
        /**
         * Create a new payment.
         * @summary Create a payment
         * @param {PaymentRequest} paymentRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPayment(paymentRequest, options) {
            return localVarFp.createPayment(paymentRequest, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * PaymentApi - object-oriented interface
 * @export
 * @class PaymentApi
 * @extends {BaseAPI}
 */
export class PaymentApi extends BaseAPI {
    /**
     * Create a new payment.
     * @summary Create a payment
     * @param {PaymentRequest} paymentRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    createPayment(paymentRequest, options) {
        return PaymentApiFp(this.configuration).createPayment(paymentRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
//# sourceMappingURL=payment-api.js.map