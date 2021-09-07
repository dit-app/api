import Route from '@ioc:Adonis/Core/Route'

Route.post('/user/soft-skill', 'SoftSkill/Main.store').middleware('auth')
Route.put('/user/soft-skill/:id', 'SoftSkill/Main.update').middleware('auth')
