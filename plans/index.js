$(document).ready(function() {
    var $abonament = $("#abonament");
    setButton();

    function setButton() {
        var price = '.price';
      
        var itemBoxContainer = '.item-box-container';
        var boxesIds = ["box1", "box2", "box3"];
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
                if (!$input.is(':checked')) {
                    boxesValue = boxesValue + priceValue;
                } else {
                    boxesValue = boxesValue - priceValue;
                }
                $abonament.find('span:first').text(parseInt(buttonValue + boxesValue).toFixed(2));
            })
        })
    }

    $abonament.on('click', ()=>window.location = '../steps/steps.html')

})