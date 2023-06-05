export default class Class{
    private _className: string;
    private _nickname: string;
    constructor(className: string, nickname: string){
        if(className === '') throw new Error('Nome da turma não pode ser vazio');
        if(nickname === '') throw new Error('Apelido da turma não pode ser vazio');
        this._className = className;
        this._nickname = nickname;
    }
    get className(){
        return this._className;
    }
    get nickname(){
        return this._nickname;
    }
}