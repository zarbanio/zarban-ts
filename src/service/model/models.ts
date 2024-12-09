import localVarRequest from 'request';

export * from './account';
export * from './accountLendingpoolSummary';
export * from './accountStablecoinSystemSummary';
export * from './accountStakingSummary';
export * from './address';
export * from './addressResponse';
export * from './balance';
export * from './basicEvent';
export * from './chainActivity';
export * from './chainActivityStep';
export * from './chainActivityStepData';
export * from './dutchAmount';
export * from './eIP712SignRequest';
export * from './errorMessage';
export * from './eventDetailsResponse';
export * from './eventDomain';
export * from './eventName';
export * from './eventType';
export * from './extendedEvent';
export * from './formattedReserveData';
export * from './ilk';
export * from './ilksResponse';
export * from './lendingpoolBorrow';
export * from './lendingpoolBorrowTxRequest';
export * from './lendingpoolBorrowTxResponse';
export * from './lendingpoolDeposit';
export * from './lendingpoolDepositTxRequest';
export * from './lendingpoolDepositTxResponse';
export * from './lendingpoolRepayTxRequest';
export * from './lendingpoolRepayTxResponse';
export * from './lendingpoolStats';
export * from './lendingpoolTxResponse';
export * from './lendingpoolUseAssetAsCollateralTxRequest';
export * from './lendingpoolUseAssetAsCollateralTxResponse';
export * from './lendingpoolWithdrawTxRequest';
export * from './lendingpoolWithdrawTxResponse';
export * from './log';
export * from './methodParameters';
export * from './modelError';
export * from './order';
export * from './orderInfo';
export * from './orderResponse';
export * from './orderType';
export * from './permitSingle';
export * from './personalSignRequest';
export * from './preparedTx';
export * from './price';
export * from './priceListResponse';
export * from './quoteRequest';
export * from './quoteRequestOptions';
export * from './quoteResponse';
export * from './rawDutchAmount';
export * from './routeItem';
export * from './scoreboard';
export * from './scoreboardItem';
export * from './stablecoinSystemBarkTxRequest';
export * from './stablecoinSystemCreateVaultTxRequest';
export * from './stablecoinSystemDepositCollateralTxRequest';
export * from './stablecoinSystemGemexitTxRequest';
export * from './stablecoinSystemMintZarTxRequest';
export * from './stablecoinSystemRedoTxRequest';
export * from './stablecoinSystemRepayZarTxRequest';
export * from './stablecoinSystemStats';
export * from './stablecoinSystemTakeTxRequest';
export * from './stablecoinSystemWithdrawCollateralTxRequest';
export * from './stablecoinSystemZarexitTxRequest';
export * from './stablecoinSystemZarjoinTxRequest';
export * from './stakeBalance';
export * from './stakePlan';
export * from './stakePlansResponse';
export * from './stakingCollectRewardTxRequest';
export * from './stakingCollectRewardTxResponse';
export * from './stakingStakeTxRequest';
export * from './stakingStakeTxResponse';
export * from './stakingWithdrawTxRequest';
export * from './stakingWithdrawTxResponse';
export * from './stats';
export * from './symbol';
export * from './systemBadDebt';
export * from './systemDebt';
export * from './systemDebtCeiling';
export * from './systemSurplus';
export * from './systemSurplusBuffer';
export * from './systemSurplusLotSize';
export * from './timeRange';
export * from './timestamp';
export * from './token';
export * from './tradeType';
export * from './type';
export * from './typedData';
export * from './typedDataDomain';
export * from './unclaimedReward';
export * from './updateOrderRequest';
export * from './userBorrowsResponse';
export * from './userDepositsResponse';
export * from './userError';
export * from './userStake';
export * from './userStakesResponse';
export * from './v3PoolInRoute';
export * from './vault';
export * from './vaultEvent';
export * from './vaultEventExtension';
export * from './vaultEventItem';
export * from './vaultEventsResponse';
export * from './vaultsResponse';
export * from './walletBalance';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Account } from './account';
import { AccountLendingpoolSummary } from './accountLendingpoolSummary';
import { AccountStablecoinSystemSummary } from './accountStablecoinSystemSummary';
import { AccountStakingSummary } from './accountStakingSummary';
import { Address } from './address';
import { AddressResponse } from './addressResponse';
import { Balance } from './balance';
import { BasicEvent } from './basicEvent';
import { ChainActivity } from './chainActivity';
import { ChainActivityStep } from './chainActivityStep';
import { ChainActivityStepData } from './chainActivityStepData';
import { DutchAmount } from './dutchAmount';
import { EIP712SignRequest } from './eIP712SignRequest';
import { ErrorMessage } from './errorMessage';
import { EventDetailsResponse } from './eventDetailsResponse';
import { EventDomain } from './eventDomain';
import { EventName } from './eventName';
import { EventType } from './eventType';
import { ExtendedEvent } from './extendedEvent';
import { FormattedReserveData } from './formattedReserveData';
import { Ilk } from './ilk';
import { IlksResponse } from './ilksResponse';
import { LendingpoolBorrow } from './lendingpoolBorrow';
import { LendingpoolBorrowTxRequest } from './lendingpoolBorrowTxRequest';
import { LendingpoolBorrowTxResponse } from './lendingpoolBorrowTxResponse';
import { LendingpoolDeposit } from './lendingpoolDeposit';
import { LendingpoolDepositTxRequest } from './lendingpoolDepositTxRequest';
import { LendingpoolDepositTxResponse } from './lendingpoolDepositTxResponse';
import { LendingpoolRepayTxRequest } from './lendingpoolRepayTxRequest';
import { LendingpoolRepayTxResponse } from './lendingpoolRepayTxResponse';
import { LendingpoolStats } from './lendingpoolStats';
import { LendingpoolTxResponse } from './lendingpoolTxResponse';
import { LendingpoolUseAssetAsCollateralTxRequest } from './lendingpoolUseAssetAsCollateralTxRequest';
import { LendingpoolUseAssetAsCollateralTxResponse } from './lendingpoolUseAssetAsCollateralTxResponse';
import { LendingpoolWithdrawTxRequest } from './lendingpoolWithdrawTxRequest';
import { LendingpoolWithdrawTxResponse } from './lendingpoolWithdrawTxResponse';
import { Log } from './log';
import { MethodParameters } from './methodParameters';
import { ModelError } from './modelError';
import { Order } from './order';
import { OrderInfo } from './orderInfo';
import { OrderResponse } from './orderResponse';
import { OrderType } from './orderType';
import { PermitSingle } from './permitSingle';
import { PersonalSignRequest } from './personalSignRequest';
import { PreparedTx } from './preparedTx';
import { Price } from './price';
import { PriceListResponse } from './priceListResponse';
import { QuoteRequest } from './quoteRequest';
import { QuoteRequestOptions } from './quoteRequestOptions';
import { QuoteResponse } from './quoteResponse';
import { RawDutchAmount } from './rawDutchAmount';
import { RouteItem } from './routeItem';
import { Scoreboard } from './scoreboard';
import { ScoreboardItem } from './scoreboardItem';
import { StablecoinSystemBarkTxRequest } from './stablecoinSystemBarkTxRequest';
import { StablecoinSystemCreateVaultTxRequest } from './stablecoinSystemCreateVaultTxRequest';
import { StablecoinSystemDepositCollateralTxRequest } from './stablecoinSystemDepositCollateralTxRequest';
import { StablecoinSystemGemexitTxRequest } from './stablecoinSystemGemexitTxRequest';
import { StablecoinSystemMintZarTxRequest } from './stablecoinSystemMintZarTxRequest';
import { StablecoinSystemRedoTxRequest } from './stablecoinSystemRedoTxRequest';
import { StablecoinSystemRepayZarTxRequest } from './stablecoinSystemRepayZarTxRequest';
import { StablecoinSystemStats } from './stablecoinSystemStats';
import { StablecoinSystemTakeTxRequest } from './stablecoinSystemTakeTxRequest';
import { StablecoinSystemWithdrawCollateralTxRequest } from './stablecoinSystemWithdrawCollateralTxRequest';
import { StablecoinSystemZarexitTxRequest } from './stablecoinSystemZarexitTxRequest';
import { StablecoinSystemZarjoinTxRequest } from './stablecoinSystemZarjoinTxRequest';
import { StakeBalance } from './stakeBalance';
import { StakePlan } from './stakePlan';
import { StakePlansResponse } from './stakePlansResponse';
import { StakingCollectRewardTxRequest } from './stakingCollectRewardTxRequest';
import { StakingCollectRewardTxResponse } from './stakingCollectRewardTxResponse';
import { StakingStakeTxRequest } from './stakingStakeTxRequest';
import { StakingStakeTxResponse } from './stakingStakeTxResponse';
import { StakingWithdrawTxRequest } from './stakingWithdrawTxRequest';
import { StakingWithdrawTxResponse } from './stakingWithdrawTxResponse';
import { Stats } from './stats';
import { Symbol } from './symbol';
import { SystemBadDebt } from './systemBadDebt';
import { SystemDebt } from './systemDebt';
import { SystemDebtCeiling } from './systemDebtCeiling';
import { SystemSurplus } from './systemSurplus';
import { SystemSurplusBuffer } from './systemSurplusBuffer';
import { SystemSurplusLotSize } from './systemSurplusLotSize';
import { TimeRange } from './timeRange';
import { Timestamp } from './timestamp';
import { Token } from './token';
import { TradeType } from './tradeType';
import { Type } from './type';
import { TypedData } from './typedData';
import { TypedDataDomain } from './typedDataDomain';
import { UnclaimedReward } from './unclaimedReward';
import { UpdateOrderRequest } from './updateOrderRequest';
import { UserBorrowsResponse } from './userBorrowsResponse';
import { UserDepositsResponse } from './userDepositsResponse';
import { UserError } from './userError';
import { UserStake } from './userStake';
import { UserStakesResponse } from './userStakesResponse';
import { V3PoolInRoute } from './v3PoolInRoute';
import { Vault } from './vault';
import { VaultEvent } from './vaultEvent';
import { VaultEventExtension } from './vaultEventExtension';
import { VaultEventItem } from './vaultEventItem';
import { VaultEventsResponse } from './vaultEventsResponse';
import { VaultsResponse } from './vaultsResponse';
import { WalletBalance } from './walletBalance';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ChainActivityStep.TypeEnum": ChainActivityStep.TypeEnum,
        "EventDomain": EventDomain,
        "EventName": EventName,
        "EventType": EventType,
        "Order.OrderStatusEnum": Order.OrderStatusEnum,
        "Order.OrderTypeEnum": Order.OrderTypeEnum,
        "OrderType": OrderType,
        "Symbol": Symbol,
        "TradeType": TradeType,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountLendingpoolSummary": AccountLendingpoolSummary,
    "AccountStablecoinSystemSummary": AccountStablecoinSystemSummary,
    "AccountStakingSummary": AccountStakingSummary,
    "Address": Address,
    "AddressResponse": AddressResponse,
    "Balance": Balance,
    "BasicEvent": BasicEvent,
    "ChainActivity": ChainActivity,
    "ChainActivityStep": ChainActivityStep,
    "ChainActivityStepData": ChainActivityStepData,
    "DutchAmount": DutchAmount,
    "EIP712SignRequest": EIP712SignRequest,
    "ErrorMessage": ErrorMessage,
    "EventDetailsResponse": EventDetailsResponse,
    "ExtendedEvent": ExtendedEvent,
    "FormattedReserveData": FormattedReserveData,
    "Ilk": Ilk,
    "IlksResponse": IlksResponse,
    "LendingpoolBorrow": LendingpoolBorrow,
    "LendingpoolBorrowTxRequest": LendingpoolBorrowTxRequest,
    "LendingpoolBorrowTxResponse": LendingpoolBorrowTxResponse,
    "LendingpoolDeposit": LendingpoolDeposit,
    "LendingpoolDepositTxRequest": LendingpoolDepositTxRequest,
    "LendingpoolDepositTxResponse": LendingpoolDepositTxResponse,
    "LendingpoolRepayTxRequest": LendingpoolRepayTxRequest,
    "LendingpoolRepayTxResponse": LendingpoolRepayTxResponse,
    "LendingpoolStats": LendingpoolStats,
    "LendingpoolTxResponse": LendingpoolTxResponse,
    "LendingpoolUseAssetAsCollateralTxRequest": LendingpoolUseAssetAsCollateralTxRequest,
    "LendingpoolUseAssetAsCollateralTxResponse": LendingpoolUseAssetAsCollateralTxResponse,
    "LendingpoolWithdrawTxRequest": LendingpoolWithdrawTxRequest,
    "LendingpoolWithdrawTxResponse": LendingpoolWithdrawTxResponse,
    "Log": Log,
    "MethodParameters": MethodParameters,
    "ModelError": ModelError,
    "Order": Order,
    "OrderInfo": OrderInfo,
    "OrderResponse": OrderResponse,
    "PermitSingle": PermitSingle,
    "PersonalSignRequest": PersonalSignRequest,
    "PreparedTx": PreparedTx,
    "Price": Price,
    "PriceListResponse": PriceListResponse,
    "QuoteRequest": QuoteRequest,
    "QuoteRequestOptions": QuoteRequestOptions,
    "QuoteResponse": QuoteResponse,
    "RawDutchAmount": RawDutchAmount,
    "RouteItem": RouteItem,
    "Scoreboard": Scoreboard,
    "ScoreboardItem": ScoreboardItem,
    "StablecoinSystemBarkTxRequest": StablecoinSystemBarkTxRequest,
    "StablecoinSystemCreateVaultTxRequest": StablecoinSystemCreateVaultTxRequest,
    "StablecoinSystemDepositCollateralTxRequest": StablecoinSystemDepositCollateralTxRequest,
    "StablecoinSystemGemexitTxRequest": StablecoinSystemGemexitTxRequest,
    "StablecoinSystemMintZarTxRequest": StablecoinSystemMintZarTxRequest,
    "StablecoinSystemRedoTxRequest": StablecoinSystemRedoTxRequest,
    "StablecoinSystemRepayZarTxRequest": StablecoinSystemRepayZarTxRequest,
    "StablecoinSystemStats": StablecoinSystemStats,
    "StablecoinSystemTakeTxRequest": StablecoinSystemTakeTxRequest,
    "StablecoinSystemWithdrawCollateralTxRequest": StablecoinSystemWithdrawCollateralTxRequest,
    "StablecoinSystemZarexitTxRequest": StablecoinSystemZarexitTxRequest,
    "StablecoinSystemZarjoinTxRequest": StablecoinSystemZarjoinTxRequest,
    "StakeBalance": StakeBalance,
    "StakePlan": StakePlan,
    "StakePlansResponse": StakePlansResponse,
    "StakingCollectRewardTxRequest": StakingCollectRewardTxRequest,
    "StakingCollectRewardTxResponse": StakingCollectRewardTxResponse,
    "StakingStakeTxRequest": StakingStakeTxRequest,
    "StakingStakeTxResponse": StakingStakeTxResponse,
    "StakingWithdrawTxRequest": StakingWithdrawTxRequest,
    "StakingWithdrawTxResponse": StakingWithdrawTxResponse,
    "Stats": Stats,
    "SystemBadDebt": SystemBadDebt,
    "SystemDebt": SystemDebt,
    "SystemDebtCeiling": SystemDebtCeiling,
    "SystemSurplus": SystemSurplus,
    "SystemSurplusBuffer": SystemSurplusBuffer,
    "SystemSurplusLotSize": SystemSurplusLotSize,
    "TimeRange": TimeRange,
    "Timestamp": Timestamp,
    "Token": Token,
    "Type": Type,
    "TypedData": TypedData,
    "TypedDataDomain": TypedDataDomain,
    "UnclaimedReward": UnclaimedReward,
    "UpdateOrderRequest": UpdateOrderRequest,
    "UserBorrowsResponse": UserBorrowsResponse,
    "UserDepositsResponse": UserDepositsResponse,
    "UserError": UserError,
    "UserStake": UserStake,
    "UserStakesResponse": UserStakesResponse,
    "V3PoolInRoute": V3PoolInRoute,
    "Vault": Vault,
    "VaultEvent": VaultEvent,
    "VaultEventExtension": VaultEventExtension,
    "VaultEventItem": VaultEventItem,
    "VaultEventsResponse": VaultEventsResponse,
    "VaultsResponse": VaultsResponse,
    "WalletBalance": WalletBalance,
}

