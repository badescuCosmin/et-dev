var generalMethods = {};

(function() {
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
    var $boxMainContainer = $('.box-main-container');
    var $itemRadioBoxContainer = $('.item-radio-box-container', $boxMainContainer);
    var $radioCircle = $('.circle', $radioboxWrapper);
    var $stepsContainer = $('.steps-container');
    var $stepsContent = $('.steps-content');

    generalMethods.setCheckbox = function() {

        $itemBoxContainer.on('click', function() {
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
    }

    generalMethods.setRadiobox = function() {
        $itemRadioBoxContainer.on('click', function(e) {
            const $circle = $(this).find('.circle');
            const $wrapper = $(this).find('.radiobox-wrapper');
            const $innerCircle = $circle.children().first();
            $("input", $wrapper).prop("checked", true);
            $itemRadioBoxContainer.find("span").removeClass(blueColorClass);
            $(this).find("span").addClass(blueColorClass);
            $('.radiobox-icon', $radioboxWrapper).remove();
            $radioCircle.removeClass(checkBackground);
            $('.inner-circle', $radioboxWrapper).removeClass(displayNone);
            $innerCircle.addClass(displayNone);
            $circle.addClass(checkBackground);
            $circle.append(radioIcon);
        })
    }

    generalMethods.setSteps = function() {
        var firstChild = $stepsContainer.find('.active:first');
        var existLine = firstChild.find('.line-wrapper');
        var done = firstChild.hasClass('done');
        var brother = firstChild.next();

        if (done === true) {
            return;
        }

        if (firstChild.length !== 0) {
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
}());