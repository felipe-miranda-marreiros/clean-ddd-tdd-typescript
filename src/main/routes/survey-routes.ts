import { makeAddSurveyController } from '../factories/controllers/survey/add-survey/add-survey-controller-factory'
import { adaptRoute } from '../adapters/express-route-adapter'
import { RequestHandler, Router } from 'express'
import { makeLoadSurveysController } from '../factories/controllers/survey/load-surveys/load-surveys-controller-factory'
import { adminAuth } from '../factories/middlewares/admin-auth'
import { auth } from '../factories/middlewares/auth'

export default (router: Router): void => {
  router.post('/surveys', adminAuth as RequestHandler, adaptRoute(makeAddSurveyController()) as RequestHandler)
  router.get('/surveys', auth as RequestHandler, adaptRoute(makeLoadSurveysController()) as RequestHandler)
}
