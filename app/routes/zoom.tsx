import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { KJUR } from "jsrsasign";
import { useRef, useEffect, useState } from "react";

export const loader = async () => {
  // Datos reales de la reunión
  const meetingId = process.env.ZOOM_MEETING_ID!; // Debes agregar esta variable en tu .env
  const meetingPwd = process.env.ZOOM_MEETING_PWD!; // Debes agregar esta variable en tu .env
  const userName = process.env.ZOOM_USER_NAME || "Invitado";
  const userEmail = process.env.ZOOM_USER_EMAIL || "correo@ejemplo.com";

  const expirationSeconds = 3000;
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + expirationSeconds;
  const oHeader = { alg: "HS256", typ: "JWT" };
  const oPayload = {
    appKey: process.env.ZOOM_MEETING_SDK_KEY,
    sdkKey: process.env.ZOOM_MEETING_SDK_KEY,
    mn: meetingId,
    role: 0,
    iat,
    exp,
    tokenExp: exp,
  };

  const sHeader = JSON.stringify(oHeader);
  const sPayload = JSON.stringify(oPayload);
  const sdkJWT = KJUR.jws.JWS.sign(
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
    userEmail,
  });
};

const zoomScripts = [
  "https://source.zoom.us/3.13.2/lib/vendor/react.min.js",
  "https://source.zoom.us/3.13.2/lib/vendor/react-dom.min.js",
  "https://source.zoom.us/3.13.2/lib/vendor/redux.min.js",
  "https://source.zoom.us/3.13.2/lib/vendor/redux-thunk.min.js",
  "https://source.zoom.us/3.13.2/lib/vendor/lodash.min.js",
  "https://source.zoom.us/zoom-meeting-3.13.2.min.js"
];

function loadScriptsSequentially(urls: string[]): Promise<void> {
  return urls.reduce((promise, url) => {
    return promise.then(() =>
      new Promise<void>((resolve, reject) => {
        const script = document.createElement("script");
        script.src = url;
        script.async = false;
        script.onload = () => resolve();
        script.onerror = (e) => reject(e);
        document.body.appendChild(script);
      })
    );
  }, Promise.resolve());
}

export default function ZoomPage() {
  const { signature, clientId, meetingId, meetingPwd, userName, userEmail } =
    useLoaderData<typeof loader>();
  const zoomDivRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scriptsLoaded, setScriptsLoaded] = useState(false);

  useEffect(() => {
    loadScriptsSequentially(zoomScripts)
      .then(() => {
        setScriptsLoaded(true);
        console.log("Todos los scripts de Zoom cargados correctamente");
      })
      .catch((e) => {
        setError("Error al cargar los scripts de Zoom. Verifica tu conexión o intenta más tarde.");
        console.error("Error al cargar los scripts de Zoom:", e);
      });
    // Limpieza: no eliminamos los scripts para evitar recargas innecesarias
  }, []);

  async function startMeeting() {
    if (!scriptsLoaded) return;
    try {
      setIsLoading(true);
      setError(null);
      // @ts-ignore
      const ZoomMtg = window.ZoomMtg;
      if (!ZoomMtg) {
        setError("ZoomMtg no está disponible en window. ¿Se cargaron los scripts?");
        setIsLoading(false);
        return;
      }
      ZoomMtg.setZoomJSLib("https://source.zoom.us/3.13.2/lib", "/av");
      await ZoomMtg.preLoadWasm();
      await ZoomMtg.prepareWebSDK();
      ZoomMtg.i18n.load("es-ES");
      ZoomMtg.i18n.reload("es-ES");
      ZoomMtg.init({
        leaveUrl: window.location.origin + "/zoom",
        patchJsMedia: true,
        success: () => {
          ZoomMtg.join({
            signature,
            sdkKey: clientId,
            meetingNumber: meetingId,
            passWord: meetingPwd,
            userName,
            userEmail,
            success: (success: any) => {
              setIsLoading(false);
              console.log("Unido a la reunión", success);
            },
            error: (error: any) => {
              setError("Error al unirse a la reunión. Por favor, intenta de nuevo.");
              setIsLoading(false);
              console.error("Error al unirse", error);
            },
          });
        },
        error: (error: any) => {
          setError("Error al inicializar Zoom. Por favor, intenta de nuevo.");
          setIsLoading(false);
          console.error("Error al inicializar Zoom", error);
        },
      });
    } catch (error) {
      setError("Error al cargar el SDK de Zoom. Por favor, intenta de nuevo.");
      setIsLoading(false);
      console.error("Error al cargar el SDK de Zoom:", error);
    }
  }

  return (
    <div className="flex flex-col items-center h-screen w-full bg-gray-100">
      <h2 className="text-xl font-semibold mt-4">Clase en Vivo (Client View)</h2>
      <button
        className={`px-4 py-2 rounded mt-4 transition-colors ${
          isLoading || !scriptsLoaded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
        onClick={startMeeting}
        disabled={isLoading || !scriptsLoaded}
      >
        {isLoading ? "Cargando..." : !scriptsLoaded ? "Cargando scripts..." : "Unirse ahora"}
      </button>
      {error && (
        <div className="mt-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}
      <div ref={zoomDivRef} id="zmmtg-root" className="w-full h-full"></div>
    </div>
  );
} 