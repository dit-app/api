import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { User, Education } from 'App/Models/'
import { StoreValidator, UpdateValidator } from 'App/Validators/Education'

export default class EducationController {
  public async index ({ request, auth }: HttpContextContract) {
    const { username } = request.qs()
    const user = (await User.findByOrFail('username', username)) || auth.user

    await user.load('educations')

    return user.educations
  }

  public async store ({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const education = await auth.user!.related('educations').create(data)
    return education
  }

  public async update ({ request, response, params, auth }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const education = await Education.findOrFail(params.id)
    if (auth.user!.id !== education!.userId) {
      return response.unauthorized()
    }

    await education!.merge(data).save()

    return education
  }

}
