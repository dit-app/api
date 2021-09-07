import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Educations extends BaseSchema {
  protected tableName = 'educations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('school')
      table.string('degree')
      table.string('start_date') //table.date('start_date')
      table.string('end_date') //table.date('end_date')
      table.string('description')
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
