var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isBotRequest(request.headers.get("user-agent")) || remixContext.isSpaMode ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 66,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 116,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});

// css-bundle-plugin-ns:@remix-run/css-bundle
var cssBundleHref = "/build/css-bundle-VPO5TTVK.css";

// app/root.tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  ...cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : [],
  {
    rel: "stylesheet",
    href: "https://source.zoom.us/3.13.2/css/bootstrap.css"
  },
  {
    rel: "stylesheet",
    href: "https://source.zoom.us/3.13.2/css/react-select.css"
  }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "es", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 36,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 37,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index
});
import { Link } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Index() {
  return /* @__PURE__ */ jsxDEV3("div", { className: "min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12", children: /* @__PURE__ */ jsxDEV3("div", { className: "relative py-3 sm:max-w-xl sm:mx-auto", children: /* @__PURE__ */ jsxDEV3("div", { className: "relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20", children: /* @__PURE__ */ jsxDEV3("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ jsxDEV3("div", { className: "divide-y divide-gray-200", children: /* @__PURE__ */ jsxDEV3("div", { className: "py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7", children: [
    /* @__PURE__ */ jsxDEV3("h1", { className: "text-3xl font-bold text-center mb-8", children: "Bienvenido a la App de Zoom" }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV3(
      Link,
      {
        to: "/zoom",
        className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
        children: "Ir a la Reuni\xF3n"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.tsx",
        lineNumber: 15,
        columnNumber: 19
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 14,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 10,
    columnNumber: 15
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 8,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 7,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/zoom.tsx
var zoom_exports = {};
__export(zoom_exports, {
  default: () => ZoomPage,
  loader: () => loader
});
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { KJUR } from "jsrsasign";
import { useRef, useEffect, useState } from "react";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
var loader = async () => {
  let meetingId = process.env.ZOOM_MEETING_ID, meetingPwd = process.env.ZOOM_MEETING_PWD, userName = process.env.ZOOM_USER_NAME || "Invitado", userEmail = process.env.ZOOM_USER_EMAIL || "correo@ejemplo.com", expirationSeconds = 3e3, iat = Math.floor(Date.now() / 1e3), exp = iat + expirationSeconds, oHeader = { alg: "HS256", typ: "JWT" }, oPayload = {
    appKey: process.env.ZOOM_MEETING_SDK_KEY,
    sdkKey: process.env.ZOOM_MEETING_SDK_KEY,
    mn: meetingId,
    role: 0,
    iat,
    exp,
    tokenExp: exp
  }, sHeader = JSON.stringify(oHeader), sPayload = JSON.stringify(oPayload), sdkJWT = KJUR.jws.JWS.sign(
    "HS256",
    sHeader,
    sPayload,
    process.env.ZOOM_MEETING_SDK_SECRET
  );
  return json({
    signature: sdkJWT,
    clientId: process.env.ZOOM_MEETING_SDK_KEY,
    meetingId,
    meetingPwd,
    userName,
    userEmail
  });
}, zoomScripts = [
  "https://source.zoom.us/3.13.2/lib/vendor/react.min.js",
  "https://source.zoom.us/3.13.2/lib/vendor/react-dom.min.js",
  "https://source.zoom.us/3.13.2/lib/vendor/redux.min.js",
  "https://source.zoom.us/3.13.2/lib/vendor/redux-thunk.min.js",
  "https://source.zoom.us/3.13.2/lib/vendor/lodash.min.js",
  "https://source.zoom.us/zoom-meeting-3.13.2.min.js"
];
function loadScriptsSequentially(urls) {
  return urls.reduce((promise, url) => promise.then(
    () => new Promise((resolve, reject) => {
      let script = document.createElement("script");
      script.src = url, script.async = !1, script.onload = () => resolve(), script.onerror = (e) => reject(e), document.body.appendChild(script);
    })
  ), Promise.resolve());
}
function ZoomPage() {
  let { signature, clientId, meetingId, meetingPwd, userName, userEmail } = useLoaderData(), zoomDivRef = useRef(null), [isLoading, setIsLoading] = useState(!1), [error, setError] = useState(null), [scriptsLoaded, setScriptsLoaded] = useState(!1);
  useEffect(() => {
    loadScriptsSequentially(zoomScripts).then(() => {
      setScriptsLoaded(!0), console.log("Todos los scripts de Zoom cargados correctamente");
    }).catch((e) => {
      setError("Error al cargar los scripts de Zoom. Verifica tu conexi\xF3n o intenta m\xE1s tarde."), console.error("Error al cargar los scripts de Zoom:", e);
    });
  }, []);
  async function startMeeting() {
    if (scriptsLoaded)
      try {
        setIsLoading(!0), setError(null);
        let ZoomMtg = window.ZoomMtg;
        if (!ZoomMtg) {
          setError("ZoomMtg no est\xE1 disponible en window. \xBFSe cargaron los scripts?"), setIsLoading(!1);
          return;
        }
        ZoomMtg.setZoomJSLib("https://source.zoom.us/3.13.2/lib", "/av"), await ZoomMtg.preLoadWasm(), await ZoomMtg.prepareWebSDK(), ZoomMtg.i18n.load("es-ES"), ZoomMtg.i18n.reload("es-ES"), ZoomMtg.init({
          leaveUrl: window.location.origin + "/zoom",
          patchJsMedia: !0,
          success: () => {
            ZoomMtg.join({
              signature,
              sdkKey: clientId,
              meetingNumber: meetingId,
              passWord: meetingPwd,
              userName,
              userEmail,
              success: (success) => {
                setIsLoading(!1), console.log("Unido a la reuni\xF3n", success);
              },
              error: (error2) => {
                setError("Error al unirse a la reuni\xF3n. Por favor, intenta de nuevo."), setIsLoading(!1), console.error("Error al unirse", error2);
              }
            });
          },
          error: (error2) => {
            setError("Error al inicializar Zoom. Por favor, intenta de nuevo."), setIsLoading(!1), console.error("Error al inicializar Zoom", error2);
          }
        });
      } catch (error2) {
        setError("Error al cargar el SDK de Zoom. Por favor, intenta de nuevo."), setIsLoading(!1), console.error("Error al cargar el SDK de Zoom:", error2);
      }
  }
  return /* @__PURE__ */ jsxDEV4("div", { className: "flex flex-col items-center h-screen w-full bg-gray-100", children: [
    /* @__PURE__ */ jsxDEV4("h2", { className: "text-xl font-semibold mt-4", children: "Clase en Vivo (Client View)" }, void 0, !1, {
      fileName: "app/routes/zoom.tsx",
      lineNumber: 145,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV4(
      "button",
      {
        className: `px-4 py-2 rounded mt-4 transition-colors ${isLoading || !scriptsLoaded ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`,
        onClick: startMeeting,
        disabled: isLoading || !scriptsLoaded,
        children: isLoading ? "Cargando..." : scriptsLoaded ? "Unirse ahora" : "Cargando scripts..."
      },
      void 0,
      !1,
      {
        fileName: "app/routes/zoom.tsx",
        lineNumber: 146,
        columnNumber: 7
      },
      this
    ),
    error && /* @__PURE__ */ jsxDEV4("div", { className: "mt-4 p-4 bg-red-100 text-red-700 rounded", children: error }, void 0, !1, {
      fileName: "app/routes/zoom.tsx",
      lineNumber: 158,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV4("div", { ref: zoomDivRef, id: "zmmtg-root", className: "w-full h-full" }, void 0, !1, {
      fileName: "app/routes/zoom.tsx",
      lineNumber: 162,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/zoom.tsx",
    lineNumber: 144,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-PMNOWS7I.js", imports: ["/build/_shared/chunk-O4BRYNJ4.js", "/build/_shared/chunk-AF776YGS.js", "/build/_shared/chunk-MMAI7MGE.js", "/build/_shared/chunk-XGOTYLZ5.js", "/build/_shared/chunk-U4FRFQSK.js", "/build/_shared/chunk-7M6SC7J5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MLFLFQ4F.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-BCZ4IZJO.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/zoom": { id: "routes/zoom", parentId: "root", path: "zoom", index: void 0, caseSensitive: void 0, module: "/build/routes/zoom-ZQJ54CAZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "dd1b195d", hmr: { runtime: "/build/_shared/chunk-MMAI7MGE.js", timestamp: 1749600543258 }, url: "/build/manifest-DD1B195D.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1, v3_routeConfig: !1, v3_singleFetch: !1, v3_lazyRouteDiscovery: !1, unstable_optimizeDeps: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/zoom": {
    id: "routes/zoom",
    parentId: "root",
    path: "zoom",
    index: void 0,
    caseSensitive: void 0,
    module: zoom_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
