import { SurveyModel, LoadSurveys, LoadSurveyRepository } from './db-load-surveys-protocols'

export class DbLoadSurveys implements LoadSurveys {
  constructor (private readonly loadSurveyRepository: LoadSurveyRepository) {}

  async load (): Promise<SurveyModel[]> {
    const surveys = await this.loadSurveyRepository.loadAll()
    return surveys
  }
}
