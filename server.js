/* 
Imports
*/
    // Node
    require('dotenv').config(); //=> https://www.npmjs.com/package/dotenv
    const express = require('express'); //=> https://www.npmjs.com/package/express

    // Inner
    const MongoClass = require('./services/mongo.class');
    const PostModel = require('./models/post.model');
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
        // Create new Post
        // PostModel.create({
        //     title: "Mon titre",
        //     content: "Ullamco adipisicing sit ex dolore. Incididunt tempor minim deserunt amet. Deserunt ut culpa magna nostrud adipisicing nostrud. Sunt velit dolore amet dolore in officia nostrud dolor amet dolore labore fugiat. Ea ipsum tempor consectetur ea consectetur incididunt reprehenderit sint. Sint est ex minim ea sint proident et ad elit dolore."
        // })
        // .then(newPost => console.log(newPost))
        // .catch(error => console.log(error));

        // Get all data
        // PostModel.find((err, posts) => {
        //     err 
        //     ? console.log(err)
        //     : console.log('PostModel.find', posts.length);

        // });

        // Get data by _id
        // PostModel.findById('6040bc3323fcab480cad04ae', (err, post) => {
        //     err 
        //     ? console.log(err)
        //     : console.log('PostModel.findById',post);
        // });

        // Delete one data
        // PostModel.deleteOne({_id: '6040bc3323fcab480cad04ae'}, (err, post) => {
        //     err 
        //     ? console.log(err)
        //     : console.log('PostModel.deleteOne',post);
        // });

        // Update one data
        PostModel.findByIdAndUpdate('6040bd69a43ac607889a2b57', {
            title: "New title",
            content: "foo"
        }, (err, post) => {
            err 
            ? console.log(err)
            : console.log('PostModel.findByIdAndUpdate',post);
        });

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