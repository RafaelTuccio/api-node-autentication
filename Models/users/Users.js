const connection = require("../../Database/connection")



class Users {

    save(user, res) {
        const sql = 'INSERT INTO usuario SET ?'
        
       
    try{
        connection.query(sql, user, (erro, result) => {   
            res.status(201).json({msg:"user cadastrado com sucesso"}).end()
            console.log(erro)
        })
    } catch(err){
        console.log(err.message)
    }
}

    listar(res){
        const sql = "select * from usuario"
        try{
            connection.query(sql, (erro, result) => {
                if (erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(200).json({'data':result}).end()
                }
            })

        } catch(err){
            console.log(err.message)
        }
    }

    comparaCredenciais(usuario, res){
        
    }

    findByEmail(email, res){
        console.log(email)
        const sql = `SELECT * FROM usuario WHERE email = '${email}'`
        console.log(sql)
        try {
            connection.query(sql, (erro, result) => {
                const usuario = result[0]
                res.status(200).json({"usuario" : usuario}).end
            })
        } catch (erro) {
            res.status(400).json(erro.msg)
        }
    }

    findById(id) {
        const sql = `SELECT * FROM usuario WHERE id = ${id}`

        try {
            connection.query(sql, (erro, result) => {
                const usuario = result[0]
                res.status(200).json({"usuario" : usuario}).end
            })
        } catch (erro) {
            res.status(400).json(erro.msg)
        }

    }
}

module.exports = new Users