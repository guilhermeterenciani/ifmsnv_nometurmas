export interface ClassRepository{
    save(class_: ClassDTO): Promise<ClassDTO>;
    findByClassName(className: string): Promise<ClassDTO|undefined>;
}
export type ClassDTO = {
    className: string;
    nickname: string;
}