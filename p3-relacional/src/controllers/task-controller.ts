import { Response , Request } from "express";
import { taksRepositorio } from "../repositorio/task-repositorio"
import { User } from "../entities/Users";
import { Console } from "console";
import { get } from "http";


export class TasksControler{

    async create(req: Request, res: Response){
      
        try {
            const newUser = taksRepositorio.create({})
            await taksRepositorio.save(newUser)
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
            const usuario = await taksRepositorio.findOneBy({id:req.body.id})
            console.table(usuario)
            return res.status(200).json(usuario)

        }catch (error){
            return res.status(error);
        }
    }
}
