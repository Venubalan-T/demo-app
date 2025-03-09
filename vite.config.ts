import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },

      registerType: "autoUpdate",
      strategies: "generateSW",
      workbox: {
        importScripts: ["/firebase-messaging-sw.js"],
        runtimeCaching: [
          {
            urlPattern: new RegExp("\\.well-known/assetlinks\\.json$"),
            handler: "NetworkOnly",
            options: {
              cacheName: "asset-links-json",
            },
          },
        ],
        navigateFallback: "/index.html",
        navigateFallbackDenylist: [/^\/.well-known\//],
      },

      manifest: {
        name: "Demo App",
        theme_color: "#000000",
        icons: [
          {
            src: "/qube-favicon.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
