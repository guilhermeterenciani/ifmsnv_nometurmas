
import express,{Request,Response} from 'express';
import { GetNicknameByClassName } from '../../../application/usecase/GetNicknameByClassName';
import { InMemoryClassRepository } from './../../repository/InMemoryClassRepository';
import RegisterClassNickname from '../../../application/usecase/RegisterClassNickname';

let repository = new InMemoryClassRepository();
const app = express();
app.use(express.json());

app.get('/', (request:Request, response:Response) => {
    return response.status(200).json({message: 'Server works!'});
});

app.post('/class', async(request:Request, response:Response) => {
    let registerClassNickname = new RegisterClassNickname(repository);
    let output = await registerClassNickname.execute(request.body);
    return response.status(201).json(output);
})
app.get('/classbyname/:className', async (request:Request, response:Response) => {
    let getNicknameByClassName = new GetNicknameByClassName(repository);
    try{
        let output = await getNicknameByClassName.execute({className: request.params.className})
        return response.status(200).json(output);
    }catch(err){
        return response.status(404).json({error: err.message});
    }
})

app.listen(3333, () => {
    console.log('Server started on port 3333!');
    }
);