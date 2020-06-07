import knex from 'knex'
import path from 'path' // library para auxiliar com a ideia de caminhos de arquivos

const connection = knex({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true
})

export default connection