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

// get collection
const readItem = (req) => {
    console.log('reading item')
    // get items with a positive qty
    if (req.query.quantity) {
        console.log('reading item with quantitty')
        return new Promise((resolve, reject) => {
            Models[req.params.endpoint].find({ quantity: { $gte: 1 } }, (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }
    else if (req.query.toBuy) {
        console.log('reading item with toBuy')
        return new Promise((resolve, reject) => {
            Models[req.params.endpoint].find({ toBuy: true }, (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }
    else {
        console.log('reading item with nothing')
        return new Promise((resolve, reject) => {
            Models[req.params.endpoint].find(req.query, (err, collection) => {
                err ? reject(err) : resolve(collection);
            })
        })
    }
}

// get one by id
const readOneItem = (req) => {
    return new Promise((resolve, reject) => {
        Models[req.params.endpoint].findById(req.params.id, (err, document) => {
            err ? reject(err) : resolve(document);
        })
    })
}

// get one by name
const findOneItem = (req) => {
    return new Promise((resolve, reject) => {
        Models[req.params.endpoint].find({ name: req.params.name } , (err, document) => {
            err ? reject(err) : resolve(document);
        })
    })
}

// update quantity for one item, by id
const updateItem = (req) => {
    return new Promise((resolve, reject) => {
        if (req.query.quantity) {
            console.log('adding query')
            Models[req.params.endpoint].findOneAndUpdate({ _id: req.params.id }, { ...req.body, $inc: { 'quantity': req.query.quantity } }, (err, document) => {
                if (err) {
                    return reject(err)
                } else {
                    Models[req.params.endpoint].findById(req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        } else {
            console.log('here you are')
            console.log(req.query)
            Models[req.params.endpoint].findByIdAndUpdate(req.params.id, req.body, (err, document) => {
                if (err) {
                    return reject(err)
                } else {
                    Models[req.params.endpoint].findById(req.params.id, (err, updated) => {
                        err ? reject(err) : resolve(updated);
                    })
                }
            })
        }
    })
}

// update one by name
const updateItemByName = (req) => {
    console.log('updating by name !')
    return new Promise((resolve, reject) => {
        Models[req.params.endpoint].findOneAndUpdate({ name: req.params.name }, req.body, (err, document) => {
            // console.log('updatedstuff', document);
            if (err) {
                return reject(err)
            } else {
                Models[req.params.endpoint].find({ name: req.params.name }, (err, updated) => {
                    err ? reject(err) : resolve(updated);
                })
            }
        })
    })
}

// delete one by id
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
    findOneItem,
    updateItem,
    updateItemByName,
    deleteItem
}
