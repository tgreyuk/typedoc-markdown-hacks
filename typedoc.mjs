const HACK = process.env.USE_THEME_HACKS === "1";

export default {
  entryPoints: ["./src/*"],
  name: "Example",
  outputFileStrategy: "modules",
  mergeReadme: false,
  entryFileName: "index.md",
  disableSources: true,
  excludeScopesInPaths: true,
  useCodeBlocks: true,
  hideBreadcrumbs: true,
  hidePageHeader: true,
  hidePageTitle: true,
  readme: "none",
  plugin: [HACK ? "./theme.mjs" : null, "typedoc-plugin-markdown"].filter(
    Boolean,
  ),
  ...(HACK ? { theme: "theme-with-hacks" } : undefined),
};
