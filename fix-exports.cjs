const fs = require("fs");
const path = require("path");

const paths = ["service", "wallet"];
for (const p of paths) {
  // Path to the generated index.ts file
  const apiFilePath = path.resolve(__dirname, `./src/${p}/api.ts`);
  // Read the file content
  let apiFileContent = fs.readFileSync(apiFilePath, "utf-8");
  // Use regex to transform `export * from` to `export * as NameApi from`
  apiFileContent = apiFileContent.replace(
    /export \* from '\.\/api\/([a-z\-]+)-api';/g,
    (match, p1) => {
      // Capitalize the first letter of the API name
      const apiName = p1
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");
      return `export * as ${apiName}Api from './api/${p1}-api';`;
    }
  );
  // Write the updated content back to the file
  fs.writeFileSync(apiFilePath, apiFileContent);
}
