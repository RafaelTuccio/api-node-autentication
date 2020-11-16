require('dotenv').config()
const app = require('./app')
const PORT = 3030
const routes = require('./routes')
const connection = require('./Database/connection')
const Database = require('./Database/database')

routes(app)

connection.connect((erro) => {
    if(erro){
        console.error(erro)
    } else {
        Database.init(connection)
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`))

    }
})
