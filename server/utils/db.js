const URI  = process.env.DB_URI
const name = process.env.DB_NAME

import { MongoClient as Client } from 'mongodb'


class Model {

  constructor(collection) {
    this.collection = collection
  }

  async find(q) {
    const client = new Client(URI, { useUnifiedTopology: true })
    const conn   = await client.connect()
    const db     = conn.db(name)
    const res    = await db.collection(this.collection).find(q).toArray()
    client.close()
    return res
  }

  async findOne(q) {
    const client = new Client(URI, { useUnifiedTopology: true })
    const conn   = await client.connect()
    const db     = conn.db(name)
    const res    = await db.collection(this.collection).findOne(q)
    client.close()
    return res
  }
}


export function DB() {
  return {
    Offices: new Model('offices')
  }
}
