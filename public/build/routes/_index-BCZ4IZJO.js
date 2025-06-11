import {
  Link
} from "/build/_shared/chunk-AF776YGS.js";
import {
  createHotContext
} from "/build/_shared/chunk-MMAI7MGE.js";
import {
  require_jsx_dev_runtime
} from "/build/_shared/chunk-XGOTYLZ5.js";
import "/build/_shared/chunk-U4FRFQSK.js";
import "/build/_shared/chunk-7M6SC7J5.js";
import "/build/_shared/chunk-UWV35TSL.js";
import {
  __toESM
} from "/build/_shared/chunk-PNG5AS42.js";

// app/routes/_index.tsx
var import_jsx_dev_runtime = __toESM(require_jsx_dev_runtime(), 1);
if (!window.$RefreshReg$ || !window.$RefreshSig$ || !window.$RefreshRuntime$) {
  console.warn("remix:hmr: React Fast Refresh only works when the Remix compiler is running in development mode.");
} else {
  prevRefreshReg = window.$RefreshReg$;
  prevRefreshSig = window.$RefreshSig$;
  window.$RefreshReg$ = (type, id) => {
    window.$RefreshRuntime$.register(type, '"app/routes/_index.tsx"' + id);
  };
  window.$RefreshSig$ = window.$RefreshRuntime$.createSignatureFunctionForTransform;
}
var prevRefreshReg;
var prevRefreshSig;
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/routes/_index.tsx"
  );
  import.meta.hot.lastModified = "1749597761375.0479";
}
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative py-3 sm:max-w-xl sm:mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "max-w-md mx-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "divide-y divide-gray-200", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("h1", { className: "text-3xl font-bold text-center mb-8", children: "Bienvenido a la App de Zoom" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 29,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Link, { to: "/zoom", className: "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded", children: "Ir a la Reuni\xF3n" }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 33,
      columnNumber: 19
    }, this) }, void 0, false, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 32,
      columnNumber: 17
    }, this)
  ] }, void 0, true, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 28,
    columnNumber: 15
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 27,
    columnNumber: 13
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 26,
    columnNumber: 11
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 25,
    columnNumber: 9
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, false, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 23,
    columnNumber: 10
  }, this);
}
_c = Index;
var _c;
$RefreshReg$(_c, "Index");
window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;
export {
  Index as default
};
//# sourceMappingURL=/build/routes/_index-BCZ4IZJO.js.map
