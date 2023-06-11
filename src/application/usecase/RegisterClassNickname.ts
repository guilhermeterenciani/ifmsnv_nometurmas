import { ClassRepository } from '../../domain/adapters/ClassRepository';
import Class from '../../domain/entity/Class'

export default class RegisterClassNickname{
    constructor(private classRepository: ClassRepository){}
    async execute(input: Input): Promise<Output>{
        const class_ = new Class(input.className,input.nickname,input.id);
        const output = await this.classRepository.save({id: class_.id, nickname: class_.nickname, className: class_.className})
        return output;
    }
}
interface Input{
    id?: string;
    className: string;
    nickname: string;
}
interface Output{
    className: string;
    nickname: string;
}