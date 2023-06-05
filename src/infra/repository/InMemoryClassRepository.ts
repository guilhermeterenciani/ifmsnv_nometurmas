import { ClassRepository , ClassDTO } from "../../domain/adapters/ClassRepository";
export class InMemoryClassRepository implements ClassRepository {
    private classes:ClassDTO[];
    constructor() {
        this.classes = [];
    }
    findByClassName(className: string): Promise<ClassDTO|undefined> {
        return new Promise<ClassDTO|undefined>((resolve,reject)=>{
            setTimeout(()=>{
                const class_ = this.classes.find(class_=>class_.className === className);
                if(class_ == undefined){
                    reject(new Error('Turma não encontrada'));
                }
                else{
                    resolve({nickname: class_.nickname, className: class_.className});
                }
                
            },1000)
        });
    }
    save(class_: ClassDTO) {
        return new Promise<ClassDTO>((resolve)=>{
            setTimeout(()=>{
                this.classes.push(class_)
                resolve(class_);
            },1000)
        });
    }
}