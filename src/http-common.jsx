import axios from "axios";

export default axios.create({
    // baseURL: "https://instock-gpu.azurewebsites.net/api/v1/listings",
    baseURL: "http://localhost:8080/api/v1/listings",

    headers: {
        "Accept": "application/csv,text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "origin, content-type, X-Requested-With",
    }
});