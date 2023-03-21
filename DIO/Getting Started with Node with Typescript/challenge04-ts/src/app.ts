import express, { Request, Response, urlencoded } from 'express';
import { router } from './routes';

const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(router)

app.get('/', (request: Request, response: Response) => {
    return response.status(200).json({ message: 'DioBank API' })
})

export default app