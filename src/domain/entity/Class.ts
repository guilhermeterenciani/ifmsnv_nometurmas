import { randomUUID } from "crypto";
export default class Class{
    private _id: string;
    private _className: string;
    private _nickname: string;
    constructor(id:string|null, className: string, nickname: string){
        if(className === '') throw new Error('Nome da turma não pode ser vazio');
        if(nickname === '') throw new Error('Apelido da turma não pode ser vazio');
        this._id = id || randomUUID();
        this._className = className;
        this._nickname = nickname;
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