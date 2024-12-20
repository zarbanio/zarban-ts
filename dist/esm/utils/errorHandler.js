import { __awaiter } from "tslib";
export function isOfType(obj, keys) {
    return keys.every((key) => key in obj);
}
// Helper function to extract all needed information
function extractInfo(fn, sdkName) {
    let apiName = "UnknownAPI";
    let methodName = "unknownMethod";
    let errorCheckers = {
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
        let matches = fnString.match(arrowFnPattern) || fnString.match(methodPattern);
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
                isModelError: (err) => {
                    var _a;
                    return ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) &&
                        isOfType(err.response.data, ["msg", "reasons"]);
                },
                isUserError: (err) => {
                    var _a;
                    return ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) &&
                        isOfType(err.response.data, ["messages"]);
                },
            };
        }
        else {
            errorCheckers = {
                isModelError: (err) => {
                    var _a;
                    return ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) &&
                        isOfType(err.response.data, ["msg", "reasons"]);
                },
                isUserError: (err) => {
                    var _a;
                    return ((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.data) &&
                        isOfType(err.response.data, [
                            "messages",
                            "reasons",
                        ]);
                },
            };
        }
    }
    catch (error) {
        console.warn("Failed to extract API info:", error);
    }
    return { apiName, methodName, errorCheckers };
}
export function withErrorHandler(sdkName, fn, onSuccess) {
    const { apiName, methodName, errorCheckers } = extractInfo(fn, sdkName);
    return (...args) => __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield fn(...args);
            if (onSuccess) {
                onSuccess(result);
            }
            return [result.data, null];
        }
        catch (error) {
            if (errorCheckers.isModelError(error)) {
                console.log(`Exception when calling ${apiName}->${methodName}: ${error.response.data.msg}`);
                console.log(`Error message: ${JSON.stringify(error.response.data.msg, null, 2)}`);
                console.log(`Reasons: ${JSON.stringify(error.response.data.reasons, null, 2)}`);
                return [null, error.response.data];
            }
            else if (errorCheckers.isUserError(error)) {
                console.log(`User error in ${apiName}->${methodName}: ${JSON.stringify(error.response.data.messages, null, 2)}`);
                if ("reasons" in error.response.data) {
                    console.log(`Reasons: ${JSON.stringify(error.response.data.reasons, null, 2)}`);
                }
                return [null, error.response.data];
            }
            else {
                console.error("Unexpected error:", error);
                return [null, error];
            }
        }
    });
}
//# sourceMappingURL=errorHandler.js.map