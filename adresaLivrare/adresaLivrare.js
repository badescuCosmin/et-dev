
$(document).ready(function () {

    setInput();
    
    // go next step
    goNextStep = (stepToValidate) => {
        stepToValidate.validateAll();
        stepToValidate.inputsDetails

        if (stepToValidate.isValid) {
            setSteps();
        }
        // // for testing 
        console.log(stepToValidate.inputsDetails)
        console.log(stepToValidate.isValid)
    }

    function setInput() {
        inputRestrictor.setInputOnlyWithDigits("phone");
        inputRestrictor.setInputOnlyWithDigits("zipCode");
        inputRestrictor.setInputWithExactCharactersLength("zipCode", 6);
        inputRestrictor.setInputWithExactCharactersLength("phone", 10);
        // step1 inputs
        var step1Inputs = [
            {
                id: 'oras',
                fieldLabel: 'Select a city',
                type: 'dropdown',
                required: true
            },
            {
                id: 'zipCode',
                fieldLabel: 'Zip Code',
                charactersLength: 6,
                required: true,
                type: 'text',
            },
            {
                id: 'strada',
                fieldLabel: 'Strada',
                type: 'text',
                allowedCharacters: 'AlphaNumeric',
                required: true,
            },
            {
                id: 'numar',
                fieldLabel: 'Numar',
                type: 'text',
                allowedCharacters: 'AlphaNumeric',
                required: true,
            },
            {
                id: 'fullAdress',
                fieldLabel: 'Adresa Completa',
                required: true,
                type: 'text',
                allowedCharacters: 'AlphaNumeric',
                triggerType: 'change'
            },
            {
                id: 'name',
                fieldLabel: 'Name',
                required: true,
                type: 'text',
                allowedCharacters: 'Alpha',
                triggerType: 'change'
            },
            {
                id: 'phone',
                fieldLabel: 'Phone',
                required: true,
                type: 'text',
                charactersLength: 10,
                triggerType: 'change'
            }
        ]
        // step2 inputs
       
        var step1Validator = new FormValidator({ inputsList: step1Inputs });
    

        $("#addressValidation").on("click", function () {
            goNextStep(step1Validator)
        })
    }
})


