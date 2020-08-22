var inputType = {
    number: "number",
    text: "text",
    checkbox: "checkbox",
    radiobox: "radiobox"
}

var charactersType = {
    alpha: "Alpha",
    numeric: "Numeric",
    alphaNumeric: "AlphaNumeric"
}

var triggerType = {
    keypress: "keypress",
    change: "change"
}

var displayNone = "d-none";
var errorInputContainer = "error-input-container";
var emailErrorValidation = "email-error-validation";
var charactersLengthErrorValidation = "characters-length-error-validation";
var requiredErrorValidation = "required-error-validation";
var errorBorder = "error-border";

var validationMesages = {}

validationMesages.getRequiredErrorMessage = function(field) {
    return `${field} is required`;
}

validationMesages.getMinCharactersErrorMessage = function(number) {
    return `Enter at least ${number} characters`;
}

validationMesages.getMaxCharactersErrorMessage = function(min, max) {
    return `Enter a value between  ${min} and ${max} characters long`;
}

validationMesages.getEmailErrorMessage = function() {
    return `Is is not a valid e-mail address`;
}

//LIST
// var inputsList = [{
//     id: 'name',
//     name: 'test',
//     required: true,
//     type: 'text',
//     maxLength: '5',
//     minLength: '10',
//     allowedCharacters: 'Alpha',
//     email: true,
//     triggerType: 'focus'
// },
// {
//     id: 'name',
//     required: false,
//     type: 'number',
//     maxLength: '5',
//     minLength: '10',
//     allowedCharacters: 'Numeric',
//     password: true,
//     triggerType: 'focus'
// },
// {
//     id: 'name',
//     required: true,
//     type: 'text',
//     maxLength: '5',
//     minLength: '10',
//     allowedCharacters: 'AlphaNumeric',
//     triggerType: 'focusout'
// },
// {
//     id: 'name',
//     name: 'subscription',
//     required: true,
//     type: 'radiobox',
// },
// {
//     id: 'name',
//     required: true,
//     type: 'checkbox',
// },
// ]