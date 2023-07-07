import express,{Request,Response} from 'express';

const app = express();
app.use(express.json());

app.get('/', (request:Request, response:Response) => {
    return response.status(200).json({message: 'Server works!'});
});

app.post('/class', (request:Request, response:Response) => {
    return response.status(201).json(request.body);
})
app.get('/classbyname/:className', (request:Request, response:Response) => {
    //TODO: implementar o método getClassByName
    //return response.status(200).json(ClassController.getClassByName(request.params.className));
})

app.listen(3333, () => {
    console.log('Server started on port 3333!');
    }
);