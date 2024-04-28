import { Request, response, Response } from "express";
import { TasksControler } from "../controllers/task-controller";



export class TaskService {

    async filterCategoria(req: Request, res: Response) {
        try {
             const resultado = req.query.categoria
             console.table(resultado)
            
            const unfilter = await new TasksControler().findMany()
            const filter = unfilter.filter((task) =>  task.categoria && task.categoria.name === resultado)
            console.log(filter)
            return res.status(200).json(filter)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' }); // Return a meaningful error message

        }
    }

    async findmany(req: Request, res: Response) {
        try {
            
            const unfilter = await new TasksControler().findMany() 
            return res.status(200).json(unfilter)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' }); // Return a meaningful error message

        }
    }





}