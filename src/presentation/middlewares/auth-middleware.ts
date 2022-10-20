import { HttpRequest, HttpResponse, Middleware } from '../protocols'
import { AccessDeniedError } from './../errors/access-denied-error'
import { forbidden } from './../helpers/http/http-helper'

export class AuthMiddleware implements Middleware {
  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const error = forbidden(new AccessDeniedError())
    return await new Promise(resolve => resolve(error))
  }
}
