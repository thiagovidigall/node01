const db = require('../config/db')

// //exemplo 1
// const novoPerfil = {
//   nome: 'visitante',
//   rotulo: 'Visitante'
// }

// db('perfis').insert(novoPerfil)
//   .then(res => console.log(res))
//   .catch(err => console.log(err.sqlMessage))
//   .finally(() => db.destroy())

// exemplo 2
const perfilSU = {
  nome: 'root' + Math.random(),
  rotulo: 'Super Usuario'
}

// exemplo 3
// insert into perfis (nome, rotulo) values ('...', '...')
// db.insert(perfilSU).into('perfis')
//   .then(res => console.log(res))
//   .catch(err => console.log(err.sqlMessage))
//   .finally(() => db.destroy())

// exemplo 4
// promise, encadear as respostas
db.insert(perfilSU).into('perfis')
  .then(res => console.log(res[0]))  // passar de array para id
  .then(id => `O código gerado foi ${id}`) // passar de id para msg
  .then(string => console.log(string))
  .catch(err => console.log(err.sqlMessage))
  .finally(() => db.destroy())

// exemplo 5 - fazendo uma query
db('perfis')
    .select('id', 'nome')
    .where('id', '=', 2)
    // .where({id: 2})
    // .where('nome', 'like', '%m%')
    // .whereNot({id: 2})
    // .whereIn('id', [1,2,3])
    // .first()
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())