import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Diversities extends BaseSchema {
  protected tableName = 'diversities'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.boolean('is_lgbt').defaultTo(false)
      table.boolean('is_black').defaultTo(false)
      table.boolean('is_from_suburb').defaultTo(false)
      table
        .integer('user_id')
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
