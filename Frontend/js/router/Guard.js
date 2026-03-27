import authToken from "../store/AuthStore";

export function requireAuth() {
    if(!authToken.isAuthenticated) {
        window.location.href = "/login.html";
    }
    this.redirecIfAuthenticated();
}

export function redirecIfAuthenticated() {
    if(!!authToken.isAuthenticated) {
        window.location.href = "/home.html";
    }
    this.requireAuth();
}
