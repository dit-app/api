import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default class UserController {
  public async show({ auth }: HttpContextContract) {
    const user = auth.user!
    user.load('diversity')
    return user
  }

  public async update({ auth }: HttpContextContract) {
    const diversity = await Database.transaction(async (trx) => {
      const user = auth.user!.useTransaction(trx)

      const searchPayload = {}
      const savePayload = {
        id: 1,
        isLGBT: false,
        isBlack: true,
        isFromSuburb: false,
        userId: 1
      }

      const diversity = await user.related('diversity').firstOrCreate(searchPayload, savePayload)

      return diversity
    })
    console.log(diversity)
    return diversity.serialize({
      fields: ['is_lgbt', 'is_black', 'is_from_suburb']
    })
  }
}
