import { FileCategory } from 'App/Utils'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class File extends BaseModel {
  @column({ isPrimary: true, serializeAs: null })
  public id: number

 @column({ serializeAs: null })
 public fileCategory: FileCategory

 @column()
 public fileName: string

 @column({ serializeAs: null })
 public ownerId: number

}
