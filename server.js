/* 
Imports
*/
    // Node
    require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
    const express = require('express'); //=> https://www.npmjs.com/package/express
    const bodyParser = require('body-parser');

    // Inner
    const MongoClass = require('./services/mongo.class');
    // const PostModel = require('./models/post.model');
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
        // Set body parser
        this.server.use(bodyParser.json({limit: '20mb'}));
        this.server.use(bodyParser.urlencoded({extended: true}));

        // Start config
        this.config();
    }

    config(){
        // Connect MongoDB
        this.mongoDb.connectDb()
        .then(db => {
            // Set up API router
            const ApiRouterClass = require('./routers/api.router');
            const apiRouter = new ApiRouterClass();
            this.server.use('/api/v1', apiRouter.init());

            // Launch server
            this.launch();
        })
        .catch(dbError => {
            console.log(dbError);
        });
    }


    launch(){
        // Start server
        this.server.listen( this.port, () => {
            console.log({
                node: `http://localhost:${this.port}`
            })
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