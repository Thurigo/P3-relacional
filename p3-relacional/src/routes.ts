import {Router } from 'express'
import { UserControler } from './controllers/user-controller'
import { CategoriaControler } from './controllers/categoria-controller'
import { TasksControler } from './controllers/task-controller'

const routes = Router()

routes.post('/create/user', new UserControler().create)
routes.get('/get/user', new UserControler().findOneByID)

routes.get('/create/task', new TasksControler().create)
routes.get('/get/task', new TasksControler().findOneByID)

routes.get('/create/categoria', new CategoriaControler().create)
routes.get('/get/categoria', new CategoriaControler().findOneByID)

export default routes