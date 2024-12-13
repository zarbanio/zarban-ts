const fs = require("fs");
const path = require("path");

const paths = ["service", "wallet"];
for (const p of paths) {
  // Path to the generated api.ts file
  const apiFilePath = path.resolve(__dirname, `./src/${p}/src/apis/index.ts`);
  // Read the file content
  let apiFileContent = fs.readFileSync(apiFilePath, "utf-8");
  // Use regex to transform `export * from` to `export * as NameApi from`
  apiFileContent = apiFileContent.replace(
    /export \* from ['"]\.\/([A-Za-z]+)Api['"];/g,
    (match, p1) => {
      return `export * as ${p1}Api from "./${p1}Api";`;
    }
  );
  // Write the updated content back to the file
  fs.writeFileSync(apiFilePath, apiFileContent);
}
