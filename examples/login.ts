import { Wallet, ZarbanUtils } from "zarban";
const { withErrorHandler } = ZarbanUtils;

async function loginExample() {
  // Create and configure the Configuration object
  const cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

  // Create an instance of the BaseAPI using the Configuration
  const authApi = new Wallet.AuthApi.AuthApi(cfg);

  // Prepare the login request data
  const loginRequest: Wallet.LoginRequest = {
    email: "user@example.com",
    password: "your_secure_password",
  };

  const loginWithHandler = withErrorHandler<Wallet.JwtResponse>(
    "Wallet",
    () => authApi.loginWithEmailAndPassword(loginRequest),
    (response) => {
      console.log("Login successful!");
      console.log(`Token: ${response.data.token}`);
    }
  );

  const [response, error] = await loginWithHandler();
  if (error) {
    // you can do some addition works with error here!
    return error;
  }
  // After successful login, you can set the access token for future authenticated requests
  /*
  const newCfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: response.token,
  });
  */
  return response;
}

if (require.main === module) {
  loginExample().then((result) => {
    if (result instanceof Error) {
      process.exit(1);
    }
    process.exit(0);
  });
}