// Check if a string starts with another string without using es6 features
function startsWith(str: string, match: string): boolean {
    return str.substring(0, match.length) === match;
}

// Check if a string ends with another string without using es6 features
function endsWith(str: string, match: string): boolean {
    return str.length >= match.length && str.substring(str.length - match.length) === match;
}

const nullableSuffix = " | null";
const optionalSuffix = " | undefined";
const arrayPrefix = "Array<";
const arraySuffix = ">";
const mapPrefix = "{ [key: string]: ";
const mapSuffix = "; }";

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string): any {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.serialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.serialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string): any {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (endsWith(type, nullableSuffix)) {
            let subType: string = type.slice(0, -nullableSuffix.length); // Type | null => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (endsWith(type, optionalSuffix)) {
            let subType: string = type.slice(0, -optionalSuffix.length); // Type | undefined => Type
            return ObjectSerializer.deserialize(data, subType);
        } else if (startsWith(type, arrayPrefix)) {
            let subType: string = type.slice(arrayPrefix.length, -arraySuffix.length); // Array<Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (startsWith(type, mapPrefix)) {
            let subType: string = type.slice(mapPrefix.length, -mapSuffix.length); // { [key: string]: Type; } => Type
            let transformedData: { [key: string]: any } = {};
            for (let key in data) {
                transformedData[key] = ObjectSerializer.deserialize(
                    data[key],
                    subType,
                );
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
