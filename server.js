const app = require('./app')
const PORT = 3030
const routes = require('./routes')

routes(app)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`))