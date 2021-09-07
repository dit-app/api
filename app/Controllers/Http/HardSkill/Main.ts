import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { HardSkill } from 'App/Models'
import { StoreValidator, UpdateValidator } from 'App/Validators/HardSkills'

export default class HardSkillController {
  public async store ({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const hardSkill = await auth.user!.related('hardSkills').create(data)
    return hardSkill
  }

  public async update ({ request, auth, params, response }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const hardSkill = await HardSkill.findOrFail(params.id)
    if (auth.user!.id !== hardSkill!.userId) {
      return response.unauthorized()
    }

    await hardSkill!.merge(data).save()

    return hardSkill
  }

}
