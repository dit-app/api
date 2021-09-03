import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { User } from 'App/Models'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.create({
      name: 'DIT',
      email: 'hi@dit.com',
      password: 'secret',
      username: 'dit'
    })
  }
}
