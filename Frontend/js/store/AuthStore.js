const authToken = {
    getToken() {
        return localStorage.getItem("token");
    },
    isAuthenticated() {
        return !!this.getToken();
    },
    setToken() {
        return localStorage.setItem("token", token);
    },
    logout() {
        return localStorage.removeItem("token");
    }
};

export default authToken;