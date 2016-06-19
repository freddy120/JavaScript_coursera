var target_index;
var colors = ["blue", "magenta", "gray", "gold", "green", "cyan", "orange", "red", "white", "yellow"];
var guess_input = "";
var target = "";
var finished = false;
var guesses = 0;
var myBody;

function do_game() {
    var random_number = Math.random()*colors.length;
    var random_number_integer = Math.floor(random_number);
    target_index = random_number_integer;
    target = colors[target_index];

    while (!finished) {
        guess_input = prompt("I am thinking of one of these colors: \n\n"+
                              colors.sort() + "\n\n"+
                             "What color am I thinking of?");
        
        guesses += 1;
        finished = check_guess();

    }
    
}


function check_guess() {

    if (colors.indexOf(guess_input) == -1) {
        alert("Sorry, I don't recognize your color. \n\n" + 
              "Please try again.");
        return false;
    }

    if (guess_input > target) {
        alert("Sorry, your guess is not correct! \n\n" + 
              "Hint: your color is alphabetically higher than mine. \n\n" + 
              "Please try again.");
        return false; 
    }

    if (guess_input < target) {
        alert("Sorry, your guess is not correct! \n\n" + 
              "Hint: your color is alphabetically lower than mine. \n\n" + 
              "Please try again.");
        return false;
    }

    myBody = document.getElementsByTagName("body")[0];
    myBody.style.background = target;

    alert("Congratulations! You have guessed the color! \n\n "+ 
          "It took you " + guesses + 
          " guesses to finish the game!\n\n" + 
          "You can see the colour in the background. ");

    
    return true;

}