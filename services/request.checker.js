/* SERVICE DEFINITION */
const checkFields = (required, object) => {

    /* Declarations */
    const miss = [];
    const extra = [];

    /* CHECK FIELDS */

    // Check miss fields
    required.forEach((prop) => {
        if (!(prop in object)) miss.push(prop);
    });

    // check extra fields
    for (const prop in object) {
        if (required.indexOf(prop) === -1) extra.push(prop);
    }

    // set service state
    const ok = (extra.length === 0 && miss.length === 0);

    // return service state
    return { ok, extra, miss };

};

/* SERVICE FUNCTIONS EXPORT */
module.exports = { checkFields };
