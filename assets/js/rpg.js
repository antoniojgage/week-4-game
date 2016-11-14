// Create Options
// Select playerOption
// Move remaining characters to defenderOptions
// Select defender 

// Establish Condition for playerOption vs defender
// writestats()

// If playerOption.health < 0 {
//  kill player
//  Tell user why they lost, offer restart button.
// } else if (defender.health <0) {
//  kill defender
//  inform player they have won, inform player to select new defender
// }

// window.onload = function() {
$(document).ready(function() {
    var options = ["Thor", "Batman", "Superman", "Green Arrow", "Wolverine"];
    var characterImages = ["<img src='assets/images/thor.gif'>", "<img src='assets/images/batman.gif'>", "<img src='assets/images/superman.gif'>", "<img src='assets/images/greenarrow.gif'>", "<img src='assets/images/wolverine.gif'>"];
    var healthPower = [300, 200, 500, 50, 350];
    var attackPower = [25, 15, 100, 15, 12];


    createOptions();

function createOptions() {
    for (i = 0; i < options.length; i++) {
        var optionsBtn = $("<button>");
        optionsBtn.html("<h1>" + options[i] + "</h1>")
        optionsBtn.addClass("heros");
        optionsBtn.attr("heroName", options[i]);
        optionsBtn.append(characterImages[i]);
        optionsBtn.append("<h3> Health = " + healthPower[i] + "</h3>");
        optionsBtn.append("<h3> Attack Power = " + attackPower[i] + "</h3>");
        $("#options").append(optionsBtn);
    }
}
    // }

    $(".heros").click(function() {
        // $(".defenders").click(function() {
        if ($(this).hasClass("defenders") && defenderChoice !== true) {
            console.log("do nothing");
            //     // $(".defenders").prependTo("#defenderOptions");
            // $(".defenders").click(function() {
            $(this).toggleClass("defenders");
            $(this).addClass("defenderChoice");
            $(this).prependTo("#defenderChoice");
            var defenderChoice = true;
            // });
        } else if ($(this).hasClass("playerOption")) {
            console.log("Player Option already selected");
        } else {
            $(this).toggleClass("heros");
            $(this).addClass("playerOption");
            $(this).prependTo("#playerOptions");
            $(".heros").addClass("defenders");
            $(".defenders").toggleClass("heros");
            $(".defenders").prependTo("#defenderOptions");
            // $("button").addClass("defenders");
        }

    });
    // });
    $(".defenders").click(function() {
        // $(this).addClass("defender");
        $(this).toggleClass("defenders");
        $(this).prependTo("#defenderChoice");
    });





});



