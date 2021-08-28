import Route from '@ioc:Adonis/Core/Route'

Route.post('/forgot-password', 'Users/ForgotPassword.store')
Route.put('/forgot-password', 'Users/ForgotPassword.update')
