import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { stripVTControlCharacters } from "node:util";
import { diff } from "jest-diff";
import prettier from "prettier";

const updateFile = async (file, fn) =>
  writeFileSync(
    file,
    await prettier.format(fn(readFileSync(file).toString()), {
      filepath: file,
      ...(await prettier.resolveConfig(file)),
    }),
  );

const output = readdirSync("./docs", { withFileTypes: true })
  .filter((d) => d.name.endsWith(".md") && d.name !== "index.md")
  .flatMap((doc) => [
    "=".repeat(40),
    doc.name,
    "=".repeat(40),
    diff(
      readFileSync(join(doc.parentPath, doc.name)).toString(),
      readFileSync(join("./docs-with-hacks", doc.name)).toString(),
      {
        aAnnotation: "Original",
        bAnnotation: "Hacked",
        contextLines: 1,
        expand: false,
        omitAnnotationLines: false,
      },
    ),
  ])
  .join("\n")
  .trim();

await updateFile("./README.md", (contents) =>
  contents.replace(
    /^`{3,}patch$[\s\S]*^`{3,}$/m,
    ["````patch", stripVTControlCharacters(output), "````"].join("\n"),
  ),
);

console.log(output);
