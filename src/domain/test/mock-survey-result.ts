import { SaveSurveyResultParams } from '@/domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '@/domain/models/survey-result'

export const mockSurveyResultModel = (): SurveyResultModel => ({
  id: 'any_id',
  accountId: 'any_id',
  surveyId: 'any_survey_id',
  answer: 'any_answer',
  date: new Date()
})

export const mockSaveSurveyResultParams = (): SaveSurveyResultParams => ({
  accountId: 'any_id',
  surveyId: 'any_survey_id',
  answer: 'any_answer',
  date: new Date()
})
