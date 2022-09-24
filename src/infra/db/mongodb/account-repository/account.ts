import { AddAccountRepository } from '../../../../data/protocols/add-account-repository'
import { AddAccountModel } from '../../../../domain/usecases/add-account'
import { AccountModel } from '../../../../domain/models/account'
import { MongoHelper } from '../helpers/mongo-helper'
import { ObjectId } from 'mongodb'

export class AccountMongoRepository implements AddAccountRepository {
  async add (accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    const result = await accountCollection.insertOne(accountData)
    const account = await accountCollection.findOne({ _id: new ObjectId(result.insertedId.toString()) })
    const accountIdToString = account?._id.toString()

    return {
      id: accountIdToString ?? '',
      name: account?.name,
      email: account?.email,
      password: account?.password
    }
  }
}
