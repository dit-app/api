import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { User } from 'App/Models'
// table.increments('id')
// table.string('linkedin_url')
// table.string('twitter_url')
// table.string('github_url')
// table
//   .integer('user_id')
//   .unsigned()
//   .references('id')
//   .inTable('users')
//   .onUpdate('CASCADE')
//   .onDelete('CASCADE')
export default class Social extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public linkedinUrl: string

  @column()
  public twitterUrl: string

  @column()
  public githubUrl: string

  @column()
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
