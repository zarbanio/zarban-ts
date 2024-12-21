import { Wallet, ZarbanUtils } from "zarban";
import readline from "readline";

const { withErrorHandler } = ZarbanUtils;

// Create interface for reading from stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Simple single input
function getInput(prompt): Promise<string> {
  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      resolve(answer);
    });
  });
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const repayLoan = async (
  loanApi: Wallet.LoansApi.LoansApi,
  loanId: string,
  intent: Wallet.RepayLoanRequestIntentEnum = "Repay"
) => {
  const repayLoanRequest: Wallet.RepayLoanRequest = {
    loanId,
    intent,
  };

  const repayLoanWithHandler = withErrorHandler<Wallet.LoansResponse>(
    "Wallet",
    () => loanApi.repayLoan(repayLoanRequest),
    (response) => {
      console.log(
        `Loan repayment ${intent.toLowerCase()} successful. Loan ID: ${
          response.data.id
        }`
      );
    }
  );

  return repayLoanWithHandler();
};

const getLoanStatus = async (
  loanApi: Wallet.LoansApi.LoansApi,
  loanId: string
) => {
  const loanDetailsWithHandler = withErrorHandler<Wallet.LoansResponse>(
    "Wallet",
    () => loanApi.getLoanDetails(loanId),
    (response) => {
      console.log(`Loan Details for ID ${loanId}:`);
      console.log(`Loan State for ID ${response.data.state}`);
      console.log(`User ID: ${response.data.userId}`);
      console.log(`Liquidation Price: ${response.data.liquidationPrice}`);
      console.log(`Collateral: ${response.data.collateral}`);
      console.log(
        `Collateralization Ratio: ${response.data.collateralizationRatio}`
      );
      console.log(`Loan to Value: ${response.data.loanToValue}`);
      console.log(`Debt: ${response.data.debt}`);
      console.log(`Loan Plan: ${response.data.plan}`);
    }
  );

  return loanDetailsWithHandler();
};

async function main() {
  // Replace with your actual access token
  const ACCESS_TOKEN = "your_access_token_here";

  // Setup API client
  // Set the X-Child-User header
  let cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
    baseOptions: {
      headers: {
        "X-Child-User": "your_child_username",
      },
    },
  });

  // Loan ID to repay, replace with actual loan ID
  const LOAN_ID = "DAIA#2825";

  // Preview repayment
  console.log("Previewing loan repayment...");
  let loanApi = new Wallet.LoansApi.LoansApi(cfg);

  const [previewLoanResponse, previewLoanError] = await repayLoan(
    loanApi,
    LOAN_ID,
    "Preview"
  );
  if (previewLoanError) {
    // you can do some addition works with error here!
    return previewLoanError;
  }
  if (previewLoanResponse) {
    console.log("\nRepayment preview details:");
    console.log(`Collateral to be returned: ${previewLoanResponse.collateral}`);
    console.log(`Debt to be repaid: ${previewLoanResponse.debt}`);

    // Ask for user confirmation
    const confirm = await getInput(
      "\nDo you want to proceed with the repayment? (y/n): "
    );
    if (confirm.toLowerCase() == "y") {
      // Proceed with actual repayment
      const [repaymentLoanResponse, repaymentLoanError] = await repayLoan(
        loanApi,
        LOAN_ID
      );
      if (repaymentLoanError) {
        // you can do some addition works with error here!
        return repaymentLoanError;
      }
      if (repaymentLoanResponse) {
        console.log("repayment in progress...");
        while (true) {
          const [loanDetails, loanDetailsError] = await getLoanStatus(
            loanApi,
            LOAN_ID
          );
          if (loanDetailsError) {
            // you can do some addition works with error here!
            return loanDetailsError;
          }
          if (loanDetails.state.LocaleEn == "Loan settled") {
            console.log("\nLoan repayment successful!");
            await getLoanStatus(loanApi, LOAN_ID);
            break;
          } else if (loanDetails.state.LocaleEn == "Loan settlement failed") {
            console.log(loanDetails.state.LocaleEn);
            break;
          }
          await sleep(1000);
        }

        // Get updated loan status
        console.log("\nUpdated loan status:");
        await getLoanStatus(loanApi, LOAN_ID);
      } else {
        console.log("Repayment cancelled.");
      }
    } else {
      console.log("Repayment cancelled.");
    }
  } else {
    console.log("Failed to preview loan repayment");
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
