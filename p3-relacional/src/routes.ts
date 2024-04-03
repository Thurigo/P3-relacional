import {Router } from 'express'
import { UserControler } from './controllers/user-controller'

const routes = Router()

routes.post('/user', new UserControler().create)
routes.get('/get', new UserControler().findOneByID)

export default routes