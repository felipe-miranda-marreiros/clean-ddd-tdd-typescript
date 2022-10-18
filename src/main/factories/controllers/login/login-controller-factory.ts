import { makeLogControllerDecorator } from './../../decorators/log-controller-decorator-factory'
import { makeDbAuthentication } from './../../usecases/authentication/db-authentication-factory'
import { makeLoginValidation } from './login-validation-factory'
import { LoginController } from '../../../../presentation/controllers/login/login-controller'
import { Controller } from '../../../../presentation/protocols'

export const makeLoginController = (): Controller => {
  const controller = new LoginController(makeDbAuthentication(), makeLoginValidation())
  return makeLogControllerDecorator(controller)
}
