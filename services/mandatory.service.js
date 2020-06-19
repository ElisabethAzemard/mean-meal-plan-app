/* SERVICE DEFINITION */
const MandatoryFields = {
    item: [
        'name',
        'barcode',
        'category',
        'storage',
        'quantity',
        'essential',
        'toBuy',
        'urgent',
        'author'
    ],
    recipe: [
        'name',
        'ingredients',
        'steps',
        'timing',
        "notes",
        "tags",
        "new",
        "starchy",
        "planned",
        "author"
    ],
    identity: [
        'email',
        'password'
    ],
    register: [
        'firstname',
        'lastname',
        'email',
        'password'
    ]
};

/* SERVICE FUNCTIONS EXPORT */
module.exports = MandatoryFields;
