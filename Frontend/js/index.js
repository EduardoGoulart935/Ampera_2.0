import { handleRoute } from "./router/router.js";

const path = window.location.pathname.replace(".html", "");

handleRoute(path)