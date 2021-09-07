import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { SoftSkill } from 'App/Models'
import { StoreValidator, UpdateValidator } from 'App/Validators/SoftSkill'

export default class SoftSkillController {
  public async store ({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const softSkill = await auth.user!.related('softSkills').create(data)
    return softSkill
  }

  public async update ({ request, auth, params, response }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const softSkill = await SoftSkill.findOrFail(params.id)
    if (auth.user!.id !== softSkill!.userId) {
      return response.unauthorized()
    }

    await softSkill!.merge(data).save()

    return softSkill
  }
}
