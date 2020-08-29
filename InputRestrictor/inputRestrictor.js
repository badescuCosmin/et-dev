var inputRestrictor = {};

(function() {

    var event = 'keypress';
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        event = "input";
    }

    inputRestrictor.setInputOnlyWithDigits = function(inputId) {
        $(`#${inputId}`).on(event, function(e) {
            if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
                return false;
            }
        });
    }
    inputRestrictor.setInputWithExactCharactersLength = function(inputId, charactersLength) {
        $(`#${inputId}`).on(event, function(e) {
            var value = this.value.replace(/ /g, '').length;
            if (value === charactersLength) {
                return false;
            }
        });
    }

    inputRestrictor.putCharacterAfterNumberOfCharacters = function(inputId, character, numberOfCharacters) {
        $(`#${inputId}`).keyup(function() {
            var partOfValue = $(this).val().split(character).join("");
            if (partOfValue.length > 0) {
                partOfValue = partOfValue.match(new RegExp(`.{1,${numberOfCharacters}}`, 'g')).join(character);
            }
            $(this).val(partOfValue);
        });
    }
}());