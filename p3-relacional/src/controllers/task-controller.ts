import { Response, Request } from "express";
import { taksRepositorio } from "../repositorio/task-repositorio"
import { User } from "../entities/Users";
import { Console } from "console";
import { get } from "http";
import { Repository } from "typeorm";


export class TasksControler {

    async create(req: Request, res: Response) {
        try {
            const resultado = req.body;

            const newTask = taksRepositorio.create(resultado)
            console.log(newTask)

            await taksRepositorio.save(newTask)
            console.log(newTask)
            return res.status(201).json(newTask)
        } catch (error) {
            return res.status(error)
        }
    }

    async findOneByID(req: Request, res: Response) {
        try {
            // const getUser = userRepositorio.findOneById({id:req.body.id})
            const resultado = req.body;

            console.table(resultado)
            const task = await taksRepositorio.findOneBy({ id: resultado.id })
            console.table(task)
            return res.status(200).json(task)

        } catch (error) {
            return res.status(error);
        }
    }

    async findMany(req: Request, res: Response) {
        try {
            const resultado = req.body;
            console.table(req.body);
            const alltask = await taksRepositorio.find(
                {
                    // relations: {
                    //     User: true
                    // },
                    where: {
                        User: {
                            id: resultado.User
                        }
                    }
                }
            )
            return res.status(200).json(alltask)
        } catch (error) {
            return res.status(404)
        }
    }

    async putTask(req: Request, res: Response){
        try{
            const resultado = req.body;

            console.table(resultado)
            const task = await taksRepositorio.findOneBy({ id: resultado.id })
            if (!task)
                return res.status(403).json('Não encontrado')
            console.table(task)

            const upadateTaks = await taksRepositorio.save(Object.assign(task, resultado))
            return res.status(200).json(upadateTaks)


            // task.titulo = (resultado.titulo != task.titulo && task.titulo ) ? resultado.titulo :  task.titulo
            // task.dataStart = (resultado.dataStart != task.dataStart && task.dataStart ) ? resultado.dataStart :  task.dataStart
            // task.dataClose = (resultado.dataClose != task.dataClose && task.dataClose ) ? resultado.dataClose :  task.dataClose
            // task.tipo = (resultado.tipo != task.tipo && task.tipo ) ? resultado.tipo :  task.tipo
            // task.categoria = (resultado.categoria != task.categoria && task.categoria ) ? resultado.categoria :  task.categoria
            // task.User = (resultado.User != task.User && task.User ) ? resultado.User :  task.User
            
            // vai para o service depois
            
            //

        }catch (error){ 
            return res.status(400).json('Deu ruim')
        }
    }

    async deleteTask(req: Request, res: Response){
        try{
            const resultado = req.body

            const task = await taksRepositorio.findOneBy({ id: resultado.id });
            if (!task)
                return res.status(403).json('Não encontrado')

            const deleteTask = await taksRepositorio.remove(resultado)
            console.log(deleteTask)


            return res.status(200).json('deletado')
        }catch (error){
            return res.status(404).json('deu ruim')
        }
    }

}
//atualizar e editar 