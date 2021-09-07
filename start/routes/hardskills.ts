import Route from '@ioc:Adonis/Core/Route'

Route.post('/user/hard-skills', 'HardSkill/Main.store').middleware('auth')
Route.put('/user/hard-skills/:id', 'HardSkill/Main.update').middleware('auth')
