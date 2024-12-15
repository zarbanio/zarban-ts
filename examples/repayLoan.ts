import { Wallet } from "zarban";
import readline from "readline";

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
  intent: string = "Repay"
) => {
  const repayLoanRequest = Wallet.RepayLoanRequestFromJSON({
    loanId,
    intent,
  });
  try {
    const repayLoanResponse = await loanApi.repayLoan({
      repayLoanRequest,
    });
    console.log(
      `Loan repayment ${intent.toLowerCase()} successful. Loan ID: ${
        repayLoanResponse.id
      }`
    );
    return repayLoanResponse;
  } catch (error) {
    console.log("Exception when calling loanApi->repayLoan");

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

const getLoanStatus = async (
  loanApi: Wallet.LoansApi.LoansApi,
  loanId: string
) => {
  try {
    const loanDetails = await loanApi.getLoanDetails({ id: loanId });

    console.log(`Loan Details for ID ${loanId}:`);
    console.log(`Loan State for ID ${loanDetails.state}`);
    console.log(`User ID: ${loanDetails.userId}`);
    console.log(`Liquidation Price: ${loanDetails.liquidationPrice}`);
    console.log(`Collateral: ${loanDetails.collateral}`);
    console.log(
      `Collateralization Ratio: ${loanDetails.collateralizationRatio}`
    );
    console.log(`Loan to Value: ${loanDetails.loanToValue}`);
    console.log(`Debt: ${loanDetails.debt}`);
    console.log(`Loan Plan: ${loanDetails.plan}`);
    return loanDetails;
  } catch (error) {
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

async function main() {
  // Replace with your actual access token
  const ACCESS_TOKEN = "your_access_token_here";

  // Setup API client
  // Set the X-Child-User header
  let cfg = new Wallet.Configuration({
    basePath: "https://testwapi.zarban.io",
    accessToken: ACCESS_TOKEN,
    headers: {
      "X-Child-User": "your_child_username",
    },
  });

  // Loan ID to repay, replace with actual loan ID
  const LOAN_ID = "DAIA#2825";

  // Preview repayment
  console.log("Previewing loan repayment...");
  let loanApi = new Wallet.LoansApi.LoansApi(cfg);
  try {
    const previewLoanResponse = await repayLoan(loanApi, LOAN_ID, "Preview");

    if (previewLoanResponse) {
      console.log("\nRepayment preview details:");
      console.log(
        `Collateral to be returned: ${previewLoanResponse.collateral}`
      );
      console.log(`Debt to be repaid: ${previewLoanResponse.debt}`);

      // Ask for user confirmation
      const confirm = await getInput(
        "\nDo you want to proceed with the repayment? (y/n): "
      );
      if (confirm.toLowerCase() == "y") {
        // Proceed with actual repayment
        const repaymentLoanResponse = await repayLoan(loanApi, LOAN_ID);
        if (repaymentLoanResponse) {
          console.log("repayment in progress...");
          while (true) {
            const loanDetails = await getLoanStatus(loanApi, LOAN_ID);
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
  } catch (error) {
    console.log(error);
  }
}

if (require.main === module) {
  main()
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}
