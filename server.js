/* 
Imports
*/
require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
const express = require('express'); //=> https://www.npmjs.com/package/express

const MongoClass = require('./services/mongo.class');
//


/* 
Server definition
*/
class ServerClass{
    // Inject properties in the ServerClass
    constructor(){
        this.server = express();
        this.port = process.env.PORT;
        this.mongoDb = new MongoClass();
    }

    init(){
        // Launch server
        this.launch();
    }


    launch(){
        // Connect MongoDB
        this.mongoDb.connectDb()
        .then(db => {
            // Start server
            this.server.listen( this.port, () => {
                console.log({
                    node: `http://localhost:${this.port}`
                })
            })
        })
        .catch(dbError => {
            console.log(dbError);
        });
        
    }
}
//


/* 
Start server
*/
const MyServer = new ServerClass();
MyServer.init();
//