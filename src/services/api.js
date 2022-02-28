import axios from "axios";
import { getToken } from "./auth";

const api = axios.create({
    //baseURL: "https://api-managerfx.herokuapp.com",
    baseURL: "https://managerfx.ogefx.com.br/api",//aws
});

api.interceptors.request.use(async (config) => {
    const token = getToken();
    if (token) {
        config.headers.Authotization = `Bearer ${token}`;
    }
    return config;
});

export default api;
