import Route from '@ioc:Adonis/Core/Route'

Route.post('/user/hard-skill', 'HardSkill/Main.store').middleware('auth')
Route.put('/user/hard-skill/:id', 'HardSkill/Main.update').middleware('auth')
