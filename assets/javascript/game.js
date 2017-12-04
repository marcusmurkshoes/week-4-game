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

$(document).ready(function() {


$(".gem").on('click', function() {
  crystalValue = Number(crystalValue) + Number(this.dataset.crystalvalue);
  // console.log(crystalValue);

  $("#counterScore").text(crystalValue);

  winReset();

});
});

function winReset() {
  if (crystalValue === numberToGuess) {
    crystalValue = 0;

    

      $("#numberToGuess").text(Math.floor(Math.random() * 120) + 19);

      $("#counterScore").text(crystalValue);

      wins++;

     $("#winsLosses").text("Wins: " + wins);

      // counter = Number(crystalValue);

      console.log(crystalValue);


     




    }

    else if (crystalValue >= numberToGuess) {

      crystalValue = 0;

    counter = Number(crystalValue);
    	// crystalValue = 0;
    	$("#numberToGuess").text(Math.floor(Math.random() * 120) + 19);
      $("#counterScore").val(crystalValue);
    	losses++;
    	$("#loser").text("Losses: " + losses);

      

    
    }
}






//------------------------





	//counter += gemNumbers;

		//console.log(this.dataset.crystalvalue);
	
		//alert("New score: " + counter);

		//console.log(gemNumbers);

	// });




























// Main Process...
//------------------------------------------------------------------------------------------------