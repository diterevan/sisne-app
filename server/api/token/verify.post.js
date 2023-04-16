/**
 * VALIDATE TOKEN
 *
 */
import jwt from 'jsonwebtoken'

const KEY = process.env.KEY


async function verify_token(event) {

  const { token } = await readBody(event)

  try {

    const decoded = jwt.verify(token, KEY)

    return decoded

  } catch(err) {

    // console.log(err.name)
    // console.log(err.name)
    // console.log(err.name)

    return {
      error: true,
      name: err.name,
      message: err.message,
    }
  }
}


export default defineEventHandler(verify_token)
