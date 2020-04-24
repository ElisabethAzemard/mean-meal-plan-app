/* SERVICE DEFINITION */
const MandatoryFields = {
    item: ['name', 'barcode', 'category', 'storage'],
    recipe: ['name', 'ingredients', 'steps', 'timing'],
    identity: ['email', 'password'],
    register: ['email', 'password', 'firstname', 'lastname', 'birthdate']
};

/* SERVICE FUNCTIONS EXPORT */
module.exports = MandatoryFields;
