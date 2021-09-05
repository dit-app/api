import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { PreviewExperience } from 'App/Models'
import { StoreValidator, UpdateValidator } from 'App/Validators/PreviewExperience'

export default class PreviewExperienceController {

  public async store ({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const previewExperience = await auth.user!.related('previewExperiences').create(data)
    return previewExperience

  }

  public async update ({ request, auth, params, response }: HttpContextContract) {
    const data = await request.validate(UpdateValidator)
    const previewExperience = await PreviewExperience.findOrFail(params.id)
    if (auth.user!.id !== previewExperience!.userId) {
      return response.unauthorized()
    }

    await previewExperience!.merge(data).save()

    return previewExperience
  }

}
