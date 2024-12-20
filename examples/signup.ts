import { Wallet } from "zarban";

async function signupExample(): Promise<Wallet.SimpleResponse> {
  // Create and configure the Configuration object
  const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

  // Create an instance of the authApi using the Configuration
  const authApi = new Wallet.AuthApi.AuthApi(cfg);

  // Prepare the signup request data
  const signupRequest: Wallet.SignUpRequest = {
    email: "arashalaei22@gmail.com",
    password: "12345678",
  };

  try {
    // Call the signup API
    let response,
      _ = await authApi.signupWithEmailAndPassword(signupRequest);
    console.log("Signup successful!");
    console.log("Confirmation link sent.");

    console.log(`Message: ${JSON.stringify(response.messages, null, 2)}`);
    return response;
  } catch (error) {
    console.log(error.response.data);
    throw error;
  }
}

// Execute with proper error handling
if (require.main === module) {
  signupExample()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
