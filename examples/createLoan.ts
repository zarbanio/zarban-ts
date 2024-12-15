import { Wallet } from "zarban";

const createLoan = async (
  loanApi: Wallet.LoansApi.LoansApi,
  planName: string,
  collateral: string,
  debt: string,
  symbol: string,
  loanToValueOption: string
) => {
  const loanCreateRequest = Wallet.LoanCreateRequestFromJSON({
    intent: "Create",
    planName,
    collateral,
    debt,
    symbol,
    loanToValueOption,
  });
  try {
    const loanResponse = await loanApi.createLoanVault({ loanCreateRequest });
    console.log(`Loan created successfully. Loan ID: ${loanResponse.id}`);
    return loanResponse.id;
  } catch (error) {
    console.log("Exception when calling loanApi->createLoanVault");

    const modelError = Wallet.instanceOfModelError(error);
    const userError = Wallet.instanceOfUserError(error);
    if (modelError) {
      console.log(`Message: ${error.msg}`);
      console.log(`Reasons: ${error.reasons}`);
    } else if (userError) {
      console.log(`Message: ${error.messages}`);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

const loanStatus = async (
  loanApi: Wallet.LoansApi.LoansApi,
  loanId: string
) => {
  try {
    const loanDetailsResponse = await loanApi.getLoanDetails({ id: loanId });
    console.log(`Loan Details for ID ${loanId}:`);
    console.log(`User ID: ${loanDetailsResponse.userId}`);
    console.log(`State: ${loanDetailsResponse.state}`);
    console.log(`Collateral: ${loanDetailsResponse.collateral}`);
    console.log(`Debt: ${loanDetailsResponse.debt}`);
    console.log(`Liquidation Price: ${loanDetailsResponse.liquidationPrice}`);
    console.log(`Loan To Value: ${loanDetailsResponse.loanToValue}`);
    return loanDetailsResponse;
  } catch (error) {
    console.log(`Exception when loanApi-> getLoanDetails ${error}`);
    const modelError = Wallet.instanceOfModelError(error);
    if (modelError) {
      console.log(`Message: ${error.msg}`);
      console.log(`Reasons: ${error.reasons}`);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};

async function main() {
  // Replace with your actual access token
  const ACCESS_TOKEN = "your_access_token_here";

  // Setup API client
  let cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
    headers: {
      "X-Child-User": "your_child_username",
    },
  });

  let loanApi = new Wallet.LoansApi.LoansApi(cfg);

  // Loan creation parameters, Replace them with yout actual data
  // *** either collateral or debt must be empty ***
  const PLAN_NAME = "DAIA"; // Only DAIA and DAIB supported
  const COLLATERAL = "1000"; // Amount of collateral
  const DEBT = ""; // Amount of debt
  const SYMBOL = "DAI"; // Coin symbol
  const LOAN_TO_VALUE_OPTIONS = "Safe"; // Risky - Normal - Safe

  // Create loan
  const loanId = await createLoan(
    loanApi,
    PLAN_NAME,
    COLLATERAL,
    DEBT,
    SYMBOL,
    LOAN_TO_VALUE_OPTIONS
  );

  // Remove the X-Child-User header after use
  cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
  });
  loanApi = new Wallet.LoansApi.LoansApi(cfg);

  if (loanId) {
    console.log(`Loan created with ID: ${loanId}`);

    // Track loan status
    console.log("\nTracking loan status...");
    const loanDetails = await loanStatus(loanApi, loanId);

    if (loanDetails) {
      // You can add more specific actions based on the loan status{
      console.log(`Loan status: ${loanDetails.state}`);
    }
  } else {
    console.log("Failed to create loan");
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
