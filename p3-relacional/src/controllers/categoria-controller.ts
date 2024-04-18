import { Response , Request } from "express";
import { categoriaRepositorio } from "../repositorio/categoria-repositorio"
import { User } from "../entities/Users";
import { Console } from "console";
import { get } from "http";
import { Repository } from "typeorm";


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
            const resultado = req.body
            console.table(resultado)

            const categoria = await categoriaRepositorio.findOneBy({id:resultado.id})
            console.table(categoria)

            return res.status(200).json(categoria)

        }catch (error){
            return res.status(error);
        }
    }

    async findMany(req: Request, res: Response){
        try{
            const resultado = req.body
            console.table(resultado)

            const allCategorias = await categoriaRepositorio.find(
                {
                    // relations:{
                    //     User:true
                    // },
                    where: {
                        User:{
                            id:resultado.User
                        }
                    }
                }
            )
            return res.status(200).json(allCategorias)
        }catch (error){
            res.status(404)
        }
    }
    
}
