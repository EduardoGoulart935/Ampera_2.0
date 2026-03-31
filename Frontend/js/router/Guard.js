import  authToken  from "../store/AuthStore.js";

export function requireAuth() {
    if(!authToken.isAuthenticated) {
        window.location.href = "/login.html";
    }
}

export function redirecIfAuthenticated() {
    if(!!authToken.isAuthenticated) {
        window.location.href = "/home.html";
    }
}
