import { Wallet, ZarbanUtils } from "zarban";
const { withErrorHandler } = ZarbanUtils;

async function createChildExample() {
  // Create and configure the Configuration object
  let cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
  });

  // Create an instance of the BaseAPI using the Configuration
  const authApi = new Wallet.AuthApi.AuthApi(cfg);

  // Constant superuser email and password
  const SUPERUSER_EMAIL = "user@example.com";
  const SUPERUSER_PASSWORD = "your_secure_password";

  // Superuser login
  const loginRequest: Wallet.LoginRequest = {
    email: SUPERUSER_EMAIL,
    password: SUPERUSER_PASSWORD,
  };

  // Call the login API
  const loginWithHandler = withErrorHandler<Wallet.JwtResponse>(
    "Wallet",
    () => authApi.loginWithEmailAndPassword(loginRequest),
    (_) => {
      console.log("Superuser login successful");
    }
  );

  const [loginResponse, loginError] = await loginWithHandler();
  if (loginError) {
    // you can do some addition works with error here!
    return loginError;
  }

  cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: loginResponse.token,
  });

  // Create a child user
  const childUsername = "child_user_test";
  let userApi = new Wallet.UserApi.UserApi(cfg);

  const createChildUserRequest: Wallet.CreateChildUserRequest = {
    username: childUsername,
  };

  const createChildUserWithHandler = withErrorHandler<Wallet.User>(
    "Wallet",
    () => userApi.createChildUser(createChildUserRequest),
    (response) => {
      console.log(`Child user created. Username: ${response.data.username}`);
    }
  );

  const [childResponse, createChildUserError] =
    await createChildUserWithHandler();
  if (createChildUserError) {
    // you can do some addition works with error here!
    return createChildUserError;
  }

  // Get child user's profile
  // Set the X-Child-User header
  cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: loginResponse.token,
    baseOptions: {
      headers: {
        "X-Child-User": childResponse.username,
      },
    },
  });
  userApi = new Wallet.UserApi.UserApi(cfg);
  // Make the profile request
  const getUserProfileWithHandler = withErrorHandler<Wallet.ProfileResponse>(
    "Wallet",
    () => userApi.getUserProfile(),
    (response) => {
      console.log("Child user profile:");
      console.log(response.data);
    }
  );

  const [UserProfile, UserProfileError] = await getUserProfileWithHandler();
  if (UserProfileError) {
    // you can do some addition works with error here!
    return UserProfileError;
  }

  // Remove the X-Child-User header after use
  cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: loginResponse.token,
  });
}

if (require.main === module) {
  createChildExample()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
