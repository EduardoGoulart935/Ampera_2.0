import { requireAuth, redirecIfAuthenticated } from "./guard";

const routes = {
    "/": () => redirecIfAuthenticated(),
    "/login": () => redirecIfAuthenticated(),
    "/home": () => requireAuth()
};

export function handleRoute(path) {
    const route = routes[path];

    if(route) {
        return route();
    } else {
    return console.error("Undefined Route");
    }
}