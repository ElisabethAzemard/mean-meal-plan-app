/* SERVICE DEFINITION */
const MandatoryFields = {
    item: ['name'],
    recipe: ['name'],
    identity: ['email', 'password'],
    register: ['email', 'password', 'firstname', 'lastname', 'birthdate']
};

/* SERVICE FUNCTIONS EXPORT */
module.exports = MandatoryFields;
