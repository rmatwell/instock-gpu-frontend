import axios from "axios";

export default axios.create({
    baseURL: "https://instock-gpu.azurewebsites.net/api/listings",

    headers: {
        "Accept": "application/csv,text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "origin, content-type, X-Requested-With",
    }
});