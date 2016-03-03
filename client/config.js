Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    extraSignupFields: [{
        fieldName: 'organisation',
        fieldLabel: 'Organisation/Group',
        inputType: 'text',
        visible: true,
    }, {
        fieldName: 'admin',
        fieldLabel: 'I am the host/admin for the named organisation/group',
        inputType: 'checkbox',
        visible: true,
        saveToProfile: false,
        validate: function(value, errorFunction) {
            if (value) {
                return true;
            } else {
                errorFunction('Only the host/admin of the group needs to sign up for an account.');
                return false;
            }
        }
    }]
});