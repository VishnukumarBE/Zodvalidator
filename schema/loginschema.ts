import {z} from 'zod'
const loginSchema={
    body:z.object({
        email:z.string().email({message:'Email should be an email format'}),
        password:z.string().min(6,{message:'password should be atleast 8 characters'})
        .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/,{message:'password should be combination of letters and digits'}),
        age:z.number().int({message:'age should be number only'}).min(18,{message:'age should be greater than 18'})
        .max(100,{message:'age should be less than 100'})
    })
}
export {loginSchema}