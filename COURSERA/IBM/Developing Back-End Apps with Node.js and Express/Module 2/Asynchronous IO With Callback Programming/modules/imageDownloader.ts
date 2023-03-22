import { ApiResponse } from "./../interfaces/ApiResponse";
import https from "https";
import fs from "fs";

export const downloadImage = (result: ApiResponse, picturePath: string) => {
    try {
        const pictureUrl = result.hdurl;
        console.log(pictureUrl);
        const file = fs.createWriteStream(picturePath);
        https.get(pictureUrl, (response) => {
            response.pipe(file);
        });
    } catch (error) {
        console.error(error);
    }
};
