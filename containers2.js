$(document).ready(function() {
    var $checkboxWrapper = $('.checkbox-wrapper');
    var addIcon = '<i class="fas fa-plus fa-sm icon-style checkbox-icon-add"></i>';
    var checkIcon = '<i class="fas fa-check fa-sm icon-style checkbox-icon-check"></i>';
    var radioIcon = '<i class="fas fa-check fa-sm icon-style radiobox-icon exist" style = "color: #FFF !important"></i>';
    var checkBackground = 'item-box-check-background';
    var solidBlueBorder = '2px solid #1170DA';
    var transparentBorder = '2px solid transparent';
    var blueColorClass = 'blue-color';
    var displayNone = 'd-none';
    var $radioboxWrapper = $('.radiobox-wrapper');
    var $itemBoxContainer = $('.item-box-container');
    var $radioCircle = $('.circle', $radioboxWrapper);
    //STEPS
    var $prev = $('#prev');
    var $next = $('#next');
    var $stepsContainer = $('.steps-container');
    var $stepsContent = $('.steps-content');
    setcheckbox();
    setRadiobox();
    setSteps();

    function setcheckbox() {
        $checkboxWrapper.on('click', function() {
            const $checkContainer = $(this);
            const $parentContainer = $checkContainer.parent();
            const $checkbox = $checkContainer.children().first('input');
            const icon = $checkContainer.find('i');
            if (!$checkbox.is(":checked")) {
                $checkbox.attr('checked', true);
                icon.remove();
                $checkContainer.append(checkIcon);
                $checkContainer.addClass(checkBackground);
                $parentContainer.css('border', solidBlueBorder);
                $parentContainer.find("span").addClass(blueColorClass)
            } else {
                icon.remove();
                $checkContainer.removeClass(checkBackground);
                $checkbox.attr('checked', false);
                $checkContainer.append(addIcon);
                $parentContainer.css('border', transparentBorder);
                $parentContainer.find("span").removeClass(blueColorClass)
            }
        })
    }

    function setRadiobox() {
        $radioCircle.on('click', function() {
            const $circle = $(this);
            const $parentContainer = $circle.parent().parent();
            const $innerCircle = $circle.children().first();
            const $radioInput = $circle.siblings();
            $radioInput.trigger('click');
            $itemBoxContainer.find("span").removeClass(blueColorClass)
            $parentContainer.find("span").addClass(blueColorClass)
            $('.radiobox-icon', $radioboxWrapper).remove();
            $radioCircle.removeClass(checkBackground);
            $('.inner-circle', $radioboxWrapper).removeClass(displayNone);
            $innerCircle.addClass(displayNone);
            $circle.addClass(checkBackground);
            $circle.append(radioIcon);
        })
    }

    function setSteps() {
        $next.on('click', function() {
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
        })
    }

    //VALIDATION 
    setInput();

    function setInput() {
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
                required: true,
                type: 'number',
                maxValue: 1000,
                minValue: 3,
                allowedCharacters: 'Numeric',
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
                parent: 'checkbox-wrapper',
                required: true,
                type: 'checkbox',
                triggerType: 'click'
            },
            {
                id: 'douaJucarie',
                parent: 'checkbox-wrapper',
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