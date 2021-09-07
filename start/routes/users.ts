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
Route.get('/user/education', 'Education/Main.index').middleware('auth')
Route.post('/user/education', 'Education/Main.store').middleware('auth')
Route.put('/user/education/:id', 'Education/Main.update').middleware('auth')

/* Experience */
Route.post('/user/preview-experience', 'PreviewExperience/Main.store').middleware('auth')
Route.put('/user/preview-experience/:id', 'PreviewExperience/Main.update').middleware('auth')

/* Social */
Route.post('/user/social', 'Social/Main.store').middleware('auth')
Route.put('/user/social/:id', 'Social/Main.update').middleware('auth')

/* Skills */
Route.post('/user/hard-skill', 'HardSkill/Main.store').middleware('auth')
Route.put('/user/hard-skill/:id', 'HardSkill/Main.update').middleware('auth')
Route.post('/user/soft-skill', 'SoftSkill/Main.store').middleware('auth')
Route.put('/user/soft-skill/:id', 'SoftSkill/Main.update').middleware('auth')
