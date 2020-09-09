const Server = require('./server.json')

let Host = "http://localhost:8080";

//数据库配置
let Database = require('./database.dev.json');;


module.exports = {
    Server,
    Host,
    Database
}