import https from "https";
import { ApiResponse } from "./../interfaces/ApiResponse";

require("dotenv").config();

const API_KEY = process.env.API_KEY || "";
const hostname = "api.nasa.gov";
const path = `/planetary/apod?api_key=${API_KEY}`;

const options = {
    hostname,
    path,
};

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";

export const makeRequest = (): Promise<ApiResponse> => {
    return new Promise<ApiResponse>((resolve, reject) => {
        let buffer = "";
        const req = https.request(options, (res) => {
            res.on("data", (chunk) => {
                buffer += chunk;
            });
            res.on("end", () => {
                const result = JSON.parse(buffer);
                resolve(result);
            });
        });

        req.on("error", (error) => {
            reject(error);
        });
        req.end();
    });
};
