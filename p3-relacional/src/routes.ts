import {Router } from 'express'
import { UserControler } from './controllers/user-controller'

const routes = Router()

routes.post('/user', new UserControler().create)

export default routes