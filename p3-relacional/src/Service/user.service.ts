import { Request, Response } from "express";
import { TasksControler } from "../controllers/task-controller";



export class UserService {

    async countTaskUser(req: Request, res: Response) {
        try {
            const resultado = Number(req.query.id)
            const uncount = await new TasksControler().UserfindMany(resultado)
            console.log(uncount.length)
            const count = uncount.map((task, i) => {
                return i + 1
            }
            )
            console.table(count)
            return res.status(200).json(count.length)
        } catch (error) {
            res.status(500).json('deu ruim')
        }

    }

    async taskUser(req: Request, res: Response) {
        try {
            const resultado = Number(req.query.id)
            const uncount = await new TasksControler().UserfindMany(resultado)
            console.table(uncount)
            return res.status(200).json(uncount)
        } catch (error) {
            return res.status(500).json('deu ruim')
        }
    }

    async longerTask(req: Request, res: Response) {
        try {
            console.log('bateu')
            const resultado = Number(req.query.id)
            const uncount = await new TasksControler().UserfindMany(resultado)

            const tarefaComMaiorDescrição = uncount.reduce((maiorTarefa, task) => {
                if (!maiorTarefa || task.descricao.length > maiorTarefa.descricao.length) {
                    return task;
                } else {
                    return maiorTarefa;
                }
            }, null);
    
            console.table(tarefaComMaiorDescrição);
    
            return res.status(200).json(tarefaComMaiorDescrição);
        } catch (error) {
            console.log(error)
            res.status(500).json('deu ruim');
        }
    }


    async OldesTask(req: Request, res: Response) {
        try {
            console.log('bateu');
            const resultado = Number(req.query.id);
            const uncount = await new TasksControler().UserfindMany(resultado);
    
            const tarefaComDataMaisAntiga = uncount.reduce((tarefaMaisAntiga, task) => {
                if (!tarefaMaisAntiga || task.dataStart < tarefaMaisAntiga.dataStart) {
                    return task; 
                } else {
                    return tarefaMaisAntiga; 
                }
            }, null);
    
            console.log(tarefaComDataMaisAntiga);
    
            return res.status(200).json(tarefaComDataMaisAntiga);
        } catch (error) {
            console.log(error)
            res.status(500).json('deu ruim');
        }
    }


} 