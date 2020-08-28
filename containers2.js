$(document).ready(function() {

    generalMethods.setCheckbox();
    generalMethods.setRadiobox();

    var $next = $('#next');

    $next.on('click', function() {
        generalMethods.setSteps();
    })

    //ABONEAZA-TE ACUM BUTTON
    setButton();

    function setButton() {
        var price = '.price';
        var $abonament = $("#abonament");
        var itemBoxContainer = '.item-box-container';
        var boxesIds = ["oJucarie", "douaJucarie"];
        var boxesValue = 0;
        var buttonValue = parseFloat($abonament.find('span:first').text());

        boxesIds.forEach(function(itemId) {
            var $input = $(`#${itemId}`);
            var $parent = $input.parents(itemBoxContainer);
            $parent.on('click', function() {
                var $price = $(this).find(price);
                var str = $price.text();
                var stringPrice = str.substring(1);
                var priceValue = parseFloat(stringPrice);
                if ($input.is(':checked')) {
                    boxesValue = boxesValue + priceValue;
                } else {
                    boxesValue = boxesValue - priceValue;
                }
                $abonament.find('span:first').text((buttonValue + boxesValue));
            })
        })
    }

    //VALIDATION 
    setInput();

    function setInput() {

        $('#dateInput2').datepicker({
            format: "mm/yy",
            startView: "months",
            minViewMode: "months",
        });

        inputRestrictor.setInputOnlyWithDigits("cvv");
        inputRestrictor.setInputWithExactCharactersLength("cvv", 3);
        //
        inputRestrictor.setInputOnlyWithDigits("card");
        inputRestrictor.setInputWithExactCharactersLength("card", 16);
        inputRestrictor.putCharacterAfterNumberOfCharacters("card", " ", 4);
        //date
        inputRestrictor.setInputOnlyWithDigits("dateInput");
        inputRestrictor.setInputWithExactCharactersLength("dateInput", 5);
        inputRestrictor.putCharacterAfterNumberOfCharacters("dateInput", "/", 2);

        var inputsList = [{
                id: 'name',
                fieldLabel: 'Name',
                required: true,
                type: 'text',
                maxLength: '5',
                minLength: '3',
                allowedCharacters: 'Alpha',
                triggerType: 'change'
            },
            {
                id: 'card',
                fieldLabel: 'Card',
                charactersLength: 16,
                required: true,
                type: 'text',
                triggerType: 'change'
            },

            {
                id: 'cvv',
                fieldLabel: 'CVV',
                charactersLength: 3,
                required: true,
                type: 'text',
            },
            {
                id: 'dateInput',
                fieldLabel: 'Date',
                charactersLength: 5,
                required: true,
                type: 'text',
                triggerType: 'change'
            },
            {
                id: 'password',
                fieldLabel: 'Password',
                charactersLength: 3,
                type: 'text',
                allowedCharacters: 'AlphaNumeric',
                required: true,
            },
            {
                id: 'list',
                fieldLabel: 'List',
                type: 'dropdown',
                required: true
            },
            {
                id: 'list2',
                fieldLabel: 'List 2',
                type: 'dropdown',
                required: true
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
                id: 'oJucarie',
                parent: 'item-box-container',
                required: true,
                type: 'checkbox',
                triggerType: 'click'
            },
            {
                id: 'douaJucarie',
                parent: 'item-box-container',
                fieldLabel: 'Jucarie box',
                required: true,
                type: 'checkbox',
                triggerType: 'click'
            },
            {
                id: 'conditii',
                required: true,
                type: 'checkbox',
                triggerType: 'click'
            },
            {
                name: 'subscription',
                parent: 'radiobox-wrapper',
                required: true,
                type: 'radiobox',
                triggerType: 'click'
            },




        ]


        var options = {
            inputsList: inputsList
        }

        var formValidator = new FormValidator(options);

        $("#valideaza").on("click", function() {
            formValidator.validateAll();
            formValidator.inputsDetails

            if (formValidator.isValid) {
                //go foward
            }
            console.log(formValidator.inputsDetails)
            console.log(formValidator.isValid)
        })

        // valideaza.setoceapa();
    }
})