import * as fs from "fs";

const svgFolder = "./src/assets/svg";
const destinationFolder = "./src/components/svg";
const files = fs.readdirSync(svgFolder);

console.log(files);

let width: string | undefined;
let height: string | undefined;
let viewBox: string | undefined;
let svgData: string | undefined;

const reWidth = /width="\d+"/;
const reHeight = /height="\d+"/;
const reViewBox = /viewBox="[\d ]+"/;
const reSVG = /(?<=<svg[\D\d]+>)(?<svgData>[\D\d^]*)(?=<\/svg>)/;

files.forEach(fileName => {
  const svgFilePath = `${svgFolder}/${fileName}`;
  const outputPath = `${destinationFolder}/Icon${fileName.replace(
    ".svg",
    ".vue"
  )}`;

  const text = fs.readFileSync(svgFilePath, "utf-8");
  let match: RegExpMatchArray | null = text.match(reWidth) ?? [];
  width = match[0];
  match = text.match(reHeight) ?? [];
  height = match[0];
  match = text.match(reViewBox) ?? [];
  viewBox = match[0];
  match = text.match(reSVG);

  svgData = match?.groups?.svgData;

  const template = `
<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    ${width}
    ${height}
    ${viewBox}
    :fill="iconColor"
    :aria-labelledby="iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ iconName }} icon</title>
    ${svgData}
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "${fileName.replace(".svg", "")}",
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style scoped></style>
`;

  fs.writeFileSync(outputPath, template);
});
