import fs from "fs";
const svgFolder = "./src/assets/svg";
const destinationFolder = "./src/components/icons";
const files = fs.readdirSync(svgFolder);
console.log(files);

files.forEach(fileName => {
  const svgFilePath = `${svgFolder}/${fileName}`;
  const outputPath = `${destinationFolder}/Icon${fileName.replace(
    ".svg",
    ".vue"
  )}`;

  const text = fs.readFileSync(svgFilePath, "utf-8").split("\n");
  console.log(text, fileName);

  let outputString = "<template>\n<g>\n";
  const end = text.length - 2;
  text.slice(1, end).forEach(line => {
    outputString += line;
    outputString += "\n";
  });
  outputString += "</g>\n</template>";

  fs.writeFileSync(outputPath, outputString);
});
