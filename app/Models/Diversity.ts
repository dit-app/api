import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Diversity extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public isLGBT: boolean

  @column()
  public isBlack: boolean

  @column()
  public isFromSuburb: boolean

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
