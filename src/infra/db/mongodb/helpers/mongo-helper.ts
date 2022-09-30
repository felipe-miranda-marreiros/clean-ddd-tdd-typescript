import { Collection, MongoClient } from 'mongodb'

export const MongoHelper = {
  client: null as unknown as MongoClient,
  url: null as unknown as string,

  async connect (url: string): Promise<void> {
    this.url = url
    this.client = new MongoClient(url)
    await this.client.connect()
  },

  async disconnect (): Promise<void> {
    await this.client.close()
    this.client = null
  },

  async isConnected (): Promise<boolean> {
    if (await this.client?.topology?.isConnected()) {
      return true
    }
    return false
  },

  async getCollection (name: string): Promise<Collection> {
    if (!this.client || !this.isConnected()) {
      await this.connect(this.url)
    }
    return this.client.db().collection(name)
  },

  map: (collection: any): any => {
    const { _id, ...collectionWithoutId } = collection
    return Object.assign({}, collectionWithoutId, { id: _id })
  }
}
