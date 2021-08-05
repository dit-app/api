import Mail from '@ioc:Adonis/Addons/Mail'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { User, UserKey } from 'App/Models'
import { StoreValidator, UpdateValidator } from 'App/Validators/User/ForgotPassword'
import faker from 'faker'

export default class UserForgotPasswordController {
  public async store({ request }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      const { email, redirectUrl } = await request.validate(StoreValidator)
      const user = await User.findByOrFail('email', email)
      user.useTransaction(trx)

      const key = faker.datatype.uuid() + user.id

      user.related('keys').create({ key })
      const link = `${redirectUrl.replace(/\/$/, '')}/${key}`

      await Mail.send((message) => {
        message.to(email)
        message.from('noreply@dit.dev', 'DIT')
        message.subject('Redefinição de senha na DIT.')
        message.htmlView('emails/reset-password', { link })
      })
    })
  }

  public async update({ request, response }: HttpContextContract) {
    const { key, password } = await request.validate(UpdateValidator)
    const userKey = await UserKey.findByOrFail('key', key)
    const user = await userKey.related('user').query().firstOrFail()

    user.merge({ password })

    await user.save()
    await userKey.delete()

    return response.ok({ message: 'User updated.' })
  }
}
