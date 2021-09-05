import Route from '@ioc:Adonis/Core/Route'

Route.post('/user/preview-experience', 'PreviewExperience/Main.store').middleware('auth')
Route.put('/user/preview-experience/:id', 'PreviewExperience/Main.update').middleware('auth')
