const express = require('express')
const validate = require('express-validation')
const routes = express.Router()

const authMiddleware = require('./app/middlewares/auth')
 
const controllers = require('./app/controllers')
const validators = require('./app/validators')

routes.post('/users', controllers.UserController.store)
routes.post('/sessions', controllers.SessionController.store)

//Exigir autenticação daqui em diante
routes.use(authMiddleware)

//Ads
routes.get('/ads', controllers.AdController.index)
routes.get('/ads/:id', controllers.AdController.show)
routes.post('/ads', controllers.AdController.store)
routes.put('/ads/:id', controllers.AdController.update)
routes.delete('/ads/:id', controllers.AdController.destroy)

//Purchase
routes.post('/purchase', controllers.PurchaseController.store)
module.exports = routes
