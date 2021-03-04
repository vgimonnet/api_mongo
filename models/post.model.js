/*
Import 
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
//

/*
Definition 
*/
    const MySchema = new Schema({
        title: String,
        content: String,
        author: String,
        dateCreated: {
            type: Date,
            default: new Date(),
            // unique: true si on veut que ce champs soit unique 
        }
    });
//

/*
Export
*/
    const MyModel = mongoose.model('post', MySchema);
    module.exports = MyModel;
//

