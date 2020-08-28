$(document).ready(function() {
    var radioIcon = '<i class="fas fa-check fa-sm icon-style radiobox-icon exist" style = "color: #FFF !important"></i>';

    //STEPS
    var $next = $('#next');
    var $stepsContainer = $('.steps-container');
    var $stepsContent = $('.steps-content');

    setSteps();
    $next.trigger('click');
    setRadioButton();

    function setRadioButton() {
        var price = '.price';
        var itemBoxContainer = '.item-radio-box-container';
        var $parent = $('input[name=subscription]').parents(itemBoxContainer);

        var $step2Validation = $("#step2Validation");
        var buttonValue = parseFloat($step2Validation.find('span:first').text());
        $parent.on('click', function() {
            var value = 0;
            var $price = $(this).find(price);
            value = parseFloat($price.text());


            console.log(value);

            $step2Validation.find('span:first').text((buttonValue + value).toFixed(2));
        })
    }


    function setSteps() {
        var firstChild = $stepsContainer.find('.active:first');
        var existLine = firstChild.find('.line-wrapper');
        var done = firstChild.hasClass('done');
        var brother = firstChild.next();

        if (done === true) {
            return;
        }

        if (firstChild.length !== 0) {
            //exista clasa
            if (existLine.length != 0) {
                firstChild.removeClass('active');

            } else {
                firstChild.addClass('done');
            }

            firstChild.find('.text').removeClass('blue-color');
            firstChild.find('.text').removeClass('bold-700');
            firstChild.find("span").removeClass('gray-color');
            firstChild.find("span").addClass('green-color');
            firstChild.removeClass('dark-violet');
            firstChild.find('.circle').addClass('no-border');
            firstChild.find('.inner-circle').addClass('green-color');
            firstChild.find('.number').addClass('d-none');
            firstChild.find('.inner-circle').append(radioIcon);
            brother.find('.no-border').removeClass('no-border');
            brother.find('.dark-violet').removeClass('dark-violet');
            brother.find('.opacity-80').removeClass('opacity-80');
            brother.find("span").removeClass('gray-color');
            brother.addClass('active');
            brother.find('.text').addClass('blue-color');
            brother.find('.text').addClass('bold-700');

        } else {
            //nu exista clasa
            var children = $stepsContainer.find('.step-wrapper').first();
            children.addClass('active');
            children.find('.text').addClass('blue-color');
            children.find('.text').addClass('bold-700');
            children.find('.no-border').removeClass('no-border');
            children.find('.dark-violet').removeClass('dark-violet');
            children.find('.opacity-80').removeClass('opacity-80');
            children.find("span").removeClass('gray-color');
        }

        var firstActiveStepContent = $stepsContent.find('.active:first');
        var nextStep = firstActiveStepContent.next();

        if (firstActiveStepContent.length !== 0) {
            firstActiveStepContent.removeClass('active');
            firstActiveStepContent.addClass('d-none-custom');
            firstActiveStepContent.removeAttr("style");
            nextStep.addClass('active');
            nextStep.show('slow');

        } else {
            var firstActiveStepContent = $stepsContent.find('.step-content').first();
            firstActiveStepContent.addClass('active');
            firstActiveStepContent.show('slow');
        }

    }

    // go next step
    goNextStep = (stepToValidate) => {
        stepToValidate.validateAll();
        stepToValidate.inputsDetails

        if (stepToValidate.isValid) {

            console.log("intra");
            setSteps();
        }
        // // for testing 
        console.log(stepToValidate.inputsDetails)
        console.log(stepToValidate.isValid)
    }

    //VALIDATION 
    setInput();

    function setInput() {

        inputRestrictor.setInputOnlyWithDigits("cvv");
        inputRestrictor.setInputWithExactCharactersLength("cvv", 3);

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
        var step1Inputs = [{
                    id: 'lastName',
                    fieldLabel: 'Last Name',
                    required: true,
                    minLength:5,
                    type: 'text',
                    triggerType: 'change'
                },
                {
                    id: 'firstName',
                    fieldLabel: 'First Name',
                    required: true,
                    type: 'text',
                    allowedCharacters: 'Numeric',
                    triggerType: 'change'
                },
                {
                    id: 'password',
                    fieldLabel: 'Password',
                    required: true,
                    type: 'text',
                    minLength: '7',
                    allowedCharacters: 'AlfaNumeric',
                    triggerType: 'change'
                },
                {
                    id: 'email',
                    fieldLabel: 'Email',
                    required: true,
                    type: 'text',
                    isEmail: true,
                    triggerType: 'change'
                },
                {
                    id: 'discount',
                    fieldLabel: 'Discount',
                    required: true,
                    type: 'text',
                    allowedCharacters: 'AlphaNumeric',
                    triggerType: 'change'
                },
            ]
            // step2 inputs
        var step2Inputs = [{
                id: 'numeCard',
                fieldLabel: 'Nume Card',
                required: true,
                type: 'text',
                maxLength: '20',
                minLength: '5',
                allowedCharacters: 'Alpha',
                triggerType: 'change'
            },
            {
                id: 'numarCard',
                fieldLabel: 'Numar Card',
                charactersLength: 16,
                required: true,
                type: 'text',
                triggerType: 'change'
            },
            {
                id: 'dataExpirare',
                fieldLabel: 'Data Expirare',
                required: true,
                type: 'text',
                charactersLength: 5,
                triggerType: 'change'
            },

            {
                id: 'cvv',
                fieldLabel: 'Cvv',
                required: true,
                type: 'text',
                maxLength: '3',
                minLength: '3',
                allowedCharacters: 'Numeric',
                triggerType: 'change'
            },
        ]

        var step1Validator = new FormValidator({ inputsList: step1Inputs });
        var step2Validator = new FormValidator({ inputsList: step2Inputs });


        $("#step1Validation").on("click", function() {
            goNextStep(step1Validator)
        })
        $("#step2Validation").on("click", function() {
            goNextStep(step2Validator)

        })
    }
})