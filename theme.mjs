import { MarkdownTheme, MarkdownThemeContext } from "typedoc-plugin-markdown";
import { codeBlock } from "./node_modules/typedoc-plugin-markdown/dist/libs/markdown/code-block.js";
import { unEscapeChars } from "./node_modules/typedoc-plugin-markdown/dist/libs/utils/un-escape-chars.js";

const transform = (partials, key, fn) => ({
  [key]: (model, ...args) => fn(partials[key](model, ...args), model),
});

const mapParts = (res, map, delim = "\n") =>
  res.split(delim).map(map).join(delim);

const codeBlockIfContainsNewline = (res) =>
  res.includes("\n") ? codeBlock(res) : res;

const rewrapInlineCodeIfNeeded = (res) => {
  if (
    res.startsWith("\\`") &&
    res.endsWith("\\`") &&
    res.match(/`/g)?.length === 2
  ) {
    return rewrapInlineCode(res);
  }
  return null;
};

const isUnwrappedPredicate = (res, model) =>
  !res.startsWith("`") && res.endsWith("`") && model.type?.type === "predicate";

const rewrapInlineCode = (res) => `${"`` "}${unEscapeChars(res)}${" ``"}`;

export function load(app) {
  app.renderer.defineTheme(
    "theme-with-hacks",
    class extends MarkdownTheme {
      getRenderContext(page) {
        const ctx = new MarkdownThemeContext(
          this,
          page,
          this.application.options,
        );
        const p = ctx.partials;
        ctx.partials = {
          ...p,
          ...transform(p, "typeAndParent", codeBlockIfContainsNewline),
          ...transform(p, "indexSignature", codeBlockIfContainsNewline),
          ...transform(p, "parametersList", (res) =>
            mapParts(res, (l) => rewrapInlineCodeIfNeeded(l) ?? l),
          ),
          ...transform(p, "signatureReturns", (res, model) =>
            mapParts(
              res,
              (l) =>
                rewrapInlineCodeIfNeeded(l) ??
                (isUnwrappedPredicate(l, model)
                  ? rewrapInlineCode(l)
                  : mapParts(
                      l,
                      (union) => rewrapInlineCodeIfNeeded(union) ?? union,
                      " \\| ",
                    )),
            ),
          ),
        };
        return ctx;
      }
    },
  );
}
