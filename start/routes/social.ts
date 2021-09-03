import Route from '@ioc:Adonis/Core/Route'

Route.get('/user/social', 'Social/Main.index').middleware('auth')
Route.post('/user/social', 'Social/Main.store').middleware('auth')
Route.put('/user/social/:id', 'Social/Main.update').middleware('auth')
