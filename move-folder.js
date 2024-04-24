const fs = require("fs");
const path = require("path");

const sourceFolder = path.join(__dirname, "node_modules", "@learnship/productivity-tools", "components");
const destinationFolder = path.join(__dirname, "./src/tool-js");

fs.renameSync(sourceFolder, destinationFolder);

console.log("Folder moved successfully!");