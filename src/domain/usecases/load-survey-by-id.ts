import { SurveyResultModel } from '../models/survey-result'

export interface LoadAccountByToken {
  loadById: (id: string) => Promise<SurveyResultModel>
}
