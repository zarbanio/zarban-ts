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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { Payment } from '../model';
// @ts-ignore
import type { PaymentRequest } from '../model';
// @ts-ignore
import type { UserError } from '../model';
/**
 * PaymentApi - axios parameter creator
 * @export
 */
export const PaymentApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Create a new payment.
         * @summary Create a payment
         * @param {PaymentRequest} paymentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPayment: async (paymentRequest: PaymentRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'paymentRequest' is not null or undefined
            assertParamExists('createPayment', 'paymentRequest', paymentRequest)
            const localVarPath = `/payments`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(paymentRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PaymentApi - functional programming interface
 * @export
 */
export const PaymentApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PaymentApiAxiosParamCreator(configuration)
    return {
        /**
         * Create a new payment.
         * @summary Create a payment
         * @param {PaymentRequest} paymentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createPayment(paymentRequest: PaymentRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Payment>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createPayment(paymentRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PaymentApi.createPayment']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PaymentApi - factory interface
 * @export
 */
export const PaymentApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PaymentApiFp(configuration)
    return {
        /**
         * Create a new payment.
         * @summary Create a payment
         * @param {PaymentRequest} paymentRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createPayment(paymentRequest: PaymentRequest, options?: RawAxiosRequestConfig): AxiosPromise<Payment> {
            return localVarFp.createPayment(paymentRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PaymentApi - interface
 * @export
 * @interface PaymentApi
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
    createPayment(paymentRequest: PaymentRequest, options?: RawAxiosRequestConfig): AxiosPromise<Payment>;

}

/**
 * PaymentApi - object-oriented interface
 * @export
 * @class PaymentApi
 * @extends {BaseAPI}
 */
export class PaymentApi extends BaseAPI implements PaymentApiInterface {
    /**
     * Create a new payment.
     * @summary Create a payment
     * @param {PaymentRequest} paymentRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PaymentApi
     */
    public createPayment(paymentRequest: PaymentRequest, options?: RawAxiosRequestConfig) {
        return PaymentApiFp(this.configuration).createPayment(paymentRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

