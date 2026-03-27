import { handleRoute } from "./router/router";

const path = window.location.pathname.replace(".html", "");

handleRoute(path)