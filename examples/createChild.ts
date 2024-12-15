import { Wallet } from "zarban";

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

  try {
    // Superuser login
    const loginRequest = Wallet.LoginRequestFromJSON({
      email: SUPERUSER_EMAIL,
      password: SUPERUSER_PASSWORD,
    });
    // Call the login API
    const response = await authApi.loginWithEmailAndPassword({
      loginRequest: loginRequest,
    });
    console.log("Superuser login successful");

    cfg = new Wallet.Configuration({
      basePath: "https://testwapi.zarban.io",
      accessToken: response.token,
    });

    // Create a child user
    const childUsername = "child_user_test";
    let userApi = new Wallet.UserApi.UserApi(cfg);
    const createChildUserRequest = Wallet.CreateChildUserRequestFromJSON({
      username: childUsername,
    });
    const childResponse = await userApi.createChildUser({
      createChildUserRequest: createChildUserRequest,
    });

    console.log(`Child user created. Username: ${childResponse.username}`);

    // Get child user's profile
    // Set the X-Child-User header
    cfg = new Wallet.Configuration({
      basePath: "https://testwapi.zarban.io",
      accessToken: response.token,
      headers: {
        "X-Child-User": childResponse.username as string,
      },
    });
    userApi = new Wallet.UserApi.UserApi(cfg);
    // Make the profile request
    const profileResponse = await userApi.getUserProfile();
    console.log("Child user profile:");
    console.log(profileResponse);

    // Remove the X-Child-User header after use
    cfg = new Wallet.Configuration({
      basePath: "https://testwapi.zarban.io",
      accessToken: response.token,
    });
  } catch (error) {
    const modelError = Wallet.instanceOfModelError(error);
    if (modelError) {
      console.log(`Exception when calling Api ${error}`);
      console.log(`Error message: ${error.msg}`);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
}

if (require.main === module) {
  createChildExample()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
