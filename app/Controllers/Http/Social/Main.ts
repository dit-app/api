import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StoreValidator, UpdateValidator } from 'App/Validators/Social'
import Database from '@ioc:Adonis/Lucid/Database'

export default class SocialController {

  public async store({ request, auth }: HttpContextContract) {
    const data = await request.validate(StoreValidator)
    const social = await auth.user!.related('socials').create(data)
    return social
  }

  public async update({ request, auth }: HttpContextContract) {
    await Database.transaction(async (trx) => {
      const data = await request.validate(UpdateValidator)
      const user = auth.user!.useTransaction(trx)

      const searchPayload = {}
      const savePayload = {
        linkedinUrl: data.linkedinUrl,
        githubUrl: data.githubUrl,
        twitterUrl: data.twitterUrl,
      }

      const socials = await user.related('socials').firstOrCreate(searchPayload, savePayload)

      await socials!.merge(data).save()

      return socials
    })
  }

  public async destroy({}: HttpContextContract) {}
}
