Coursera IBM Course: Developing Back-End Apps with Node.js and Express
Module 2: Asynchronous IO With Callback Programming

Description:
- Learning  the concept of asynchronous callback functions and how to handle inbound HTTP 
requests for a server resource using Node.js.

- I made this code that makes a request to a NASA API to get the Astronomy Picture of the Day (APOD API).
- We get the URL of the picture and save it on the local files. 

Important things learned:
- When making a request, the data is received in chunks, so we need to accumulate the pieces into a 
buffer until we have received the entire response. Once the response is complete, we can then parse
the JSON string into a JavaScript object so we can work with it in our code.





import https from "https";
import http from "http";

const API_KEY = "your-api-key";
const hostname = "api.nasa.gov";
const path = `/planetary/apod?api_key=${API_KEY}`;
const options: http.RequestOptions = {
    hostname: hostname,
    path: path,
};

const req = https.request(options, (res: http.IncomingMessage) => {
    // console.log(`statusCode: ${res.statusCode}`);

    res.on("data", (data) => {
        // process.stdout.write(d);
        const response = JSON.parse(data);
        console.log(JSON.parse(data));
    });
});

req.on("error", (error) => {
    console.error(error);
});

req.end();
