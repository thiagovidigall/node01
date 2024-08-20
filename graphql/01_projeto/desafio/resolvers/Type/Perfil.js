const db = require('../../config/db')


// resolvers, a partir dos perfis, obter os usuarios
module.exports = {
    usuarios(perfil) {
        return db('usuarios')
            .join(
                'usuarios_perfis',
                'usuarios.id',
                'usuarios_perfis.usuario_id'
            )
            .where({ perfil_id: perfil.id })
    }
}