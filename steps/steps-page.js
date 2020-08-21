$(".navbar-link").click(function() { 
    var listItems = $(".navbar-link"); 
    for (let i = 0; i < listItems.length; i++) { 
        listItems[i].classList.remove("active"); 
    } 
    this.classList.add("active"); 
}); 