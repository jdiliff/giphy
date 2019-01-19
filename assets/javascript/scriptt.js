    
    
    //ARRAY OF ANIMALS 
    var animals= ['goat', 'deer', 'elephant', 'wolf', 'gopher', 'lion', 'tiger'];


    //FUNCTION FOR DUMPING JSON INTO DIV 
    function displayAnimal() {


  //  var animal = $(this).attr('data-animal');
    // var query URL = "http://api.giphy.com/v1/gifs/search?" + animal + "&api_key=petQmuPJUa2XEbIwkCVu4zA7ByWoNcrz&limit=5"; 
    // console.log('hey'); 
    var queryUrl = "http://api.giphy.com/v1/gifs/search?q=funnyd+cat&api_key=petQmuPJUa2XEbIwkCVu4zA7ByWoNcrz&limit=5";
    queryUrl.done(function(data) { console.log("success got data", data); });
    $.ajax( {
    url: queryUrl, 
        method: "GET"
    })
    .done(function(response) {
        console.log(response); 
        //$("giphy-view"ß).text(JSON.stringify(response));
    });

    function gotData(data) {
        console.log(data.data[0].images.original.url); 
    }
    }


    //FUNCTION TO DISPLAY GIPHYS
    function renderButtons() {
       // $('#view-buttons').empty();
    
    $('#view-buttons').empty(); 
    //LOOP THROUGH THE ANIMALS IN THE ARRAY 
    for (var i = 0; i < animals.length; i++) {
        //console.log(animals[i]);

    //CREATE BUTTONS FOR EACH ANIMAL IN THE ARRAY 
    var makeButtons = $("<button>"); 
    makeButtons.addClass("animal"); 
    makeButtons.attr('data-animal', animals[i]); 
    makeButtons.text(animals[i]); 
    console.log(makeButtons);
    $('#view-buttons').append(makeButtons); 
    

    }
    }


    //CREATE ON.CLICK FX FOR WHEN A BUTTON IS CLICKED
    $('#animal-text').on('click', function(event) {

        console.log("clicked")
        event.preventDefault(); 


    //NOW WE GRAB THE INPUT THE USER ENTERED INTO THE TEXTBOX
    var animal = $('#animal-input').val().trim(); 
    
    console.log(animal); 

    //NOW THIS WILL ADD THE ANIMAL ENTERED BY THE USER INTO THE ARRAY, CREATING ANOTHER BUTTON
    animals.push(animal); 
    console.log(animals); 
    renderButtons(); 
    
    });

    $(document).on('click', '.animal', displayAnimal); 
 
    renderButtons(); 
   

    

    // var giphyImg = $('<img src="https://media3.giphy.com/media/aGyZ004XM4MjC/giphy.gif">'); 
    // $('#giphy-view').append(giphyImg)


