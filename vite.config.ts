import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/demo-app",
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },

      registerType: "autoUpdate",
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.ts",

      manifest: {
        name: "Demo App",
        theme_color: "#000000",
        icons: [
          {
            src: "./qube-favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
      workbox: {
        importScripts: ["./demo-app/firebase-messaging-sw.js"],
      },
    }),
  ],
});
