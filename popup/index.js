$(document).ready(function() {
	var max_fields      = 4;
	var wrapper   		= $(".inner-wrapper");
	var add_button      = $(".add"); 
	
	var x = 1; //initlal text box count
	$(add_button).click(function(e){
		e.preventDefault();
		if(x < max_fields){ 
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
    $(wrapper).on("click",".remove_field", function(e){
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})
});