import { precacheAndRoute, cleanupOutdatedCaches } from "workbox-precaching";
import { registerRoute, Route } from "workbox-routing";
import { StaleWhileRevalidate } from "workbox-strategies";

declare let self: ServiceWorkerGlobalScope;

// Register precache routes (static cache)
precacheAndRoute(self.__WB_MANIFEST || []);

// Clean up old cache
cleanupOutdatedCaches();

const cacheImages = new Route(
  ({ request }) => request.destination === "image",
  new StaleWhileRevalidate()
);

registerRoute(cacheImages);
