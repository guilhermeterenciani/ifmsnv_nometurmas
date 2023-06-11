import { InMemoryClassRepository } from './../../infra/repository/InMemoryClassRepository';
import {it,expect} from 'vitest'
import RegisterClassNickname from './RegisterClassNickname'
const inMemoryClassRepository = new InMemoryClassRepository();
it('should register a class nickname',async ()=>{
    const input = {
        id: '1',
        className: '20231098105A',
        nickname: 'Turma 1021-A'
    }
    
    const registerClassNickname = new RegisterClassNickname(inMemoryClassRepository);
    const output = await registerClassNickname.execute(input);
    expect(output).toEqual(input);
})
it('should register another class nickname', async ()=>{
    const input = {
        className: '20231098105B',
        nickname: 'Turma 1021-B'
    }
    const registerClassNickname = new RegisterClassNickname(inMemoryClassRepository);
    const {className,nickname} = await registerClassNickname.execute(input);
    expect({className,nickname}).toEqual(input);
})