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
        identity: [Schema.Types.ObjectId],
        firstname: String,
        lastname: String,
        password: String
    });
//

/*
Export
*/
    module.exports = mongoose.model( 'user', MySchema );
//
