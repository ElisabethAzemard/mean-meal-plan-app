/* IMPORTS */
const Models = require('../../models/index.model');

// Replace 'Models[req.params.endpoint]' with appropriate Models.modelName when using this file as template.

/* CRUD DEFINITION */
const createItem = (req) => {
    req.body.author = req.user._id;
    return new Promise((resolve, reject) => {
        Models[req.params.endpoint].create(req.body)
            .then(itemData => resolve({ itemData }))
            .catch(err => reject(err));
    })
}

const readItem = (req) => {
    return new Promise((resolve, reject) => {
        Models[req.params.endpoint].find((err, collection) => {
            err ? reject(err) : resolve(collection);
        })
    })
}

const readOneItem = (req) => {
    return new Promise((resolve, reject) => {
        Models[req.params.endpoint].findById(req.params.id, (err, document) => {
            err ? reject(err) : resolve(document);
        })
    })
}

const updateItem = (req) => {
    return new Promise((resolve, reject) => {
        Models[req.params.endpoint].findByIdAndUpdate(req.params.id, req.body, (err, document) => {
            if (err) {
                return reject(err)
            } else {
                Models[req.params.endpoint].findById(req.params.id, (err, updated) => {
                    err ? reject(err) : resolve(updated);
                })
            }
        })
    })
}

const deleteItem = (req) => {
    return new Promise((resolve, reject) => {
        Models[req.params.endpoint].deleteOne({ _id: req.params.id }, (err, document) => {
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
