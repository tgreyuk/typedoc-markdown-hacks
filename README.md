```sh
# install deps
npm install
# run example which will build two folders and diff them
npm run example
```

````patch
========================================
asserts-template-literal.md
========================================
- Original
+ Hacked

@@ -32,3 +32,3 @@

- \`sha512-$\{string\}\`
+ `` `sha512-${string}` ``

@@ -50,3 +50,3 @@

- asserts i is \`sha512-$\{string\}\`
+ `` asserts i is `sha512-${string}` ``

@@ -104,3 +104,3 @@

- i is \`sha512-$\{string\}\`
+ `` i is `sha512-${string}` ``

========================================
constructor-override.md
========================================
- Original
+ Hacked

@@ -22,3 +22,4 @@

- `LRUCache<
+ ```ts
+ LRUCache<
    CacheFetchContext,
@@ -26,3 +27,4 @@
    CacheFetchContext
- >.constructor`
+ >.constructor
+ ```

========================================
index-signature.md
========================================
- Original
+ Hacked

@@ -10,9 +10,11 @@

-  \[`key`:
-   \| \`git·$\{string\}·$\{string\} $\{string\}\`
-   \| \`remote·$\{string\}·$\{string\} $\{string\}\`\]:
-   \| \`dev git·$\{string\}·$\{string\}\`
-   \| \`dev remote·$\{string\}·$\{string\}\`
-   \| \`prod git·$\{string\}·$\{string\}\`
-   \| \`prod remote·$\{string\}·$\{string\}\`
+ ```ts
+  [key:
+   | `git·${string}·${string} ${string}`
+   | `remote·${string}·${string} ${string}`]:
+   | `dev git·${string}·${string}`
+   | `dev remote·${string}·${string}`
+   | `prod git·${string}·${string}`
+   | `prod remote·${string}·${string}`
+ ```
````
