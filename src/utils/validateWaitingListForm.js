export const validateWaitingListForm = (values) => {
    const errors = {};

    //first name
    if(!values.firstName) {
        errors.firstName = 'Required';
    } else if(values.firstName.length < 2) {
        errors.firstName = 'First name must be at least 2 characters.';
    } else if(values.firstName.length > 20) {
        errors.firstName = 'Must be 20 characters or less.';
    }

     //last name
    if(!values.lastName) {
        errors.lastName = 'Required';
    } else if(values.lastName.length < 2) {
        errors.lastName = 'Last name must be at least 2.';
    } else if(values.lastName.length > 20) {
        errors.lastName = 'Must be 20 characters or less.';
    }

    //email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegex.test(values.email)) {
        errors.email = 'Please enter a valid email address';
    }

    //borough
    if(!values.borough) {
        errors.borough = 'Please choose a value or select other'
    }

    if(values.borough === 'other') {
        if(!values.other) {
            errors.other = 'Please enter your borough.'
        }
    }

    return errors;
}