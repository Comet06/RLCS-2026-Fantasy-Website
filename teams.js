import { Legacyplayers, Legacyteams, players, teams } from "./player_data.js";

window.addEventListener('load', function() {
  if (window.location.pathname === '/RLCS-2026-Fantasy-Website/players_stats.html') {
    console.log('The specific page has loaded!');
    deployNew()
    
    const checkbox = document.getElementById('legacy');
    checkbox.addEventListener('change', function() {
    if (this.checked) {
      deployLegacy()
      console.log("test")
    } else {
      deployNew()
      console.log("test")
    }
    }); 
  }
  console.log("teams event listener is working")
});
function deployLegacy() {
  for (const playerName in Legacyteams) {
    if (Legacyteams.hasOwnProperty(playerName)) {
      const statsArray = Legacyteams[playerName];
      const playerElements = document.querySelectorAll(`.team-data[data-team="${playerName}"] .stat-value`);

      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
  for (const playerName in Legacyplayers) {
    if (Legacyplayers.hasOwnProperty(playerName)) {
      const statsArray = Legacyplayers[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);

      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
}
function deployNew() {
  for (const playerName in teams) {
    if (teams.hasOwnProperty(playerName)) {
      const statsArray = teams[playerName];
      const playerElements = document.querySelectorAll(`.team-data[data-team="${playerName}"] .stat-value`);

      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }
  for (const playerName in players) {
    if (players.hasOwnProperty(playerName)) {
      const statsArray = players[playerName];
      const playerElements = document.querySelectorAll(`.player-data[data-player="${playerName}"] .stat-value`);

      playerElements.forEach((element, index) => {
        if (index < statsArray.length) {
          element.textContent = statsArray[index];
        }
      });
    }
  }

}


