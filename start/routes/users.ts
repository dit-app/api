import Route from '@ioc:Adonis/Core/Route'

/* Register */
Route.post('/users/register', 'Users/Register.store')
Route.get('/users/register/:key', 'Users/Register.show')
Route.put('/users/register/', 'Users/Register.update')
Route.get('/user-register', async ({ view }) => {
  return view.render('emails/verify-email')
})


/* Forgot Password */
Route.post('/forgot-password', 'Users/ForgotPassword.store')
Route.put('/forgot-password', 'Users/ForgotPassword.update')

/* Main */
Route.get('/user', 'Users/Main.show').middleware('auth')
Route.put('/user', 'Users/Main.update').middleware('auth')

/* Avatar */
Route.put('/user/avatar', 'Users/Avatar.update').middleware('auth')
Route.delete('/user/avatar', 'Users/Avatar.destroy').middleware('auth')

/* Education */
Route.post('/user/education/', 'Education/Main.store').middleware('auth')
Route.put('/user/education/', 'Education/Main.update').middleware('auth')

/* Experience */
Route.put('/user/preview-experience', 'PreviewExperience/Main.update').middleware('auth')

/* Social */
Route.put('/user/social', 'Social/Main.update').middleware('auth')

/* Skills */
Route.post('/user/hard-skill/', 'HardSkill/Main.store').middleware('auth')
Route.put('/user/hard-skill/', 'HardSkill/Main.update').middleware('auth')
Route.post('/user/soft-skill/', 'SoftSkill/Main.store').middleware('auth')
Route.put('/user/soft-skill/', 'SoftSkill/Main.update').middleware('auth')
