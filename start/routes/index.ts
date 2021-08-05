import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users'

Route.get('/hello', () => {
  return 'Hello world'
})
