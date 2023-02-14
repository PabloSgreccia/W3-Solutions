const app = require('./server')
const http = require('http').createServer(app)
const {sequelize} = require('./database/models/index');

const PORT = process.env.PORT || 3000

http.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
    sequelize.authenticate().then(() => {
        console.log('Success DB connection');
    }).catch(error => {
        console.log('Unable to connect to the database: \n', error);
    })
})
