import { Router } from 'express'
import { UserControler } from './controllers/user-controller'
import { CategoriaControler } from './controllers/categoria-controller'
import { TasksControler } from './controllers/task-controller'
import { TaskService } from './Service/taks.service'

const routes = Router()

routes.post('/create/user', new UserControler().create)
routes.get('/get/user', new UserControler().findOneByID)
routes.get('/get/alluser', new UserControler().findMany)

routes.post('/create/task', new TasksControler().create)
routes.get('/get/task', new TasksControler().findOneByID)

routes.get('/get/User-all', new TasksControler().UserfindMany)

routes.put('/put/task', new TasksControler().putTask)
routes.delete('/delete/task', new TasksControler().deleteTask)

routes.post('/create/categoria', new CategoriaControler().create)
routes.get('/get/ID-categoria', new CategoriaControler().findOneByID)
routes.get('/get/ALL-categoria', new CategoriaControler().findMany)
routes.get('/get/ALL-categoria', new CategoriaControler().findManyUser)




//Service Routes Array

routes.get('/get/filter/categoria', new TaskService().filterCategoria)
routes.get('/get/filter/categoria', new TaskService().filterStatus)

//Service Db
routes.get('/get/alltask', new TaskService().findmany)

export default routes