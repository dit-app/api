import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { UpdateValidator } from 'App/Validators/User/Main'
export default class UserController {
  public async show({ auth }: HttpContextContract) {
    const user = auth.user!
    user.load('socials')
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
