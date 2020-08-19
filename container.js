$(document).ready(function() {

    //de obicei clasele sau id-urile se declara la inceput de clasa si daca sunt cu jquery se pune un dolar in fata sa stim ca este element DOM.
    //se declara la inceput de file pentru ca poate fi folosit de mai multe ori in program si in loc sa schimba peste tot in caz ca se schimba id/clasa schimbam doar aici
    var $checkboxWrapper = $('.checkbox-wrapper');
    var addIcon = '<i class="fas fa-plus fa-sm icon-style checkbox-icon-add"></i>';
    var checkIcon = '<i class="fas fa-check fa-sm icon-style checkbox-icon-check"></i>';
    var radioIcon = '<i class="fas fa-check fa-sm icon-style radiobox-icon" style = "color: #FFF !important"></i>';
    var checkBackground = 'item-box-check-background';
    var solidBlueBorder = '2px solid #1170DA';
    var transparentBorder = '2px solid transparent';
    var blueColorClass = 'blue-color';
    var displayNone = 'd-none';
    //  RADIOBOX
    var $radioboxWrapper = $('.radiobox-wrapper');
    var $itemBoxContainer = $('.item-box-container');
    var $radioCircle = $('.circle', $radioboxWrapper);
    setcheckbox();
    setRadiobox();

    function setcheckbox() {
        //este foarte important sa folosim cu on sau bind desi eu prefer on, pentru ca e posibil ca acea clasa sau id sa nu se fi creat la momentul cand tu vrei sa faci un
        //eveniment asa ca on asteapta cumva ca elementul DOM sa fie pus pe pagina sa se poata face evenimentul, daca nu intelegi mai citesti pe net :))
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
})