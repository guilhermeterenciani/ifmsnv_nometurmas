import {ClassRepository} from "../../domain/adapters/ClassRepository";

export class GetNicknameByClassName {
    constructor(readonly classRepository: ClassRepository) {
    }
    async execute(input: Input): Promise<Output> {
        const class_ = await this.classRepository.findByClassName(input.className);
        if(!class_) throw new Error('Turma não encontrada')
        return {nickname: class_.nickname, className: class_.className};
    }
}

type Input = {
    className: string;
}
type Output={
    nickname: string;
    className: string;
};