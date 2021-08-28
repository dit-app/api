import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'Users/Register.store')
Route.get('/users/register/:key', 'Users/Register.show')
Route.put('/users/register/', 'Users/Register.update')

Route.get('/user', 'Users/Main.show').middleware('auth')
Route.put('/user', 'Users/Main.update').middleware('auth')

Route.get('/user-register', async ({ view }) => {
  return view.render('emails/verify-email')
})
