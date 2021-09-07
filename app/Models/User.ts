import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasMany,
  HasMany,
  hasOne,
  HasOne
} from '@ioc:Adonis/Lucid/Orm'
import { UserKey, Social, Education, PreviewExperience, HardSkill } from 'App/Models'

// table.increments('id').primary()
// table.string('name')
// table.string('username').unique()
// table.string('email').notNullable().unique()
// table.string('password', 180)
// table.string('remember_me_token').nullable()

// table.timestamp('created_at', { useTz: true }).notNullable()
// table.timestamp('updated_at', { useTz: true }).notNullable()

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public username: string

  @column()
  public bio: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @hasMany(() => UserKey)
  public keys: HasMany<typeof UserKey>

  @hasOne(() => Social)
  public socials: HasOne<typeof Social>

  @hasMany(() => Education)
  public educations: HasMany<typeof Education>

  @hasMany(() => PreviewExperience)
  public previewExperiences: HasMany<typeof PreviewExperience>

  @hasMany(() => HardSkill)
  public hardSkills: HasMany<typeof HardSkill>
}
