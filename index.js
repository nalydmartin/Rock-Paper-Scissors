const gameplay = ["rock", "paper", "scissor"];

let playerWins = 0;
let botWins = 0;


function randomHand() {
    let randNum = Math.floor((Math.random() * 3));
    let chosenHand = gameplay[randNum];
    return chosenHand;
}

$(".hand").click(function() {
    let clickedHand = $(this).attr("id");

    let randHand = randomHand();

    if(clickedHand === "rock" && randHand === "rock") {
        $("#start").html("It's a tie!");
        $("#player").html(`You chose: ${clickedHand}.`);
        $("#bot").html(`Bot chose: ${randHand}.`);
        $("#" + clickedHand).addClass("tie").delay(200).queue(function(next) {
            $(this).removeClass("tie");
            next();
        });
    } else if (clickedHand === "rock" && randHand === "paper") {
        $("#start").html("Paper wins!");
        $("#player").html(`You chose: ${clickedHand}.`);
        $("#bot").html(`Bot chose: ${randHand}.`);
        botWins++;
        $("#wins").html(`Your wins: ${playerWins}      Bot Wins: ${botWins}`)
        $("#" + clickedHand).addClass("loser").delay(200).queue(function(next) {
            $(this).removeClass("loser");
            next();
        });
    } else if (clickedHand === "rock" && randHand === "scissor") {
        $("#start").html("Rock wins!");
        $("#player").html(`You chose: ${clickedHand}.`);
        $("#bot").html(`Bot chose: ${randHand}.`);
        playerWins++;
        $("#wins").html(`Your wins: ${playerWins}      Bot Wins: ${botWins}`);
        $("#" + clickedHand).addClass("winner").delay(200).queue(function(next) {
            $(this).removeClass("winner");
            next();
        });
    }

    if(clickedHand === "paper" && randHand === "paper") {
        $("#start").html("It's a tie!");
        $("#player").html(`You chose: ${clickedHand}.`);
        $("#bot").html(`Bot chose: ${randHand}.`);
        $("#" + clickedHand).addClass("tie").delay(200).queue(function(next) {
            $(this).removeClass("tie");
            next();
        });
    } else if (clickedHand === "paper" && randHand === "scissor") {
        $("h2").html("Scissor wins!");
        $("#player").html(`You chose: ${clickedHand}.`);
        $("#bot").html(`Bot chose: ${randHand}.`);
        botWins++;
        $("#wins").html(`Your wins: ${playerWins}      Bot Wins: ${botWins}`)
        $("#" + clickedHand).addClass("loser").delay(200).queue(function(next) {
            $(this).removeClass("loser");
            next();
        });
    } else if (clickedHand === "paper" && randHand === "rock") {
        $("h2").html("Paper wins!");
        $("#player").html(`You chose: ${clickedHand}.`);
        $("#bot").html(`Bot chose: ${randHand}.`);
        playerWins++;
        $("#wins").html(`Your wins: ${playerWins}      Bot Wins: ${botWins}`)
        $("#" + clickedHand).addClass("winner").delay(200).queue(function(next) {
            $(this).removeClass("winner");
            next();
        });
    }

    if(clickedHand === "scissor" && randHand === "scissor") {
        $("#start").html("It's a tie!");
        $("#player").html(`You chose: ${clickedHand}.`);
        $("#bot").html(`Bot chose: ${randHand}.`);
        $("#" + clickedHand).addClass("tie").delay(200).queue(function(next) {
            $(this).removeClass("tie");
            next();
        });
    } else if (clickedHand === "scissor" && randHand === "rock") {
        $("#start").html("Rock wins!");
        $("#player").html(`You chose: ${clickedHand}.`);
        $("#bot").html(`Bot chose: ${randHand}.`);
        botWins++;
        $("#wins").html(`Your wins: ${playerWins}      Bot Wins: ${botWins}`)
        $("#" + clickedHand).addClass("loser").delay(200).queue(function(next) {
            $(this).removeClass("loser");
            next();
        });
    } else if (clickedHand === "scissor" && randHand === "paper") {
        $("#start").html("Scissor wins!");
        $("#player").html(`You chose: ${clickedHand}.`);
        $("#bot").html(`Bot chose: ${randHand}.`);
        playerWins++;
        $("#wins").html(`Your wins: ${playerWins}      Bot Wins: ${botWins}`)
        $("#" + clickedHand).addClass("winner").delay(200).queue(function(next) {
            $(this).removeClass("winner");
            next();
        });
    }

    console.log(clickedHand);
})


$(document).keydown(function(e) {
    console.log(e.key);
    playerWins = 0;
    botWins = 0;
    $("#wins").html(`Your wins: ${playerWins}      Bot Wins: ${botWins}`)
})