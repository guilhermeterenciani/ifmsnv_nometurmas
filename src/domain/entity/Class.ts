import { randomUUID } from "crypto";
export default class Class{
    private _id: string;
    private _className: string;
    private _nickname: string;
    constructor(className: string, nickName: string,id?:string){
        if(className === '') throw new Error('Nome da turma não pode ser vazio');
        if(nickName === '') throw new Error('Apelido da turma não pode ser vazio');
        this._id = id || randomUUID();
        this._className = className;
        this._nickname = nickName;
    }
    get id(){
        return this._id;
    }
    get className(){
        return this._className;
    }
    get nickname(){
        return this._nickname;
    }
}