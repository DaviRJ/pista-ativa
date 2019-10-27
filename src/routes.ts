import { Router } from 'express'
import PagesController from './controllers/PagesController'

const routes = Router()

// Pages Controller
routes.get('/', PagesController.index)

export default routes
