import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: "../../packages/router/src/routes",
      generatedRouteTree: "../../packages/router/src/routeTree.gen.ts",
      routeFileIgnorePrefix: "-",
      quoteStyle: "single",
    }),
  ],
  server: {
    port: 3000,
  },
  preview: {
    port: 3000,
  },
});
