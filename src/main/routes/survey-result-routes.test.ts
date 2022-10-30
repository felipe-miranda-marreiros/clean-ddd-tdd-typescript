import request from 'supertest'
import app from '../config/app'
import { MongoHelper } from '../../infra/db/mongodb/helpers/mongo-helper'
// import { Collection } from 'mongodb'
// import { sign } from 'jsonwebtoken'
// import env from '../config/env'

// let surveyCollection: Collection
// let accountCollection: Collection

// const makeAccessToken = async (): Promise<string> => {
//   const res = await accountCollection.insertOne({
//     name: 'Felipe',
//     email: 'felipe@gmail.com',
//     password: '123',
//     role: 'admin'
//   })
//   const id = res.insertedId
//   const accessToken = sign({ id }, env.jwtSecret)
//   await accountCollection.updateOne({
//     _id: id
//   }, {
//     $set: {
//       accessToken
//     }
//   })
//   return accessToken
// }

describe('Surveys Routes', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL)
  })

  afterAll(async () => {
    await MongoHelper.disconnect()
  })

  //   beforeEach(async () => {
  //     surveyCollection = await MongoHelper.getCollection('surveys')
  //     accountCollection = await MongoHelper.getCollection('accounts')
  //     await surveyCollection.deleteMany({})
  //     await accountCollection.deleteMany({})
  //   })

  describe('PUT /surveys/:surveyId/results', () => {
    test('Should return 403 on save survey result without accessToken', async () => {
      await request(app)
        .put('/api/surveys/any_id/results')
        .send({
          answer: 'any_answer'
        })
        .expect(403)
    })
  })
})
