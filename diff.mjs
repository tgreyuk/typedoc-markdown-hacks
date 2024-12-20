import { readdirSync, readFileSync } from "fs";
import { resolve, join } from "path";
import { diff } from "jest-diff";

const docs = readdirSync("./docs", { withFileTypes: true }).filter(
  (d) => d.name.endsWith(".md") && d.name !== "index.md",
);

const docsWithHacks = resolve("./docs-with-hacks");

for (const doc of docs) {
  const original = readFileSync(join(doc.parentPath, doc.name), {
    encoding: "utf-8",
  });
  const hacked = readFileSync(join(docsWithHacks, doc.name), {
    encoding: "utf-8",
  });
  console.log("=".repeat(40));
  console.log(doc.name);
  console.log("=".repeat(40));
  console.log(
    diff(original, hacked, {
      aAnnotation: "Original",
      bAnnotation: "Hacked",
      contextLines: 1,
      expand: false,
      omitAnnotationLines: false,
    }),
  );
}
