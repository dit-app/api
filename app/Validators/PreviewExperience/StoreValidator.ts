import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class StoreValidator {
  constructor (protected ctx: HttpContextContract) {
  }

  public schema = schema.create({
		company: schema.string({ trim: true}),
		role: schema.string({ trim: true}),
		description: schema.string({ trim: true}),
		startDate: schema.string({ trim: true}), //schema.date(),
		endDate: schema.string({ trim: true}), //schema.date(),
  })

	public cacheKey = this.ctx.routeKey
}
