import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { UpdateValidator } from 'App/Validators/HardSkills'

export default class HardSkillController {

  public async update ({ request, auth, response }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const hardSkill = await auth.user!.related('hardSkills').firstOrCreate(data)
    if (auth.user!.id !== hardSkill!.userId) {
      return response.unauthorized()
    }

    await hardSkill!.merge(data).save()

    return hardSkill
  }

}
