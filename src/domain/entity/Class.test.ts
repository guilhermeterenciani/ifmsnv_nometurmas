import {it,test,expect} from 'vitest'
import Class from './Class'

it('shoud create a class',()=>{
    const className = '20231098105BIN15KNV-COINF-Frameworks 1A';
    const nickName = '1021-B';
    const class_ = new Class(className,nickName);
    expect(class_.className).toBe("20231098105B");
    expect(class_.nickName).toBe(nickName);
})
it('shoud not create a class without className',()=>{	
    const className = '';
    const nickname = '1021-B';
    expect(()=>new Class(className,nickname)).toThrowError('Nome da turma não pode ser vazio');
})
it('shoud not create a class without nickname',()=>{
    const className = '20231098105BIN15KNV-COINF-Frameworks 1A';
    const nickName = '';
    expect(()=>new Class(className, nickName)).toThrowError('Apelido da turma não pode ser vazio');
})
it('shoud not create a class without className and nickname',()=>{
    const className = '';
    const nickName = '';
    expect(()=>new Class(className,nickName)).toThrowError('Nome da turma não pode ser vazio');
})

it('should convert className for twelves letters ',()=>{
    const className = '20231098105BIN15KNV-COINF-Frameworks 1A';
    const nickName = '1021-B';
    const class_ = new Class(className,nickName);
    expect(class_.className).toBe('20231098105B');
})
it('should className throw an error when className is less than 12 letters',()=>{
    const className = '20231098105';
    const nickName = '1021-B';
    expect(()=>new Class(className,nickName)).toThrowError('Nome da turma não pode ser menor que 12 caracteres');
})