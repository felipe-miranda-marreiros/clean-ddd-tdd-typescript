export class EmailInUseError extends Error {
  constructor () {
    super('The received email is alreadu in use')
    this.name = 'EmailInUseError'
  }
}
