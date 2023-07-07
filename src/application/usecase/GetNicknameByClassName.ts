import {ClassRepository} from "../../domain/adapters/ClassRepository";

export class GetNicknameByClassName {
    constructor(readonly classRepository: ClassRepository) {
    }
    async execute(input: Input): Promise<Output> {
        const output = await this.classRepository.findByClassName(input.className);
        if(!output) throw new Error('Turma não encontrada')
        return output;
    }
}

type Input = {
    className: string;
}
type Output={
    id: string;
    nickName: string;
    className: string;
};