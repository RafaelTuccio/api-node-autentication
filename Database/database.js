class Database {
    init(connection) {
        this.connection = connection
        this.createTable()
    }

    createTable() {
        const sql = `CREATE TABLE IF NOT EXISTS users (
                        id INT NOT NULL AUTO_INCREMENT,
                        email VARCHAR(100) NOT NULL UNIQUE,
                        senhaHash varchar(255) NOT NULL,
                        PRIMARY KEY(id)
                        );`
        this.connection.query(sql, (erro) => {
            if(erro) {
                console.error(erro)
            } else {
                console.log("conectado com sucesso")
            }
        })
    }
}

module.exports = new Database