// get Home and Guest score objects.
let homeScore = document.getElementById("Home-Score");
let guestScore = document.getElementById("Guest-Score");

homeTeam = 0;
guestTeam = 0;

// points adder for the home team.

function homeAdd1Point(){
homeTeam += 1;
homeScore.textContent = homeTeam;
}

function homeAdd2Points(){
    homeTeam += 2;
homeScore.textContent = homeTeam;
}

function homeAdd6Points(){
    homeTeam += 6;
homeScore.textContent = homeTeam;
}



// Points adder for the Guest team.

function guestAdd1Point(){
guestTeam += 1;
guestScore.textContent = guestTeam;
}

function guestAdd2Points(){
   guestTeam += 2;
guestScore.textContent = guestTeam;
}

function guestAdd6Points(){
    guestTeam += 6;
guestScore.textContent = guestTeam;
}

//New game button reset all scores to zero.

function newGame(){
    homeTeam = 0;
    guestTeam = 0;
    homeScore.textContent = homeTeam;
    guestScore.textContent = guestTeam;
}