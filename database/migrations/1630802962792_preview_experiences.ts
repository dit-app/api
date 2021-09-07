import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PreviewExperiences extends BaseSchema {
  protected tableName = 'preview_experiences'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('company')
      table.string('role')
      table.string('description')
      table.string('start_date')
      table.string('end_date')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
