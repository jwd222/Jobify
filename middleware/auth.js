import { UnauthenticatedError } from '../errors/index.js'
import jwt from 'jsonwebtoken'

const auth = async (req, res, next) => {
  const authHeader = req.headers.authorization
  if (!authHeader || !authHeader.startsWith('Bearer')) {
    throw new UnauthenticatedError('Authentication Invalid')
  }

  const token = authHeader.split(' ')[1]

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    // TEST USER
    const testUser = payload.userId === '64fb4b55c6a87ce6f89bc004'
    // TEST USER
    req.user = { userId: payload.userId, testUser }
    next()
  } catch (error) {
    throw new UnauthenticatedError('Authentication Invalid')
  }
}
export default auth
