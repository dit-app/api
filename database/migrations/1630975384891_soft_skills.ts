import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class SoftSkills extends BaseSchema {
  protected tableName = 'soft_skills'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
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
