if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),d={module:{uri:t},exports:c,require:o};s[t]=Promise.all(r.map((e=>d[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";importScripts("/demo-app/firebase-messaging-sw.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-D8b4DHJx.css",revision:null},{url:"assets/index-hiCTtJZ_.js",revision:null},{url:"firebase-messaging-sw.js",revision:"e5fbc44956444c308249ccbacdd755b2"},{url:"index.html",revision:"2baab8c6ff1c4fd724c38ea5e2b0b982"},{url:"registerSW.js",revision:"d8fc69c7fc5adcceb6d6784357dbc230"},{url:"manifest.webmanifest",revision:"23119e19bdee9930d74ce470b0710fc5"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
