/* SERVICE DEFINITION */
const MandatoryFields = {
    item: ['name'],
    recipe: ['name', 'ingredients'],
    identity: ['email', 'password'],
    register: ['email', 'password', 'repeatepassword', 'firstname', 'lastname', 'birthdate']
};

/* SERVICE FUNCTIONS EXPORT */
module.exports = { MandatoryFields };
