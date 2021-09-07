import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User } from 'App/Models'
import { StoreValidator, UpdateValidator } from 'App/Validators/Social'
import { Social } from 'App/Models'

export default class SocialController {
  public async index({ request, auth }: HttpContextContract) {
    const { username } = request.qs()
    const user = (await User.findByOrFail('username', username)) || auth.user

    await user.load('socials')

    return user.socials
  }

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const social = await auth.user!.related('socials').create(data)
    return social
  }

  public async update({ request, response, params, auth }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const social = await Social.findOrFail(params.id)
    if (auth.user!.id !== social!.userId) {
      return response.unauthorized()
    }

    await social!.merge(data).save()

    return social
  }

  public async destroy({}: HttpContextContract) {}
}
