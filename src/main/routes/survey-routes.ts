import { adaptMiddleware } from './../adapters/express-middleware-adapter'
import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'
import { RequestHandler, Router } from 'express'
import { makeAuthMiddleware } from '../factories/middlewares/auth-middleware-controller'
import { makeLoadSurveysController } from '../factories/controllers/survey/load-surveys/load-surveys-controller-factory'

export default (router: Router): void => {
  const adminAuth = adaptMiddleware(makeAuthMiddleware('admin'))
  const auth = adaptMiddleware(makeAuthMiddleware())
  router.post('/surveys', adminAuth as RequestHandler, adaptRoute(makeAddSurveyController()) as RequestHandler)
  router.get('/surveys', auth as RequestHandler, adaptRoute(makeLoadSurveysController()) as RequestHandler)
}
