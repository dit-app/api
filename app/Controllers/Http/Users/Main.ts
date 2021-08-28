import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { User } from 'App/Models'
export default class UserController {
  public async show({ auth }: HttpContextContract) {
    const user = auth.user!
    return user
  }

  public async update({ auth }: HttpContextContract) {
    const user = await Database.transaction(async (trx) => {
      const user = new User()
      user.useTransaction(trx)
    })
  }
}
