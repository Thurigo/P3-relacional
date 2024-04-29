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
            const userBody = await Number(req.query.id); 
            
            // const getUser = userRepositorio.findOneById({id:req.body.id})
            // console.table(req.body)
            const usuario = await userRepositorio.findOneBy({id:userBody})
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

    
    async putUser(req: Request, res: Response) {
        try {
            const resultado = req.body;

            console.table(resultado)
            const task = await userRepositorio.findOneBy({ id: resultado.id })
            if (!task)
                return res.status(403).json('Não encontrado')
            console.table(task)

            const upadateTaks = await userRepositorio.save(Object.assign(task, resultado))
            return res.status(200).json(upadateTaks)

        } catch (error) {
            return res.status(400).json('Deu ruim')
        }
    }

    async deleteUser(req: Request, res: Response) {
        try {
            const resultado = req.body

            const task = await userRepositorio.findOneBy({ id: resultado.id });
            if (!task)
                return res.status(403).json('Não encontrado')

            const deleteTask = await userRepositorio.remove(resultado)
            console.log(deleteTask)


            return res.status(200).json('deletado')
        } catch (error) {
            return res.status(404).json('deu ruim')
        }
    }




}
//atualizar e editar 