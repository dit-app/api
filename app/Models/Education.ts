import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import { User } from 'App/Models'
//        table.increments('id').primary()
//       table.string('school')
//       table.string('degree')
//       table.date('start_date')
//       table.date('end_date')
//       table.string('description')
//       table.integer('user_id')

export default class Education extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

  @column()
  public school: string

  @column()
  public degree: string

  @column()
  public startDate: string

  @column()
  public endDate: string

  @column()
  public description: string

  @column({ serializeAs: null })
  public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
