import { Wallet } from "zarban";

async function loginExample() {
  // Create and configure the Configuration object
  const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

  // Create an instance of the authApi
  const authApi = new Wallet.AuthApi.AuthApi(cfg);

  // Prepare the login request data
  const loginRequest = Wallet.LoginRequestFromJSON({
    email: "user@example.com",
    password: "your_secure_password",
  });

  try {
    // Call the login API
    const response = await authApi.loginWithEmailAndPassword({
      loginRequest: loginRequest,
    });
    console.log("Login successful!");
    console.log(`Token: ${response.token}`);

    // After successful login, you can set the access token for future authenticated requests
    /*
    const newCfg = new Wallet.Configuration({
      basePath: "https://testwapi.zarban.io",
      accessToken: response.token,
    });
    */

    return response;
  } catch (error) {
    const modelError = Wallet.instanceOfModelError(error);
    if (modelError) {
      console.log(
        `Exception when calling authApi->loginWithEmailAndPassword: ${error}`
      );
      console.log(`Error message: ${error.msg}`);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

if (require.main === module) {
  loginExample()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
