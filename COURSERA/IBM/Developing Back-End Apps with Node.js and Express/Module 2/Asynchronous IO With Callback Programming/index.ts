import { makeRequest } from "./modules/nasaApi";
import { downloadImage } from "./modules/imageDownloader";

(async () => {
    try {
        const result = await makeRequest();
        const url = result.hdurl;
        const fileName = url?.split("/")?.pop();
        console.log(`File name: ${fileName}`);
        const picturePath = `./assets/${fileName}`;
        console.log(`Picture Path: ${picturePath}`);
        downloadImage(result, picturePath);
    } catch (error) {
        console.error(error);
    }
})();
