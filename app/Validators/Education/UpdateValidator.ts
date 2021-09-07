import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor (protected ctx: HttpContextContract) {
  }

	public schema = schema.create({
		school: schema.string({ trim: true}),
		degree: schema.string({ trim: true}),
		startDate: schema.date({ format: 'DD/MM/YYYY'}),
		endDate: schema.date({ format: 'DD/MM/YYYY'}),
		description: schema.string({ trim: true}),
  })

	public cacheKey = this.ctx.routeKey
}
