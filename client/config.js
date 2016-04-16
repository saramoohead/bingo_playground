Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
    extraSignupFields: [{
        fieldName: 'organisation',
        fieldLabel: 'Organisation (only hosts need logins)',
        inputType: 'text',
        visible: true,
    }]
});