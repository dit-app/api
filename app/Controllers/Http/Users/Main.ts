import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { UpdateValidator } from 'App/Validators/User/Main'
export default class UserController {
  public async show({ auth }: HttpContextContract) {
    const user = auth.user!
    await user.load('socials')
    await user.load('educations')
    await user.load('previewExperiences')
    return user
  }

  public async update({ auth, request }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const user = auth.user!
    user.merge(data)
    await user.save()
    return user
  }
}
