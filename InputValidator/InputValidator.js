var InputValidator = (function() {

    function InputValidator(options) {
        this.options = $.extend(true, {}, InputValidator.options, options)
        this.inputsList = this.options.inputsList;
        this.validateInputs();
    }

    InputValidator.prototype.validateInputs = function() {
        const inputsList = [...this.inputsList];

        inputsList.forEach(function(input) {
            if (input.type) {
                switch (input.type) {
                    case inputType.text:
                        {
                            _setValidationForTextInput.apply(this, [input]);
                            break;
                        }
                    case inputType.number:
                        {
                            _setValidationForNumberInput.apply(this, [input]);
                            break;
                        }
                    case inputType.checkbox:
                        {
                            _setValidationForCheckboxInput.apply(this, [input]);
                            break;
                        }
                    case inputType.radiobox:
                        {
                            _setValidationForRadioBoxInput.apply(this, [input]);
                            break;
                        }
                    default:
                        console.log('no type');
                }
            }


        })
    }

    function _setValidationForTextInput(input) {
        _setValidateInput(input);
    }

    function _setValidationForNumberInput(input) {
        _setValidateInput(input)
    }

    function _setValidationForCheckboxInput(input) {

    }

    function _setValidationForRadioBoxInput(input) {

    }

    function _setValidateInput(input) {
        if (input) {
            if (input.triggerType) {
                switch (input.triggerType) {
                    case triggerType.keypress:
                        {
                            _setKeypressTrigger.apply(this, [input]);
                            break;
                        }
                    default:
                        _setOnChangeTrigger.apply(this, [input]);
                }
            }
        }
    }

    function _setKeypressTrigger(input) {
        $(`#${input.id}`).on('keypress', function() {
            {
                console.log('On keypress');
                var self = $(this);
                var value = this.value;
                _setRequiredValidation(self, value, input);
            }
        })
    }

    function _setOnChangeTrigger(input) {
        $(`#${input.id}`).on('change', function() {
            {
                var self = $(this);
                console.log('On change');
                var value = this.value;
                var $parentContainer = self.parent();
                var numberOfCharacters = value.replace(/ /g, '').length;
                _setMinCharactersValidation(input, $parentContainer, numberOfCharacters);
                _isEmailValidation(input, $parentContainer, value);
                _setRequiredValidation($parentContainer, value, input);
            }
        })
    }

    function _setRequiredValidation($parentContainer, value, input) {
        if (input.required) {
            if (!value) {
                var errorMessage = validationMesages.getRequiredErrorMessage(input.fieldLabel);
                console.log('On getRequiredErrorMessage');
                $(`.${requiredErrorValidation}`, $parentContainer).text(errorMessage);
                $(`.${requiredErrorValidation}`, $parentContainer).siblings().addClass(displayNone);
            } else {
                console.log('On getRequiredErrorMessage delete');
                $(`.${requiredErrorValidation}`, $parentContainer).text("");
            }
        }
    }

    function _setMinCharactersValidation(input, $parentContainer, numberOfCharacters) {
        var errorMessage = "";
        if (input.minLength || input.minLength && input.maxLength) {
            if (input.minLength > numberOfCharacters && numberOfCharacters !== 0) {
                errorMessage = validationMesages.getMinCharactersErrorMessage(input.minLength);
            }
            if (input.maxLength < numberOfCharacters) {
                errorMessage = validationMesages.getMaxCharactersErrorMessage(input.minLength, input.maxLength);
            }
            $(`.${charactersLengthErrorValidation}`, $parentContainer).text(errorMessage);
            $(`.${charactersLengthErrorValidation}`, $parentContainer).removeClass(displayNone);
        }
    }

    function _isEmailValidation(input, $parentContainer, value) {
        var errorMessage = "";
        if (input.isEmail) {
            if (value) {
                var isvalid = _isValidEmailAddress(value);
                if (!isvalid) {
                    errorMessage = validationMesages.getEmailErrorMessage();
                }
                $(`.${emailErrorValidation}`, $parentContainer).text(errorMessage);
            }

        }
    }

    function _isValidEmailAddress(emailAddress) {
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
        return pattern.test(emailAddress);
    }


    InputValidator.options = {
        inputsList: []
    }


    return InputValidator;
}());