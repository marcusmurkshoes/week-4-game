// Global Variables...
//----------------------------------------------------------------------------

var gemClicks = [];

var numberToGuess = Math.floor((Math.random() * 120) + 19);

var counter = 0;

var gemNumbers = ["2", "1", "8", "10"];

var crystalValue = 0;

var wins = 0;

var losses = 0;

// var imageCrystal = ["#gem1", "#gem2", "#gem3", "#gem4"];
// var imageCrystal;




for(var i = 0; i < gemNumbers.length; i++) {

	var imageCrystal = $("#gem"+[i+1]);

	imageCrystal.attr("data-crystalvalue", gemNumbers[i]);


	//console.log(imageCrystal)


	
}
	




	$("#numberToGuess").text(numberToGuess);

	$("#counterScore").text(counter);

	//console.log(numberToGuess);


	

	

























// Functions...
//-------------------------------------------------------------------------------------



// $('.gem').click(function() {


//  var crystalValue = this.dataset.crystalvalue;
//  crystalValue++;
//    //crystalValue = parseInt(crystalValue);

// console.log(crystalValue);

// console.log(counter);



$(".gem").on('click', function() {
  crystalValue = Number(crystalValue) + Number(this.dataset.crystalvalue);
  // console.log(crystalValue);

  $("#counterScore").text(crystalValue);

  winReset();


});

function winReset() {
  if (crystalValue === numberToGuess) {
    crystalValue = 0;

    numberToGuess = Math.floor((Math.random() * 120) + 19);
    

      $("#numberToGuess").text(numberToGuess);
      // this is setting the html to random number, but does not exist in scope of game,
      // set the text to the variable number to guess
      // make the numberToGuess variable dynamic

      $("#counterScore").text(crystalValue);

      wins++;

     $("#winsLosses").text("Wins: " + wins);

      // counter = Number(crystalValue);

      


     




    }


    else if (crystalValue >= numberToGuess) {

      crystalValue = 0;

    counter = Number(crystalValue);
    	// crystalValue = 0;

    	numberToGuess = Math.floor((Math.random() * 120) + 19);
    

      $("#numberToGuess").text(numberToGuess);
      $("#counterScore").val(crystalValue);
    	losses++;
    	$("#loser").text("Losses: " + losses);

      

    
    }
    console.log(crystalValue);
}



function loops(bananas) {
  for (var i=0; i<bananas.length; i++) {
    // console.log(bananas[i]);
  }
}


loops([1,2,3,4,5]);



function numberRandomizer(smh) {

 Math.floor((Math.random() * 120) + 19);

}


//------------------------





	//counter += gemNumbers;

		//console.log(this.dataset.crystalvalue);
	
		//alert("New score: " + counter);

		//console.log(gemNumbers);

	// });




























// Main Process...
//------------------------------------------------------------------------------------------------