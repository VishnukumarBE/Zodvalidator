import { AnyZodObject,ZodError } from "zod";
import { Request,Response,NextFunction} from "express";
type Attributes={
    body?:AnyZodObject
}
const validate=(schemas:Attributes)=>(req:Request,res:Response,next:NextFunction):void=>{
        try{
             if(schemas.body){
              req.body=schemas.body.parse(req.body)
         }
         next()
        }
        catch(error){
             if(error instanceof ZodError){
                res.status(400).json({message:'login unsuccesfful',error:error.errors})
             }else{
                next(error)
             }
        }
}
export {validate}