/*
Import
*/
    const mongoose = require('mongoose');
    const { Schema } = mongoose;
//

/*
Definition
*/
    const MongooseSchema = new Schema({
        recipeId: Schema.Types.ObjectId,
        content: String,
        author: String
    });
//


/*
Export
*/
    module.exports =  mongoose.model('comment', MongooseSchema);
//
