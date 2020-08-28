$(document).ready(function () {
    var $abonament = $("#abonament");
    var addIcon = '<i class="fas fa-plus fa-sm icon-style checkbox-icon-add"></i>';
    var checkIcon = '<i class="fas fa-check fa-sm icon-style checkbox-icon-check"></i>';
    var checkBackground = 'item-box-check-background';
    var solidBlueBorder = '2px solid #1170DA';
    var transparentBorder = '2px solid transparent';
    var blueColorClass = 'blue-color';
    var $itemBoxContainer = $('.item-box-container');
    setcheckbox();
    function setcheckbox() {
        $itemBoxContainer.on('click', function () {
            const $checkContainer = $(this).find('.checkbox-wrapper');
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
    };
    generalMethods.setButton();
    $abonament.on('click', ()=>window.location = '../steps/steps.html');
});