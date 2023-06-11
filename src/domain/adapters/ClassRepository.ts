export interface ClassRepository{
    save(class_: ClassDTO): Promise<ClassDTO>;
    findByClassName(className: string): Promise<ClassDTO|undefined>;
}
export type ClassDTO = {
    id: string;
    className: string;
    nickname: string;
}