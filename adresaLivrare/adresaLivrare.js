
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
        inputRestrictor.setInputOnlyWithDigits("zipCode");
        inputRestrictor.setInputWithExactCharactersLength("zipCode", 6);

        inputRestrictor.setInputWithExactCharactersLength("dataExpirare", 5);
        //
        inputRestrictor.setInputOnlyWithDigits("numarCard");
        inputRestrictor.setInputWithExactCharactersLength("numarCard", 16);
        inputRestrictor.putCharacterAfterNumberOfCharacters("numarCard", " ", 4);
        //date
        inputRestrictor.setInputOnlyWithDigits("dataExpirare");
        inputRestrictor.setInputWithExactCharactersLength("dataExpirare", 5);
        inputRestrictor.putCharacterAfterNumberOfCharacters("dataExpirare", "/", 2);
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
            }
        ]
        // step2 inputs
       
        var step1Validator = new FormValidator({ inputsList: step1Inputs });
    

        $("#addressValidation").on("click", function () {
            goNextStep(step1Validator)
        })
    }
})


