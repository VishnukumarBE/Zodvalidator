
import express from 'express'
import {Request,Response} from 'express'
import { validate } from './validator/validator'
import { loginSchema } from './schema/loginschema'
const app=express()
app.use(express.json())
interface loginattributes{
    email:string,
    password:string,
    age:number
}
app.post('/login',validate(loginSchema),(req:Request,res:Response)=>{
    try{
        const{email,password,age}:loginattributes=req.body
        res.status(200).json('login successfull')
    }catch(err:any){
        res.status(500).json(err.message)
    }
})
app.listen(3000,'localhost',()=>{
     console.log('server connected to http://localhost:3000')
})