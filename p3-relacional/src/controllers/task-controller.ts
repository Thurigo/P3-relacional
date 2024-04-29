import { Response, Request } from "express";
import { taksRepositorio } from "../repositorio/task-repositorio"
import { User } from "../entities/Users";
import { Console } from "console";
import { get } from "http";
import { Repository } from "typeorm";


export class TasksControler {

    async create(req: Request, res: Response) {
        try {
            const newTask = taksRepositorio.create(req.body)
            console.table(newTask)

            await taksRepositorio.save(newTask)
            console.log(newTask)
            return res.status(201).json(newTask)
        } catch (error) {
            return res.status(error)
        }
    }

    async findOneByID(req: Request, res: Response) {
        try {
            const resultado =  Number(req.query.id);

            console.table(resultado)
            const task = await taksRepositorio.findOneBy({ id: resultado })
            console.table(task)
            return res.status(200).json(task)

        } catch (error) {
            return res.status(error);
        }
    }

    async UserfindMany(req: number) {
        
        try{
            
            
            const alltask = await taksRepositorio.find(
                {
        
                        where: {
                        User: {
                            id: req
                        }
                    }
                }
            )
            return alltask
        }catch(error){
            console.log(error)
        }
       
    }

    async findMany() {
        try {


            const alltask = await taksRepositorio.find(
                {
                    relations: {
                        categoria: true
                    }
                }
            )
            return alltask
        } catch (error) {
            console.error(error); 
        }
    }

    async putTask(req: Request, res: Response) {
        try {
            const resultado = req.body;

            console.table(resultado)
            const task = await taksRepositorio.findOneBy({ id: resultado.id })
            if (!task)
                return res.status(403).json('Não encontrado')
            console.table(task)

            const upadateTaks = await taksRepositorio.save(Object.assign(task, resultado))
            return res.status(200).json(upadateTaks)

        } catch (error) {
            return res.status(400).json('Deu ruim')
        }
    }

    async deleteTask(req: Request, res: Response) {
        try {
            const resultado = req.body

            const task = await taksRepositorio.findOneBy({ id: resultado.id });
            if (!task)
                return res.status(403).json('Não encontrado')

            const deleteTask = await taksRepositorio.remove(resultado)
            console.log(deleteTask)


            return res.status(200).json('deletado')
        } catch (error) {
            return res.status(404).json('deu ruim')
        }
    }

}
//atualizar e editar 