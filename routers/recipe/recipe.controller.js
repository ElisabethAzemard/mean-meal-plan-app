/* IMPORTS */
const Models = require('../../models/index.model');


/* CRUD DEFINITION */
const createItem = (req) => {
    return new Promise((resolve, reject) => {
        Models.recipe.create(req.body)
            .then(endpoint => resolve({ endpoint, identity: req.user }))
            .catch(err => reject(err));
    })
}

const readItem = (req) => {
    return new Promise((resolve, reject) => {
        Models.recipe.find((err, collection) => {
            err ? reject(err) : resolve(collection);
        })
    })
}

const readOneItem = (req) => {
    return new Promise((resolve, reject) => {
        Models.recipe.findById(req.params.id, (err, document) => {
            err ? reject(err) : resolve(document);
        })
    })
}

const updateItem = (req) => {
    return new Promise((resolve, reject) => {
        Models.recipe.findByIdAndUpdate(req.params.id, req.body, (err, document) => {
            if (err) {
                return reject(err)
            } else {
                Models.recipe.findById(req.params.id, (err, updated) => {
                    err ? reject(err) : resolve(updated);
                })
            }
        })
    })
}

const deleteItem = (req) => {
    return new Promise((resolve, reject) => {
        Models.recipe.deleteOne({ _id: req.params.id }, (err, document) => {
            err ? reject(err) : resolve(document);
        })
    })
}

/* ITEM FUNCTIONS EXPORTS */
module.exports = {
    createItem,
    readItem,
    readOneItem,
    updateItem,
    deleteItem
}
