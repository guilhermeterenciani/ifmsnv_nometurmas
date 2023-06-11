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
    
})