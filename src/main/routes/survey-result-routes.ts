import { makeSaveSurveyResultController } from '@/main/factories/controllers/survey-result/save-survey-result/save-survey-result-controller-factory'
import { auth } from '@/main/factories/middlewares/auth'
import { adaptRoute } from '@/main/adapters/express-route-adapter'
import { RequestHandler, Router } from 'express'

export default (router: Router): void => {
  router.put('/surveys/:surveyId/results', auth as RequestHandler, adaptRoute(makeSaveSurveyResultController()) as RequestHandler)
}
