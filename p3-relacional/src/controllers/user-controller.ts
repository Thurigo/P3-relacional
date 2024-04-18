import { Response , Request } from "express";
import { userRepositorio } from "../repositorio/user-repositorio";
import { User } from "../entities/Users";
import { Console } from "console";
import { get } from "http";


export class UserControler{

    async create(req: Request, res: Response){
        const userBody = req.body; 
        console.log(userBody);
      
        try {
            const newUser = userRepositorio.create(userBody)
            await userRepositorio.save(newUser)
            // console.log(newUser)
            return res.status(201).json(newUser)    
        }catch (error){
            return res.status(error)
        }
    }

    async findOneByID (req: Request, res: Response){
        try{
            const userBody = req.body; 
            // const getUser = userRepositorio.findOneById({id:req.body.id})
            // console.table(req.body)
            const usuario = await userRepositorio.findOneBy({id:userBody.id})
            // console.table(usuario)
            return res.status(200).json(usuario)

        }catch (error){
            return res.status(error);
        }
    }

    async findMany (req: Request, res: Response){
        try{ 
            const usuario = await userRepositorio.find()

            return res.status(200).json(usuario)
        }catch (error) {
            return res.status(error);
        }
    }

}
//atualizar e editar 