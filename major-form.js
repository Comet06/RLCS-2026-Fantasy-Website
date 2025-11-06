// Seeding Average of 2nd major starting seed and ending seed then region rank
let groupA = [
  {team: 'Seed #1', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #8', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #9', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #16', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let groupB = [
  {team: 'Seed #2', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #7', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #10', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #15', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let groupC = [
  {team: 'Seed #3', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #6', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #11', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #14', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let groupD = [
  {team: 'Seed #4', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #5', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #12', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #13', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let playoffTeams = ['', '', '', '', '', '', '', '', '', '', '', '']

const path = `/RLCS-2026-Fantasy-Website`
const path1 = ``// used for Mac dev
const bracketContainer = document.getElementById('bracket-container');
bracketContainer.addEventListener('click', (event) => {
  const clickedTeam = event.target.closest('.bracket_team');
  if (!clickedTeam || clickedTeam.dataset.teamId === '') {return;}
  const winnerId = clickedTeam.dataset.teamId;
  const matchupElement = clickedTeam.closest('.matchup');
  const matchupId = matchupElement.dataset.matchId;
  let loserId = null;
  const teamsInMatch = matchupElement.querySelectorAll('.bracket_team');
  // Find the other team only if it's a full matchup
  if (teamsInMatch.length === 2) {
    const loserElement = Array.from(teamsInMatch).find(team => team !== clickedTeam);
    loserId = loserElement ? loserElement.dataset.teamId : null;
  }
  handleTeamSelection(winnerId, loserId, matchupId, clickedTeam);
});
deployGroups()
for(let i = 0; i < 8; i++){
  document.getElementById(`PO${i+1}`).innerHTML = `<div class="bracket_team" data-team-id="">GS Seed #${i+1}</div>`
}

const bracketSubmission = document.getElementById('submitBracket')
bracketSubmission.addEventListener('click', deployPlayoffs)

function handleTeamSelection(winnerId, loserId, matchupId, clickedElement) {
  const matchupElement = clickedElement.closest('.matchup');
  const bracketType = matchupElement.closest(`#Playoff-upper, #Playoff-lower`).id;
  const teamsInMatch = matchupElement.querySelectorAll('.bracket_team');
  const nextMatches = findNextMatches(matchupId);
  teamsInMatch.forEach(team => {//Clearing classes for the teams advancing
      team.classList.remove('win');
      team.classList.remove('lose');
  });
  clickedElement.classList.add('win');//Adding class win back to the winner
  if (nextMatches.winner) {
    advanceTeamToNextRound(winnerId, nextMatches.winner, 'Playoff-lower');
  }
  if (bracketType === `Playoff-upper` && nextMatches.loser && loserId) {//checks if there is a location for the loser to go to, and if a loser exists
    const loserElement = Array.from(teamsInMatch).find(team => team.dataset.teamId === loserId);
    if (loserElement) {loserElement.classList.add('lose');}//Adding class lose back to the loser
    advanceTeamToNextRound(loserId, nextMatches.loser, `Playoff-lower`);
  } else if (bracketType === `Playoff-lower` && loserId) {
    const loserElement = Array.from(teamsInMatch).find(team => team.dataset.teamId === loserId);
    if (loserElement) {loserElement.classList.add('lose');}//Adding class lose back to the loser
    advanceTeamToNextRound(loserId, nextMatches.loser, `Playoff-lower`);
  }
}

function findNextMatches(currentMatchupId) {
    // Implement your bracket logic here
    const nextMatches = {
        
        '1UQ': { winner: '2LS', loser: '1LQ' },
        '2UQ': { winner: '1LS', loser: '2LQ' },

        '1LR1': { winner: '1LQ'},
        '2LR1': { winner: '2LQ'},

        '1LQ': { winner: '1LS'},
        '2LQ': { winner: '2LS'},

        '1LS': { winner: '1GF'},
        '2LS': { winner: '1GF'},
        '1GF': { winner: 'W'},
    };
    return nextMatches[currentMatchupId] || {};
}

function advanceTeamToNextRound(teamId, nextMatchupId, bracketType) {
    const nextMatchupElement = document.querySelector(`#${bracketType} .matchup[data-match-id="${nextMatchupId}"]`); //looks for the brackettype and finds the nextmatchup id inside that bracket type
    if (!nextMatchupElement) return;//Checks to see if the next matchup exists
    const emptySpots = nextMatchupElement.querySelectorAll('.bracket_team[data-team-id=""]');//assigns the empty slots of the next matchup to 'emptySpots'
    if (emptySpots.length > 0) { //Looks for an empty slot within that next match up
        const firstEmptySpot = emptySpots[0];
        firstEmptySpot.textContent = teamId;
        firstEmptySpot.style = 'font-style:;'
        firstEmptySpot.dataset.teamId = teamId;
    }
}

function deployGroups(){
  deployGroupStage(groupA, 'A')
  deployGroupStage(groupB, 'B')
  deployGroupStage(groupC, 'C')
  deployGroupStage(groupD, 'D')
}
function deployGroupStage(group, groupLetter){
  group.forEach((id) => {
    const tableBody = document.getElementById(`group${groupLetter}`);
    const newRow = document.createElement('tr');
    const team = document.createElement('a');
    const series = document.createElement('td');
    const games = document.createElement('td');
    const diff = document.createElement('td');
    const seriesWin = document.createElement('button')
    const seriesLose = document.createElement('button')
    const gameWin = document.createElement('button')
    const gameLose = document.createElement('button')

    team.textContent = id.team
    team.style = 'text-align: center;'
    series.textContent = `${id.seriesWins}-${id.seriesLosses}`
    series.style = 'text-align: center;'
    games.textContent = `${id.gameWins}-${id.gameLosses}`
    games.style = 'text-align: center;'
    diff.textContent = `${id.gameWins-id.gameLosses}`
    diff.style = 'text-align: center;'
    gameWin.textContent = "G+"
    gameLose.textContent = "G-"
    seriesWin.textContent = "S+"
    seriesLose.textContent = "S-"
    gameWin.onclick = function() {
      id.gameWins++;
      games.textContent = `${id.gameWins}-${id.gameLosses}`;
      diff.textContent = `${id.gameWins - id.gameLosses}`;
    }
    gameLose.onclick = function() {
      id.gameLosses++;
      games.textContent = `${id.gameWins}-${id.gameLosses}`;
      diff.textContent = `${id.gameWins - id.gameLosses}`;
    }
    seriesWin.onclick = function() {
      id.seriesWins++;
      series.textContent = `${id.seriesWins}-${id.seriesLosses}`;
    }
    seriesLose.onclick = function() {
      id.seriesLosses++;
      series.textContent = `${id.seriesWins}-${id.seriesLosses}`;
    }

    newRow.appendChild(team);
    newRow.appendChild(series);
    newRow.appendChild(games);
    newRow.appendChild(diff);
    newRow.appendChild(seriesWin);
    newRow.appendChild(seriesLose);
    newRow.appendChild(gameWin);
    newRow.appendChild(gameLose);
    
    tableBody.appendChild(newRow);
  })
}
function deployPlayoffs(){
  sortGroups(groupA)
  sortGroups(groupB)
  sortGroups(groupC)
  sortGroups(groupD)
  for(let i = 0; i < 3; i++){
    playoffTeams[i] = groupA[i].team
    playoffTeams[i+3] = groupB[i].team
    playoffTeams[i+6] = groupC[i].team
    playoffTeams[i+9] = groupD[i].team
  }
  for(let i = 0; i < 8; i++){
    document.getElementById(`PO${i+1}`).innerHTML = `<div class="bracket_team" data-team-id="${playoffTeams[i]}">${playoffTeams[i]}</div>`
  }
}
function sortGroups(group){
  group.sort((a,b) => a.gameLosses - b.gameLosses)
  group.sort((a,b) => b.gameWins - a.gameWins)
  group.sort((a,b) => a.seriesLosses - b.seriesLosses)
  group.sort((a,b) => b.seriesWins - a.seriesWins)
}