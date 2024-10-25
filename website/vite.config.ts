import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { Path } from "jsr:@sys/std";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
  },
  /**
   * REF: Vite Docs:
   * https://vitejs.dev/config/shared-options.html#resolve-alias
   */
  resolve: {
    alias: {
      "@scope/simple-login": Path.resolve("./simple-login/main.ts"),
    },
  },
});
