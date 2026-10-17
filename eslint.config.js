import { defineConfig, globalIgnores } from "eslint/config";
import js from "@eslint/js";
import tseslint from "typescript-eslint";

export default defineConfig(
  globalIgnores(["dist/", "node_modules/", "coverage/"]),
  js.configs.recommended,
  tseslint.configs.recommended,
);
