import { adaptMiddleware } from '../../adapters/express-middleware-adapter'
import { makeAuthMiddleware } from './auth-middleware-controller'

export const auth = adaptMiddleware(makeAuthMiddleware())
