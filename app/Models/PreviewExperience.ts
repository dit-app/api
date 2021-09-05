import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import { User } from 'App/Models'

export default class PreviewExperience extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public company: string

  @column()
  public role: string

  @column()
  public description: string

  @column()
  public startDate: string

  @column()
  public endDate: string

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

}
