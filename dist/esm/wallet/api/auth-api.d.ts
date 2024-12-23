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
import { type RequestArgs, BaseAPI } from '../base';
import type { AuthTelegramRequest } from '../model';
import type { JwtResponse } from '../model';
import type { LoginRequest } from '../model';
import type { SignUpRequest } from '../model';
import type { SimpleResponse } from '../model';
/**
 * AuthApi - axios parameter creator
 * @export
 */
export declare const AuthApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Authenticate with Telegram and get a JWT token.
     * @summary Authenticate with Telegram
     * @param {AuthTelegramRequest} authTelegramRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticateWithTelegram: (authTelegramRequest: AuthTelegramRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Generate a JWT token.
     * @summary Generate a JWT token
     * @param {GenerateJwtTokenDurationEnum} duration Token duration in days
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateJwtToken: (duration: GenerateJwtTokenDurationEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get OTP for the user.
     * @summary Get OTP
     * @param {GetOtpChannelEnum} channel Channel to send OTP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOtp: (channel: GetOtpChannelEnum, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Login with email and password and get a JWT token.
     * @summary Login with email and password
     * @param {LoginRequest} loginRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginWithEmailAndPassword: (loginRequest: LoginRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * signup with email and password and get a JWT token.
     * @summary signup with email and password
     * @param {SignUpRequest} signUpRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signupWithEmailAndPassword: (signUpRequest: SignUpRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {string} token Verification token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyUserEmail: (token: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * AuthApi - functional programming interface
 * @export
 */
export declare const AuthApiFp: (configuration?: Configuration) => {
    /**
     * Authenticate with Telegram and get a JWT token.
     * @summary Authenticate with Telegram
     * @param {AuthTelegramRequest} authTelegramRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticateWithTelegram(authTelegramRequest: AuthTelegramRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JwtResponse>>;
    /**
     * Generate a JWT token.
     * @summary Generate a JWT token
     * @param {GenerateJwtTokenDurationEnum} duration Token duration in days
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateJwtToken(duration: GenerateJwtTokenDurationEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JwtResponse>>;
    /**
     * Get OTP for the user.
     * @summary Get OTP
     * @param {GetOtpChannelEnum} channel Channel to send OTP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOtp(channel: GetOtpChannelEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SimpleResponse>>;
    /**
     * Login with email and password and get a JWT token.
     * @summary Login with email and password
     * @param {LoginRequest} loginRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginWithEmailAndPassword(loginRequest: LoginRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JwtResponse>>;
    /**
     * signup with email and password and get a JWT token.
     * @summary signup with email and password
     * @param {SignUpRequest} signUpRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signupWithEmailAndPassword(signUpRequest: SignUpRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SimpleResponse>>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {string} token Verification token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyUserEmail(token: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JwtResponse>>;
};
/**
 * AuthApi - factory interface
 * @export
 */
export declare const AuthApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Authenticate with Telegram and get a JWT token.
     * @summary Authenticate with Telegram
     * @param {AuthTelegramRequest} authTelegramRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    authenticateWithTelegram(authTelegramRequest: AuthTelegramRequest, options?: RawAxiosRequestConfig): AxiosPromise<JwtResponse>;
    /**
     * Generate a JWT token.
     * @summary Generate a JWT token
     * @param {GenerateJwtTokenDurationEnum} duration Token duration in days
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    generateJwtToken(duration: GenerateJwtTokenDurationEnum, options?: RawAxiosRequestConfig): AxiosPromise<JwtResponse>;
    /**
     * Get OTP for the user.
     * @summary Get OTP
     * @param {GetOtpChannelEnum} channel Channel to send OTP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getOtp(channel: GetOtpChannelEnum, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
    /**
     * Login with email and password and get a JWT token.
     * @summary Login with email and password
     * @param {LoginRequest} loginRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    loginWithEmailAndPassword(loginRequest: LoginRequest, options?: RawAxiosRequestConfig): AxiosPromise<JwtResponse>;
    /**
     * signup with email and password and get a JWT token.
     * @summary signup with email and password
     * @param {SignUpRequest} signUpRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    signupWithEmailAndPassword(signUpRequest: SignUpRequest, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {string} token Verification token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    verifyUserEmail(token: string, options?: RawAxiosRequestConfig): AxiosPromise<JwtResponse>;
};
/**
 * AuthApi - interface
 * @export
 * @interface AuthApi
 */
export interface AuthApiInterface {
    /**
     * Authenticate with Telegram and get a JWT token.
     * @summary Authenticate with Telegram
     * @param {AuthTelegramRequest} authTelegramRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    authenticateWithTelegram(authTelegramRequest: AuthTelegramRequest, options?: RawAxiosRequestConfig): AxiosPromise<JwtResponse>;
    /**
     * Generate a JWT token.
     * @summary Generate a JWT token
     * @param {GenerateJwtTokenDurationEnum} duration Token duration in days
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    generateJwtToken(duration: GenerateJwtTokenDurationEnum, options?: RawAxiosRequestConfig): AxiosPromise<JwtResponse>;
    /**
     * Get OTP for the user.
     * @summary Get OTP
     * @param {GetOtpChannelEnum} channel Channel to send OTP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    getOtp(channel: GetOtpChannelEnum, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
    /**
     * Login with email and password and get a JWT token.
     * @summary Login with email and password
     * @param {LoginRequest} loginRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    loginWithEmailAndPassword(loginRequest: LoginRequest, options?: RawAxiosRequestConfig): AxiosPromise<JwtResponse>;
    /**
     * signup with email and password and get a JWT token.
     * @summary signup with email and password
     * @param {SignUpRequest} signUpRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    signupWithEmailAndPassword(signUpRequest: SignUpRequest, options?: RawAxiosRequestConfig): AxiosPromise<SimpleResponse>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {string} token Verification token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApiInterface
     */
    verifyUserEmail(token: string, options?: RawAxiosRequestConfig): AxiosPromise<JwtResponse>;
}
/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
export declare class AuthApi extends BaseAPI implements AuthApiInterface {
    /**
     * Authenticate with Telegram and get a JWT token.
     * @summary Authenticate with Telegram
     * @param {AuthTelegramRequest} authTelegramRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authenticateWithTelegram(authTelegramRequest: AuthTelegramRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<JwtResponse, any>>;
    /**
     * Generate a JWT token.
     * @summary Generate a JWT token
     * @param {GenerateJwtTokenDurationEnum} duration Token duration in days
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    generateJwtToken(duration: GenerateJwtTokenDurationEnum, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<JwtResponse, any>>;
    /**
     * Get OTP for the user.
     * @summary Get OTP
     * @param {GetOtpChannelEnum} channel Channel to send OTP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    getOtp(channel: GetOtpChannelEnum, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<SimpleResponse, any>>;
    /**
     * Login with email and password and get a JWT token.
     * @summary Login with email and password
     * @param {LoginRequest} loginRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    loginWithEmailAndPassword(loginRequest: LoginRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<JwtResponse, any>>;
    /**
     * signup with email and password and get a JWT token.
     * @summary signup with email and password
     * @param {SignUpRequest} signUpRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    signupWithEmailAndPassword(signUpRequest: SignUpRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<SimpleResponse, any>>;
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {string} token Verification token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    verifyUserEmail(token: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<JwtResponse, any>>;
}
/**
 * @export
 */
export declare const GenerateJwtTokenDurationEnum: {
    readonly NUMBER_7: 7;
    readonly NUMBER_15: 15;
    readonly NUMBER_30: 30;
    readonly NUMBER_90: 90;
};
export type GenerateJwtTokenDurationEnum = typeof GenerateJwtTokenDurationEnum[keyof typeof GenerateJwtTokenDurationEnum];
/**
 * @export
 */
export declare const GetOtpChannelEnum: {
    readonly PHONE: "phone";
};
export type GetOtpChannelEnum = typeof GetOtpChannelEnum[keyof typeof GetOtpChannelEnum];
//# sourceMappingURL=auth-api.d.ts.map