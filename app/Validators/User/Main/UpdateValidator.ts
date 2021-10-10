import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UpdateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    name: schema.string.optional({ trim: true }),
    role: schema.string.optional({ trim: true }),
    username: schema.string.optional({ trim: true }),
		email: schema.string.optional({ trim: true}),
		bio: schema.string.optional({ trim: true}),
  })

  public cacheKey = this.ctx.routeKey
}
