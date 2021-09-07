import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class HardSkills extends BaseSchema {
  protected tableName = 'hard_skills'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name')
      table.integer('experience_years')
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
