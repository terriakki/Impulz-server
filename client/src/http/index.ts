import axios from "axios";
import keycloak from "../keycloak.ts";

const $api = axios.create({
    baseURL: "https://api.impulz.online/api"
})

const $authApi = axios.create({
    baseURL: "https://api.impulz.online/api"
})

$authApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${keycloak.token}`
    return config;
})

export {
    $api,
    $authApi
}
