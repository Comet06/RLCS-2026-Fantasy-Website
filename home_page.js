import { Regional1, Regional2, Regional3, Regional4, Regional5, Regional6, 
  Major1, Major2, EventSums, splitSums, champRounds, champ, Championship, playerScores } from "./events_data.js"
let playerIDs = ['flip', 'doof', 'goof', 'gold', 'skib', 'cana', 'pots', 'yuri', 'maht'] //Potentials: , 'juno', 'chez', 'kids', 
import { ChampionshipBracket } from "./brackets.js";

window.addEventListener('load', function() {
  if (window.location.pathname === '/index.html') {
    console.log('The specific page has loaded!');
    deployScores()
  } else if (window.location.pathname === '/regional_1.html') {
    console.log('The specific page has loaded!');
    deployReg1()
  } else if (window.location.pathname === '/regional_2.html') {
    console.log('The specific page has loaded!');
    deployReg2()
  } else if (window.location.pathname === '/regional_3.html') {
    console.log('The specific page has loaded!');
    deployReg3()
  } else if (window.location.pathname === '/major_1.html') {
    console.log('The specific page has loaded!');
    deployMaj1()
  } else if (window.location.pathname === '/regional_4.html') {
    console.log('The specific page has loaded!');
    deployReg4()
  } else if (window.location.pathname === '/regional_5.html') {
    console.log('The specific page has loaded!');
    deployReg5()
  } else if (window.location.pathname === '/regional_6.html') {
    console.log('The specific page has loaded!');
    deployReg6()
  } else if (window.location.pathname === '/major_2.html') {
    console.log('The specific page has loaded!');
    deployMaj2()
  } else if (window.location.pathname === '/championship.html') {
    console.log('The specific page has loaded!');
    deployChamp()
  } else {
    console.log("main event listener is working but nothing else is")
  }
});


function deployScores() {
  console.log('homepage script is working')

  playerIDs.forEach((id)=>{
  //adding regional points from each player into event sums
    for (let i = 3; i < 12; i += 4) {
      EventSums[id][0] += Regional1[id][i];
      EventSums[id][1] += Regional2[id][i];
      EventSums[id][2] += Regional3[id][i];
      EventSums[id][3] += Regional4[id][i];
      EventSums[id][4] += Regional5[id][i];
      EventSums[id][5] += Regional6[id][i];
    }
  });

  // adding each split event up into one sum for prize distribution
  playerIDs.forEach((id)=>{
    splitSums[id][0] = EventSums[id][0] + EventSums[id][1] + EventSums[id][2] + Major1[id][0]*3
    splitSums[id][1] = EventSums[id][3] + EventSums[id][4] + EventSums[id][5] + Major2[id][0]*3
  });

  // Adding all championship points into splitSums[2]
  for (let i = 0; i < 8; i++) {
    playerIDs.forEach((id)=>{
      splitSums[id][2] += Championship[id][i]*champ[i]
    });
  }

  // Updating Home Page Scores
  playerIDs.forEach((id)=>{
    playerScores[id] = [EventSums[id][0], EventSums[id][1], EventSums[id][2], Major1[id][0]*3, splitSums[id][0], 
                        EventSums[id][3], EventSums[id][4], EventSums[id][5], Major2[id][0]*3, splitSums[id][1], 
                        splitSums[id][2]*5, splitSums[id][0] + splitSums[id][1] + splitSums[id][2]*5];
  });
  for (const playerName in playerScores) {
    if (playerScores.hasOwnProperty(playerName)) {
      const statsArray = playerScores[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);

      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}

function deployReg1(){
  console.log('reg1 function working')
  for (const playerName in Regional1) {
    if (Regional1.hasOwnProperty(playerName)) {
      const statsArray = Regional1[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployReg2(){
  console.log('reg2 function working')
  for (const playerName in Regional2) {
    if (Regional2.hasOwnProperty(playerName)) {
      const statsArray = Regional2[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployReg3(){
  console.log('reg3 function working')
  for (const playerName in Regional3) {
    if (Regional3.hasOwnProperty(playerName)) {
      const statsArray = Regional3[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployMaj1(){
  console.log('major 1 function working')
  for (const playerName in Major1) {
    if (Major1.hasOwnProperty(playerName)) {
      const statsArray = Major1[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}

function deployReg4(){
  console.log('reg4 function working')
  for (const playerName in Regional4) {
    if (Regional4.hasOwnProperty(playerName)) {
      const statsArray = Regional4[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployReg5(){
  console.log('reg5 function working')
  for (const playerName in Regional5) {
    if (Regional5.hasOwnProperty(playerName)) {
      const statsArray = Regional5[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployReg6(){
  console.log('reg6 function working')
  for (const playerName in Regional6) {
    if (Regional6.hasOwnProperty(playerName)) {
      const statsArray = Regional6[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployMaj2(){
  console.log('major 2 function working')
  for (const playerName in Major2) {
    if (Major2.hasOwnProperty(playerName)) {
      const statsArray = Major2[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}

function deployChamp(){
  console.log('champ function working')
  ChampionshipBracket()
  playerIDs.forEach((id)=>{
    champRounds[id][0] = Championship[`${id}`][0]*champ[0]+Championship[`${id}`][1]*champ[1]
    champRounds[id][1] = Championship[`${id}`][2]*champ[2]+Championship[`${id}`][3]*champ[3]
    champRounds[id][2] = Championship[`${id}`][4]*champ[4]+Championship[`${id}`][5]*champ[5]
    champRounds[id][3] = Championship[`${id}`][6]*champ[6]+Championship[`${id}`][7]*champ[7]
    champRounds[id][4] = champRounds[id][0] + champRounds[id][1] + champRounds[id][2] + champRounds[id][3]
  });

  for (const playerName in champRounds) {
    if (champRounds.hasOwnProperty(playerName)) {
      const statsArray = champRounds[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);
      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }

}


