$(document).ready(function () {
    var max_fields = 10;
    var wrapper = $(".inner-wrapper");
    var add_button = $(".add");
    var x = 1; 
    $(add_button).click(function (e) {
        e.preventDefault();
        if (x < max_fields) {
            x++;
            $(wrapper).append(`
            <div class="inner-wrapper">
                <div class="input-container">
                    <input type="text" class="input-style" placeholder="Prenume" id="firstName${x}" />
                    <div class="error-input-container">
                        <span class="error-validation"></span>
                    </div>
                </div>
                <div class="input-container">
                    <input type="text" class="input-style" placeholder="Nume" id="lastName${x}" />
                    <div class="error-input-container">
                        <span class="error-validation"></span>
                    </div>
                </div>
                <div class="remove_field text-right">Remove</div>
            </div>
            `);
        }
    });
    $(wrapper).on("click", ".remove_field", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });
    (function setInput() {
        inputRestrictor.setInputWithExactCharactersLength("birthday", 8);
        inputRestrictor.putCharacterAfterNumberOfCharacters("birthday", "/", 2);
        // step1 inputs
        var inputs = [{
            id: 'name',
            fieldLabel: 'Name',
            required: true,
            type: 'text',
            minLength: '3',
            allowedCharacters: 'Alpha'
        },
        {
            id: 'birthday',
            fieldLabel: 'Birthday',
            required: true,
            type: 'text',
            minLength: '3',
            charactersLength: 8
        }]
   
        var inputsValidator = new FormValidator({ inputsList: inputs });

        $("#btn-cta").on("click", function () {
            generalMethods.goNextStep(inputsValidator);
        });

    })();
});