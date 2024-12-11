const fs = require("fs");
const path = require("path");

// Path to the generated api.ts file
const apiFilePath = path.resolve(__dirname, "./src/service/api.ts");
// Read the file content
let apiFileContent = fs.readFileSync(apiFilePath, "utf-8");

// Use regex to transform `export * from` to `export * as NameApi from`
apiFileContent = apiFileContent.replace(
  /export \* from '\.\/api\/([a-z-]+)-api';/g,
  (match, p1) => {
    const formattedName = p1
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
    return `export * as ${formattedName}Api from './api/${p1}-api';`;
  }
);
// Write the updated content back to the file
fs.writeFileSync(apiFilePath, apiFileContent);

console.log("api.ts exports updated successfully.");
