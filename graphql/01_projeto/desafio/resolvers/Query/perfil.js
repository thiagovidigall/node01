const db = require('../../config/db')

module.exports = {
    async perfis() {
        return db('perfis')
        .select('id', 'nome','rotulo')
        .then( res => res )
        .catch( err => err.sqlMessage )
        .finally (() => db.destroy())
    },
    async perfil(_, { filtro }) {
        // implementar
    }
}