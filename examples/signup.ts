import { Wallet, ZarbanUtils } from "zarban";
const { withErrorHandler } = ZarbanUtils;

async function signupExample() {
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

  const signupWithHandler = withErrorHandler<Wallet.SimpleResponse>(
    "Wallet",
    () => authApi.signupWithEmailAndPassword(signupRequest),
    (response) => {
      console.log("Signup successful!");
      console.log("Confirmation link sent.");
      console.log(
        `Message: ${JSON.stringify(response.data.messages, null, 2)}`
      );
    }
  );

  const [result, error] = await signupWithHandler();
  if (error) {
    // You can do some extra work with errors here!
    return error;
  }
  return result;
}

// Execute with proper error handling
if (require.main === module) {
  signupExample().then((result) => {
    if (result instanceof Error) {
      process.exit(1);
    }
    process.exit(0);
  });
}
