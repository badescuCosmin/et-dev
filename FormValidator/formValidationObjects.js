var inputType = {
    number: "number",
    text: "text",
    checkbox: "checkbox",
    radiobox: "radiobox",
    dropdown: "dropdown"
}

var charactersType = {
    alpha: "Alpha",
    numeric: "Numeric",
    alphaNumeric: "AlphaNumeric"
}

var triggerType = {
    keypress: "keypress",
    change: "change",
    click: "click"
}

var displayNone = "d-none";
var boxMainContainer = "box-main-container";
var errorInputContainer = "error-input-container";
var errorValidation = "error-validation";
var errorBorder = "error-border";
var validationMesages = {}

validationMesages.getRequiredErrorMessage = function(field) {
    if (!field) {
        field = "Field";
    }
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

validationMesages.getAllowedAplhaCharactersErrorMessage = function() {
    return `Enter only alphabetical letters`;
}

validationMesages.getAllowedDigitsErrorMessage = function() {
    return `Enter only digits`;
}

validationMesages.getAllowedAlphaNumericErrorMessage = function() {
    return `Enter only letters and digits, no other characters are allowed`;
}


validationMesages.getMaxValueErrorMessage = function(maxValue) {
    return `The maximum value is ${maxValue}`;
}

validationMesages.getMinValueErrorMessage = function(minValue) {
    return `The minimum value is ${minValue}`;
}

validationMesages.getCharactersLengthErrorMessage = function(length) {
    return `Characters length required is ${length}`;
}



//chestii de precizat
// orice checkbox are mandatory parent-ul, adica ala de apesi pe el sa fie checkbox-ul selectat;
//orice chechbox/radiobox trebuie sa aiba neaparat ca si main container clasa .box-main-container
//probleme, nu face by default trigger verificaaaa Alexxx