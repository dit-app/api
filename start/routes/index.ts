import Route from '@ioc:Adonis/Core/Route'
import './auth'
import './users'
import './forgot-password'
import './social'
import './education'
import './preview-experience'
import './hardskills'

Route.get('/hello', () => {
  return 'Hello world'
})
