import {
  ModelError as WalletModelError,
  UserError as WalletUserError,
} from "../wallet";
import {
  ModelError as ServiceModelError,
  UserError as ServiceUserError,
} from "../service";

import type { AxiosResponse } from "axios";

type AsyncFn<T> = (...args: any[]) => Promise<T>;
type SuccessCallback<T> = (result: T) => void;

export function isOfType<T>(obj: any, keys: (keyof T)[]): obj is T {
  return keys.every((key) => key in obj);
}

interface ErrorCheckers {
  isModelError: (err: any) => boolean;
  isUserError: (err: any) => boolean;
}

// Helper function to extract all needed information
function extractInfo(
  fn: AsyncFn<any>,
  sdkName: "Service" | "Wallet"
): {
  apiName: string;
  methodName: string;
  errorCheckers: ErrorCheckers;
} {
  let apiName = "UnknownAPI";
  let methodName = "unknownMethod";
  let errorCheckers: ErrorCheckers = {
    isModelError: () => false,
    isUserError: () => false,
  };

  try {
    // Get the function's string representation
    const fnString = fn.toString();

    // Improved regex patterns for different function formats
    const arrowFnPattern = /return\s+(\w+)\.(\w+)\(/; // For arrow functions
    const methodPattern = /(\w+)\.(\w+)\(/; // For regular functions

    // Try to extract API and method names
    let matches =
      fnString.match(arrowFnPattern) || fnString.match(methodPattern);

    if (matches && matches.length >= 3) {
      // Extract the API instance name and method name
      const instanceName = matches[1]; // e.g., 'authApi'
      const method = matches[2]; // e.g., 'signupWithEmailAndPassword'

      // Convert instanceName to API name (remove 'Api' suffix if present)
      apiName =
        instanceName.replace(/Api$/, "").charAt(0).toUpperCase() +
        instanceName.replace(/Api$/, "").slice(1);
      methodName = method;
    }

    // Set appropriate error checkers based on API type
    if (sdkName === "Wallet") {
      errorCheckers = {
        isModelError: (err: any): boolean =>
          err?.response?.data &&
          isOfType<WalletModelError>(err.response.data, ["msg", "reasons"]),
        isUserError: (err: any): boolean =>
          err?.response?.data &&
          isOfType<WalletUserError>(err.response.data, ["messages"]),
      };
    } else {
      errorCheckers = {
        isModelError: (err: any): boolean =>
          err?.response?.data &&
          isOfType<ServiceModelError>(err.response.data, ["msg", "reasons"]),
        isUserError: (err: any): boolean =>
          err?.response?.data &&
          isOfType<ServiceUserError>(err.response.data, [
            "messages",
            "reasons",
          ]),
      };
    }
  } catch (error) {
    console.warn("Failed to extract API info:", error);
  }

  return { apiName, methodName, errorCheckers };
}

type ErrorTypes =
  | Error
  | ServiceModelError
  | WalletModelError
  | ServiceUserError
  | WalletUserError;

export function withErrorHandler<T>(
  sdkName: "Service" | "Wallet",
  fn: AsyncFn<AxiosResponse<T>>,
  onSuccess?: SuccessCallback<AxiosResponse<T>>
) {
  const { apiName, methodName, errorCheckers } = extractInfo(fn, sdkName);

  return async (
    ...args: Parameters<typeof fn>
  ): Promise<[T | null, ErrorTypes | null]> => {
    try {
      const result = await fn(...args);
      if (onSuccess) {
        onSuccess(result);
      }
      return [result.data, null];
    } catch (error: any) {
      if (errorCheckers.isModelError(error)) {
        console.log(
          `Exception when calling ${apiName}->${methodName}: ${error.response.data.msg}`
        );
        console.log(
          `Error message: ${JSON.stringify(error.response.data.msg, null, 2)}`
        );
        console.log(
          `Reasons: ${JSON.stringify(error.response.data.reasons, null, 2)}`
        );
        return [null, error.response.data];
      } else if (errorCheckers.isUserError(error)) {
        console.log(
          `User error in ${apiName}->${methodName}: ${JSON.stringify(
            error.response.data.messages,
            null,
            2
          )}`
        );
        if ("reasons" in error.response.data) {
          console.log(
            `Reasons: ${JSON.stringify(error.response.data.reasons, null, 2)}`
          );
        }
        return [null, error.response.data];
      } else {
        console.error("Unexpected error:", error);
        return [null, error as Error];
      }
    }
  };
}
