import { LoadSurveyByIdRepository } from '@/data/protocols/db/survey/load-survey-by-id-repository'
import { LoadSurveyById } from '@/domain/usecases/load-survey-by-id'
import { SurveyModel } from '@/domain/models/survey'

export class DbLoadSurveyById implements LoadSurveyById {
  constructor (private readonly loadSurveyByIdRespository: LoadSurveyByIdRepository) {}

  async loadById (id: string): Promise<SurveyModel> {
    await this.loadSurveyByIdRespository.loadById(id)
    return null
  }
}
