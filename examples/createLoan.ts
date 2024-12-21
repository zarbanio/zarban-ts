import { Wallet, ZarbanUtils } from "zarban";
const { withErrorHandler } = ZarbanUtils;

const createLoan = async (
  loanApi: Wallet.LoansApi.LoansApi,
  planName: string,
  collateral: string,
  debt: string,
  symbol: string,
  loanToValueOption: Wallet.LoanToValueOptions
) => {
  const loanCreateRequest: Wallet.LoanCreateRequest = {
    intent: Wallet.LoanCreateRequestIntentEnum.CREATE,
    planName,
    collateral,
    debt,
    symbol,
    loanToValueOption,
  };

  const createLoanWithHandler = withErrorHandler<Wallet.LoansResponse>(
    "Wallet",
    () => loanApi.createLoanVault(loanCreateRequest),
    (response) => {
      console.log(`Loan created successfully. Loan ID: ${response.data.id}`);
    }
  );

  return createLoanWithHandler();
};

const loanStatus = async (
  loanApi: Wallet.LoansApi.LoansApi,
  loanId: string
) => {
  const loanStatusWithHandler = withErrorHandler<Wallet.LoansResponse>(
    "Wallet",
    () => loanApi.getLoanDetails(loanId),
    (response) => {
      console.log(`Loan Details for ID ${loanId}:`);
      console.log(`User ID: ${response.data.userId}`);
      console.log(`State: ${response.data.state}`);
      console.log(`Collateral: ${response.data.collateral}`);
      console.log(`Debt: ${response.data.debt}`);
      console.log(`Liquidation Price: ${response.data.liquidationPrice}`);
      console.log(`Loan To Value: ${response.data.loanToValue}`);
    }
  );

  return loanStatusWithHandler();
};

async function main() {
  // Replace with your actual access token
  const ACCESS_TOKEN = "your_access_token_here";

  // Setup API client
  let cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
    baseOptions: {
      headers: {
        "X-Child-User": "child_user_test22",
      },
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
  const [createLoanResponse, createLoanError] = await createLoan(
    loanApi,
    PLAN_NAME,
    COLLATERAL,
    DEBT,
    SYMBOL,
    LOAN_TO_VALUE_OPTIONS
  );
  if (createLoanError) {
    // you can do some addition works with error here!
    return createLoanError;
  }

  // Remove the X-Child-User header after use
  cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
  });

  loanApi = new Wallet.LoansApi.LoansApi(cfg);

  if (createLoanResponse.id) {
    console.log(`Loan created with ID: ${createLoanResponse.id}`);

    // Track loan status
    console.log("\nTracking loan status...");
    const [loanDetails, loanDetailsError] = await loanStatus(
      loanApi,
      createLoanResponse.id
    );
    if (loanDetailsError) {
      // you can do some addition works with error here!
      return loanDetailsError;
    }
    if (loanDetails) {
      // You can add more specific actions based on the loan state
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
