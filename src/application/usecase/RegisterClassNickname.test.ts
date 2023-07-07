import { InMemoryClassRepository } from './../../infra/repository/InMemoryClassRepository';
import {it,expect} from 'vitest'
import RegisterClassNickname from './RegisterClassNickname'
const inMemoryClassRepository = new InMemoryClassRepository();
it('should register a class nickname',async ()=>{
    const input = {
        id: '1',
        className: '20231098105A',
        nickName: 'Turma 1021-A'
    }
    
    const registerClassNickname = new RegisterClassNickname(inMemoryClassRepository);
    const output = await registerClassNickname.execute(input);
    expect(output).toEqual(input);
})
it('should register another class nickname', async ()=>{
    const input = {
        className: '20231098105B',
        nickName: 'Turma 1021-B'
    }
    const registerClassNickname = new RegisterClassNickname(inMemoryClassRepository);
    const {className,nickName} = await registerClassNickname.execute(input);
    expect({className,nickName}).toEqual(input);
})