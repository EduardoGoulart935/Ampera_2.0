import { api } from "../api/ApiLogin.js";

export async function logi(email, password) {
    try {
        const response = await api.post("/auth/login", {
            email,
            password
        });
        
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}