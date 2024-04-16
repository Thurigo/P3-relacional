import { Response , Request } from "express";
import { categoriaRepositorio } from "../repositorio/categoria-repositorio"
import { User } from "../entities/Users";
import { Console } from "console";
import { get } from "http";


export class CategoriaControler{

    async create(req: Request, res: Response){
      
        try {
            const newUser = categoriaRepositorio.create({})
            await categoriaRepositorio.save(newUser)
            console.log(newUser)
            return res.status(201).json(newUser)    
        }catch (error){
            return res.status(error)
        }
    }

    async findOneByID (req: Request, res: Response){
        try{
            // const getUser = userRepositorio.findOneById({id:req.body.id})
            console.table(req.body)
            const usuario = await categoriaRepositorio.findOneBy({id:req.body.id})
            console.table(usuario)
            return res.status(200).json(usuario)

        }catch (error){
            return res.status(error);
        }
    }
}
