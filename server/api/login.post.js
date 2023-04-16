/**
 * LOGIN
 *
 */
import jwt from 'jsonwebtoken'

const KEY = process.env.KEY


async function login(event) {

  const { email, password, office_id } = await readBody(event); console.log({ email, password, office_id })

  const exp = Math.floor(Date.now() / 1000) + (60)

  const token = jwt.sign({ office_id, user_id: '123456', exp }, KEY)

  return token
}


export default defineEventHandler(login)
