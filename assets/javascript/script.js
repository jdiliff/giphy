    
    
    //ARRAY OF ANIMALS 
    var animals= ['goat', 'deer', 'elephant', 'wolf', 'gopher', 'lion', 'tiger'];


    //FUNCTION FOR DUMPING JSON INTO DIV 
    function displayAnimal() {


    var animal = $(this).attr('data');
    // var query URL = "http://api.giphy.com/v1/gifs/search?" + animal + "&api_key=petQmuPJUa2XEbIwkCVu4zA7ByWoNcrz&limit=5"; 
    // console.log('hey'); 
    var queryUrl = $.get("http://api.giphy.com/v1/gifs/search?" + animal + "&api_key=petQmuPJUa2XEbIwkCVu4zA7ByWoNcrz&limit=5");
    queryUrl.done(function(data) { console.log("success", data); });
    $.ajax( {
    url: queryUrl, 
        method: "GET"
    })
    .then(function(response) {
        $("giphy-view").text(JSON.stringify(response));
    });

    }


    //FUNCTION TO DISPLAY GIPHYS
    function renderButtons() {
        $('#view-buttons').empty();


    //LOOP THROUGH THE ANIMALS IN THE ARRAY 
    for (var i = 0; i > animals.length; i++) {
        

    //CREATE BUTTONS FOR EACH ANIMAL IN THE ARRAY 
    var makeButtons = $("<button>"); 
    makeButtons.addClass("animal"); 
    makeButtons.attr('data', animals[i]); 
    makeButtons.text(animals[i]); 
    $('#view-buttons').append(makeButtons); 
    }
    }


    //CREATE ON.CLICK FX FOR WHEN A BUTTON IS CLICKED
    $('#animal-submit').on('click', function(event) {
        event.preventDefault(); 


    //NOW WE GRAB THE INPUT THE USER ENTERED INTO THE TEXTBOX
    var animal = $('#add-animal').val().trim(); 


    //NOW THIS WILL ADD THE ANIMAL ENTERED BY THE USER INTO THE ARRAY, CREATING ANOTHER BUTTON
    animals.push(animal); 
    console.log(animals); 

    renderButtons(); 

    });

    $(document).on('click', '.animal', displayAnimal); 

    renderButtons(); 

