import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
		name: schema.string({ trim: true }),
		description: schema.string({ trim: true }),
  })

  public cacheKey = this.ctx.routeKey
}
