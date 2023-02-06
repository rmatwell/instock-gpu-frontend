import axios from "axios";

export default axios.create({
    baseURL: "https://instock-gpu.azurewebsites.net/api/listings/get-listings/current-date",
    headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Reqested-With",
        "Content-type": "application/json"
    }
});