import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Socials extends BaseSchema {
  protected tableName = 'socials'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('linkedin_url')
      table.string('twitter_url')
      table.string('github_url')
      table
        .integer('user_id')
        .unsigned()
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
