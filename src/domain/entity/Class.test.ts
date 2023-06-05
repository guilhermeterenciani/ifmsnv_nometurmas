import {it,test,expect} from 'vitest'
import Class from './Class'

it('shoud create a class',()=>{
    const className = '20231098105BIN15KNV-COINF-Frameworks 1A';
    const nickname = '1021-B';
    const class_ = new Class(className,nickname);
    expect(class_.className).toBe(className);
    expect(class_.nickname).toBe(nickname);
})
it('shoud not create a class without className',()=>{	
    const className = '';
    const nickname = '1021-B';
    expect(()=>new Class(className,nickname)).toThrowError('Nome da turma não pode ser vazio');
})
it('shoud not create a class without nickname',()=>{
    const className = '20231098105BIN15KNV-COINF-Frameworks 1A';
    const nickname = '';
    expect(()=>new Class(className,nickname)).toThrowError('Apelido da turma não pode ser vazio');
})
it('shoud not create a class without className and nickname',()=>{
    const className = '';
    const nickname = '';
    expect(()=>new Class(className,nickname)).toThrowError('Nome da turma não pode ser vazio');
})