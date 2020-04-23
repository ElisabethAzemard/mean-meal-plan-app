/* IMPORTS */
const Models = require('../models/index.model');

// Replace 'Models.endpoint' with appropriate Models.modelName when using this file as template.

/* CRUD DEFINITION */
const createItem = (req) => {
    let endpoint = req.params.endpoint;

    return new Promise((resolve, reject) => {
        Models.endpoint.create(req.body)
            .then(endpoint => resolve({ endpoint, identity: req.user }))
            .catch(err => reject(err));
    })
}

const readItem = (req) => {
    let endpoint = req.params.endpoint;

    return new Promise((resolve, reject) => {
        Models.recipe.find((err, collection) => {
            err ? reject(err) : resolve(collection);
        })
    })
}

const readOneItem = (req) => {
    let endpoint = req.params.endpoint;

    return new Promise((resolve, reject) => {
        Models.endpoint.findById(req.params.id, (err, document) => {
            err ? reject(err) : resolve(document);
        })
    })
}

const updateItem = (req) => {
    let endpoint = req.params.endpoint;

    return new Promise((resolve, reject) => {
        Models.endpoint.findByIdAndUpdate(req.params.id, req.body, (err, document) => {
            if (err) {
                return reject(err)
            } else {
                Models.endpoint.findById(req.params.id, (err, updated) => {
                    err ? reject(err) : resolve(updated);
                })
            }
        })
    })
}

const deleteItem = (req) => {
    let endpoint = req.params.endpoint;

    return new Promise((resolve, reject) => {
        Models.endpoint.deleteOne({ _id: req.params.id }, (err, document) => {
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
