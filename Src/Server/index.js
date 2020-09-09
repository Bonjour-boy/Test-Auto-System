const fs = require('fs');
const path = require('path');
const paths = path.resolve(__dirname,'../Config/server.json');
const express = require('express');
const app = express();
const { Server , Host} = require('../Config')
const database = require('./Database/db');

app.listen(Server.port, () => {
    console.log("服务器已启动: " + Host);
});




async function data (){
    const typeModels = await database.queryProductByModel(
        19
    );
    console.log(typeModels);
}
data()
