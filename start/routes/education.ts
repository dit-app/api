import Route from '@ioc:Adonis/Core/Route'

Route.get('/user/education', 'Education/Main.index').middleware('auth')
Route.post('/user/education', 'Education/Main.store').middleware('auth')
Route.put('/user/education/:id', 'Education/Main.update').middleware('auth')
