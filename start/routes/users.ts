import Route from '@ioc:Adonis/Core/Route'

Route.post('/users/register', 'Users/Register.store')
Route.get('/users/register/:key', 'Users/Register.show')
Route.put('/users/register/', 'Users/Register.update')

Route.post('/forgot-password', 'Users/ForgotPassword.store')
Route.put('/forgot-password', 'Users/ForgotPassword.update')

Route.get('/user-register', async ({ view }) => {
  return view.render('emails/verify-email')
})
