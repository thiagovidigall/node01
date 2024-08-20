const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    scalar Date

    type Usuario {
        id: ID
        nome: String
        email: String
        idade: Int
        salario: Float
        vip: Boolean
    }

    type Produto {
        nome: String!
        preco: Float!
        desconto: Float
        precoComDesconto: Float
    }

    # Pontos de entrada da sua API!
    type Query {
        ola: String
        horaAtual: Date!
        usuarioLogado: Usuario
        produtoEmDestaque: Produto
    }
`

const resolvers = {
    Usuario: {
        salario(parent) {
            return parent.salario_real
        }
    },
    Produto: {
        precoComDesconto(parent) {
            if(parent.desconto) {
                return parent.preco * (1 - parent.desconto)
            } else {
                return parent.preco
            }            
        }
    },
    Query: {
        ola(){
            return 'Bom dia!'
        },
        horaAtual() {
            return new Date
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: 'Ana',
                email: 'ana@uol.com',
                idade:3,
                salario_real: 1243.50,
                vip: true
            }
        },
        produtoEmDestaque() {
            return {
                nome: 'monitor',
                preco: 5000,
                desconto: 0.10,
            }
        }

    }
}

const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers: resolvers
})

// Dentro do browser
    // # Write your query or mutation here
    // {
    //   #ola
    //   #horaAtual
    //   #usuarioLogado {nome, email, salario}
    //   produtoEmDestaque { nome, precoComDesconto }
    // }

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})