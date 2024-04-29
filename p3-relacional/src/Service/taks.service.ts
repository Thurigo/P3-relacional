import { Request, response, Response } from "express";
import { TasksControler } from "../controllers/task-controller";



export class TaskService {

    async filterCategoria(req: Request, res: Response) {
        try {
            const resultado = req.query.categoria
            console.table(resultado)

            const unfilter = await new TasksControler().findMany()
            const filter = unfilter.filter((task) => task.categoria && task.categoria.name === resultado)
            console.log(filter)
            return res.status(200).json(filter)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' }); 

        }
    }

    async findmany(req: Request, res: Response) {
        try {

            const finded = await new TasksControler().findMany()
            return res.status(200).json(finded)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' }); 

        }
    }

    async filterStatus(req: Request, res: Response) {
        try {
            const resultado = req.query.status
            console.table(resultado)

            const unfilter = await new TasksControler().findMany()
            const filter = unfilter.filter((task) => task.staus && task.staus === resultado)
            console.log(filter)
            return res.status(200).json(filter)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' }); 

        }
    }

    async filterConcluido(req: Request, res: Response) {
        try {
            const dataClose1 = Number(req.query.dataClose)
            const dataStart2 = Number(req.query.dataStart)
            console.table(dataClose1)

            const unfilter = await new TasksControler().findMany()
            const filter = unfilter.filter((task) => (task.dataClose && Number(task.dataClose) < dataClose1) && (task.dataStart && Number(task.dataStart) > dataStart2))
            console.log(filter)
            return res.status(200).json(filter)
        } catch {
            return res.status(500).json({ message: 'Erro ao buscar tarefas.' }); 

        }
    }

    async avgTaskcomplete(req: Request, res: Response) {
        try {
            const all = await new TasksControler().findMany()
            const complete = all.filter((task) => task.staus && task.staus === 'CONCLUIDA')

            return res.status(200).json((complete.length/all.length))


        } catch (error) {
            res.status(500).json('deu ruim')
        }

    }





}