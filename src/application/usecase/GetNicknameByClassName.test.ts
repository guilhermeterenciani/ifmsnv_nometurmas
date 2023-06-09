import {it,expect} from 'vitest'
import {GetNicknameByClassName} from './GetNicknameByClassName'
import { InMemoryClassRepository } from './../../infra/repository/InMemoryClassRepository';
import Class from '../../domain/entity/Class';
const inMemoryClassRepository = new InMemoryClassRepository();
it('should get a class nickname',async ()=>{
    const input = {
        className: '20231098105A',
        nickName: 'Turma 1021-A'
    }
    const classInput = new Class(input.className,input.nickName)
    await inMemoryClassRepository.save(classInput);
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