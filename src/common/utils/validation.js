export const validate = (values) => {
    const error = {};

    if (!values.username) { 
        error.username = 'Required !'
    } else if (values.username.length > 15) {
        error.username = 'Must be 15 characters or less'
    }

    if (!values.password) {
        error.password = 'Required !'
    } else if (values.password.length > 8) {
        error.password = 'max 8 characters';
    }

    return error;
}