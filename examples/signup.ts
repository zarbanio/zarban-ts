import { Wallet } from "zarban";

async function signupExample(): Promise<Wallet.SimpleResponse> {
  // Create and configure the Configuration object
  const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

  // Create an instance of the BaseAPI using the Configuration
  const authApi = new Wallet.AuthApi.AuthApi(cfg);

  // Prepare the signup request data
  const signupRequest = Wallet.SignUpRequestFromJSON({
    email: "user@example.com",
    password: "yourSecuredPassword",
  });

  try {
    // Call the signup API
    const response = await authApi.signupWithEmailAndPassword({
      signUpRequest: signupRequest,
    });
    console.log("Signup successful!");
    console.log("Confirmation link sent.");
    console.log(`Message: ${response.messages}`);

    return response;
  } catch (error) {
    const modelError = Wallet.instanceOfModelError(error);
    if (modelError) {
      console.log(
        `Exception when calling authApi->signupWithEmailAndPassword: ${error}`
      );
      console.log(`Error message: ${error.msg}`);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

// Execute with proper error handling
if (require.main === module) {
  signupExample()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
