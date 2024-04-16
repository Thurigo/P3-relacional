import { Response , Request } from "express";
import { userRepositorio } from "../repositorio/user-repositorio";
import { User } from "../entities/Users";
import { Console } from "console";
import { get } from "http";


export class UserControler{

    async create(req: Request, res: Response){
      
        try {
            const newUser = userRepositorio.create({nome:req.body.nome, email:req.body.email , peso:req.body.peso, senha:req.body.senha})
            await userRepositorio.save(newUser)
            console.log(newUser)
            return res.status(201).json(newUser)    
        }catch (error){
            return res.status(error)
        }
    }

    async findOneByID (req: Request, res: Response){
        try{
            // const getUser = userRepositorio.findOneById({id:req.body.id})
            // console.table(req.body)
            const usuario = await userRepositorio.findOneBy({id:req.body.id})
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
