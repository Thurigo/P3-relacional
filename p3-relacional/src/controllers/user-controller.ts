import { Response , Request } from "express";
import { userRepositorio } from "../repositorio/user-repositorio";
import { User } from "../entities/Users";
import { Console } from "console";


export class UserControler{

    async create(req: Request, res: Response){
      
        //criar 
        
        const {User2} = req.body;
        

        


        try {
            const newUser = userRepositorio.create({nome:req.body.nome, email:req.body.email , peso:req.body.peso, senha:req.body.senha})


            await userRepositorio.save(newUser)

            console.log(newUser)

            return res.status(201).json(newUser)    


        }catch (error){
            return res.status(error)

        }
    }


}