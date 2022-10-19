import { AddSurveyModel } from '../../../../domain/usecases/add-survey'
import { AddSurveyRepository } from './../../../../data/protocols/survey/add-survey-repository'
import { MongoHelper } from '../helpers/mongo-helper'

export class SurveyMongoRepository implements AddSurveyRepository {
  async add (surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = await MongoHelper.getCollection('surveys')
    await surveyCollection.insertOne(surveyData)
  }
}
