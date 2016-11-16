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
var options = ["Thor", "Batman", "Superman", "Green Arrow", "Wolverine"];
var characterImages = ["<img src='assets/images/thor.gif'>", "<img src='assets/images/batman.gif'>", "<img src='assets/images/superman.gif'>", "<img src='assets/images/greenarrow.gif'>", "<img src='assets/images/wolverine.gif'>"];
var healthPower = [300, 200, 500, 50, 350];
var attackPower = [25, 15, 100, 15, 12];
// var allToons = { name: options, images: characterImages, health: healthPower, attack: attackPower };
var allToons = [];
var playerHealth;
createAllToons();

function createAllToons() {
    for (i = 0; i < options.length; i++) {
        allToons.push({ name: options[i], images: characterImages[i], health: healthPower[i], attack: attackPower[i] });
    }
}


$(document).ready(function() {

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




    //start of click logic
    $(document).on("click", "button", function() {
        if ($(this).hasClass("heros")) {
            console.log("Current Selection " + $(this).text());
            console.log(this.healthPower);
            $(this).toggleClass("heros");
            $(this).toggleClass("playerOption");
            $(this).prependTo("#playerOptions");
            $(".heros").not(this).appendTo("#defenderOptions");
            $(".heros").not(this).addClass("defenderOptions");
            $(".heros").removeClass("heros");
        };

        if ($(this).hasClass("defenderOptions")) {
            console.log("Clicking " + $(this).text());
            $(this).prependTo("#defenderChoice");
            $(".defenderOptions").removeClass("defenderOptions");
            $(this).addClass("defenderChoice");
        };

        $("#attack").on("click", function() {
            console.log("attacking bro jeez");
            // allToons.name.$("#defenderChoice").attr("heroName")
            var defenderName = $(".defenderChoice").attr("heroname");
            var attacker = $(".playerOption").attr("heroname");
            console.log(allToons[options.indexOf(defenderName)]);
            playerHealth = (allToons[options.indexOf(attacker)].health) - (allToons[options.indexOf(defenderName)].attack);
            console.log("Current health = " + playerHealth);
        });



    }); //end of Document click function
});
