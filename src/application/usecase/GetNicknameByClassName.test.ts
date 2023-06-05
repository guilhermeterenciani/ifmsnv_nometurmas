import {it,expect} from 'vitest'
import {GetNicknameByClassName} from './GetNicknameByClassName'
import { InMemoryClassRepository } from './../../infra/repository/InMemoryClassRepository';
const inMemoryClassRepository = new InMemoryClassRepository();
it('should get a class nickname',async ()=>{
    const input = {
        className: '20231098105A',
        nickname: 'Turma 1021-A'
    }
    await inMemoryClassRepository.save(input);
    const getNicknameByClassName = new GetNicknameByClassName(inMemoryClassRepository);
    const output = await getNicknameByClassName.execute(input);
    expect(output).toEqual(input);
})
it('should throw an error when class does not exist', async ()=>{
    const input = {
        className: '20231098105C',
    }
    const getNicknameByClassName = new GetNicknameByClassName(inMemoryClassRepository);
    try{
        await getNicknameByClassName.execute(input);
    }catch(err){
        expect(err.message).toEqual('Turma não encontrada');
    }
})