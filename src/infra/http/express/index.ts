import express,{Request,Response} from 'express';

const app = express();
app.use(express.json());

app.get('/', (request:Request, response:Response) => {
    return response.status(200).json({message: 'Server works!'});
});

app.listen(3333, () => {
    console.log('Server started on port 3333!');
    }
);