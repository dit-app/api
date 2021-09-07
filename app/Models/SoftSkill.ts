import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { User } from 'App/Models'

export default class SoftSkill extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
