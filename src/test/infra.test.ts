import {it, describe, expect} from 'vitest';
import axios from 'axios';
describe('Test on infra http express', ()=>{
    it('should response a request with 200',async ()=>{
        try{
            const response = await axios.get('http://localhost:3333/')
            expect(response.status).toEqual(200);
        }catch(err){
            console.log(err);
        }
    })
    it('should create a class',async ()=>{
        const input = {
            id: '1',
            className: '20231098105A',
            nickName: 'Turma 1021-A'
            }
            const response = await axios.post('http://localhost:3333/class',input)
            expect(response.status).toEqual(201);
            expect(response.data).toEqual(input);
    })
    it('should get a class by className after create',async ()=>{
        const input = {
            id: '1',
            className: '20231098105A',
            nickName: 'Turma 1021-A'
            }
            await axios.post('http://localhost:3333/class',input)
            const response = await axios.get('http://localhost:3333/classbyname/20231098105A')
            expect(response.status).toEqual(200);
            expect(response.data).toEqual(input);
    })
})