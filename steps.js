
let currentStep = 0;


$(".btn").click(function() { 
    var listItems = $(".step"); 
    listItems[currentStep].classList.add("step-success"); 
    listItems[currentStep+1].classList.add('step-active')
    currentStep ++; 

    
    //listItems[currentStep - 1].classList.remove('step-success');
 
}); 