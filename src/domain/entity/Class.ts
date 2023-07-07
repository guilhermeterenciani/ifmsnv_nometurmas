import { randomUUID } from "crypto";
export default class Class{
    private _id: string;
    private _className: string;
    private _nickName: string;
    constructor(className: string, nickName: string,id?:string){
        if(className === '') throw new Error('Nome da turma não pode ser vazio');
        if(nickName === '') throw new Error('Apelido da turma não pode ser vazio');
        this._id = id || randomUUID();
        if(className.length < 12) throw new Error('Nome da turma não pode ser menor que 12 caracteres');
        this._className = className.slice(0,12);
        this._nickName = nickName;
    }
    get id(){
        return this._id;
    }
    get className(){
        return this._className;
    }
    get nickName(){
        return this._nickName;
    }
}