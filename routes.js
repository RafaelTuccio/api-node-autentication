const Users = require('./Models/users/Users')

module.exports = app => {
    app.get("/", (req, res) => {res.send("primeira rota")})

    app.get('/usuario', (req, res) => {
        
        
        Users.listar(res)

    })

    app.post('/usuario', (req, res) => {
        const usuario = req.body
        console.log(usuario.email)
        console.log(usuario.senhaHash)
        Users.save(usuario, res)
    })

    app.post('/usuario/login', (req, res) => {
        const usuario = req.body
        Users.ComparaCredenciais(usuario, res)
    })

    app.get("/usuario/:email", (req, res) => {
        const email = req.params.email
        //console.log(email)
        Users.findByEmail(email, res)
    })

}