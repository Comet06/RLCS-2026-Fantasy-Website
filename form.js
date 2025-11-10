// Seeding Average of 2nd major starting seed and ending seed then region rank
const EventForm = 'Major'
let PlayinTeams = [
    {team: 'Qualified Seed #1', wins: 0, losses: 0, playinSeed: 1}, //Qualified seed 1
    {team: 'Qualified Seed #2', wins: 0, losses: 0, playinSeed: 2}, //Qualified seed 2
    {team: 'Qualified Seed #3', wins: 0, losses: 0, playinSeed: 3}, //Qualified seed 3
    {team: 'Qualified Seed #4', wins: 0, losses: 0, playinSeed: 5}, //Qualified seed 4
    {team: 'LCQ Seed #1', wins: 0, losses: 0, playinSeed: 4}, //LCQ Seed 1
    {team: 'LCQ Seed #2', wins: 0, losses: 0, playinSeed: 6}, //LCQ Seed 2
    {team: 'LCQ Seed #3', wins: 0, losses: 0, playinSeed: 7}, //LCQ Seed 3
    {team: 'LCQ Seed #4', wins: 0, losses: 0, playinSeed: 8}, //LCQ Seed 4
]
let groupA = [
  {team: 'Seed #1', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #8', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #9', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #16', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  // {team: 'Playin Seed #4', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let groupB = [
  {team: 'Seed #2', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #7', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #10', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #15', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  // {team: 'Playin Seed #3', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let groupC = [
  {team: 'Seed #3', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #6', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #11', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #14', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  // {team: 'Playin Seed #2', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let groupD = [
  {team: 'Seed #4', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #5', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #12', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Seed #13', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  // {team: 'Playin Seed #1', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let playoffTeams = ['', '', '', '', '', '', '', '', '', '', '', '']

const path = `/RLCS-2026-Fantasy-Website`
const path1 = ``// used for Mac dev
const bracketContainer = document.getElementById('bracket-container');
if(EventForm === 'Championship'){
  // Initial Deployment
  for(let i = 0; i < PlayinTeams.length-1; i++){
    document.getElementById(`P${i+1}`).innerHTML = `<div class="bracket_team" data-team-id="${PlayinTeams[i].team}" style="font-style:italic;">${PlayinTeams[i].team}</div>`
  }
  for(let i = 0; i < groupA.length-1; i++){
    document.getElementById(`PO${i+1}`).innerHTML = `<div class="bracket_team" data-team-id="" style="font-style:italic;">GroupA Seed #${i+1}</div>`
    document.getElementById(`PO${i+4}`).innerHTML = `<div class="bracket_team" data-team-id="" style="font-style:italic;">GroupB Seed #${i+1}</div>`
    document.getElementById(`PO${i+7}`).innerHTML = `<div class="bracket_team" data-team-id="" style="font-style:italic;">GroupC Seed #${i+1}</div>`
    document.getElementById(`PO${i+10}`).innerHTML = `<div class="bracket_team" data-team-id="" style="font-style:italic;">GroupD Seed #${i+1}</div>`
  }
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
    handleTeamSelectionChamp(winnerId, loserId, matchupId, clickedTeam);
  });
  const PlayinsSubmission = document.getElementById('submitPlayins')
  PlayinsSubmission.addEventListener('click', deployGroupsChamp)
} else {
  // Initial Deployment
  for(let i = 0; i < groupA.length-2; i++){
    document.getElementById(`PO${i+1}`).innerHTML = `<div class="bracket_team" data-team-id="" style="font-style:italic;">GroupA Seed #${i+1}</div>`
    document.getElementById(`PO${i+3}`).innerHTML = `<div class="bracket_team" data-team-id="" style="font-style:italic;">GroupB Seed #${i+1}</div>`
    document.getElementById(`PO${i+5}`).innerHTML = `<div class="bracket_team" data-team-id="" style="font-style:italic;">GroupC Seed #${i+1}</div>`
    document.getElementById(`PO${i+7}`).innerHTML = `<div class="bracket_team" data-team-id="" style="font-style:italic;">GroupD Seed #${i+1}</div>`
  }
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
}
deployGroups()
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
function handleTeamSelectionChamp(winnerId, loserId, matchupId, clickedElement) {
  const matchupElement = clickedElement.closest('.matchup');
  const bracketType = matchupElement.closest(`#Playin-upper, #Playin-lower, #Playoff-upper, #Playoff-lower`).id;
  const teamsInMatch = matchupElement.querySelectorAll('.bracket_team');
  const nextMatches = findNextMatchesChamp(matchupId);
  PlayinTeams.forEach((id) =>{
    if(id.team === winnerId){
      id.wins++
    }
    if(id.team === loserId){
      id.losses++
    }
  })
  teamsInMatch.forEach(team => {//Clearing classes for the teams advancing
      team.classList.remove('win');
      team.classList.remove('lose');
  });
  clickedElement.classList.add('win');//Adding class win back to the winner
  if (nextMatches.winner) {
    if(bracketType === 'Playoff-upper'){
      advanceTeamToNextRound(winnerId, nextMatches.winner, 'Playoff-lower');
    } else {
      advanceTeamToNextRound(winnerId, nextMatches.winner, bracketType);
    }
  }
  if (bracketType === `Playin-upper` && nextMatches.loser && loserId) {//checks if there is a location for the loser to go to, and if a loser exists
    const loserElement = Array.from(teamsInMatch).find(team => team.dataset.teamId === loserId);
    if (loserElement) {loserElement.classList.add('lose');}//Adding class lose back to the loser
    advanceTeamToNextRound(loserId, nextMatches.loser, `Playin-lower`);
  } else if (bracketType === `Playin-lower` && loserId) {
    const loserElement = Array.from(teamsInMatch).find(team => team.dataset.teamId === loserId);
    if (loserElement) {loserElement.classList.add('lose');}//Adding class lose back to the loser
    advanceTeamToNextRound(loserId, nextMatches.loser, `Playin-lower`);
  } else if (bracketType === `Playoff-upper` && nextMatches.loser && loserId) {//checks if there is a location for the loser to go to, and if a loser exists
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
function findNextMatchesChamp(currentMatchupId) {
    // Implement your bracket logic here
    const nextMatches = {
        '1PUQ': { winner: '1PUS', loser: '1PLQ' },
        '2PUQ': { winner: '1PUS', loser: '1PLQ' },
        '3PUQ': { winner: '2PUS', loser: '2PLQ' },
        '4PUQ': { winner: '2PUS', loser: '2PLQ' },
        '1PUS': { winner: '1PUF', loser: '2PLS' },
        '2PUS': { winner: '2PUF', loser: '1PLS' },
        '1PLQ': { winner: '1PLS'},
        '2PLQ': { winner: '2PLS'},
        '1PLS': { winner: '1PLF'},
        '2PLS': { winner: '2PLF'},
        
        '1UQ': { winner: '2LS', loser: '1LQ' },
        '2UQ': { winner: '1LS', loser: '2LQ' },

        '1LR1': { winner: '1LR2'},
        '2LR1': { winner: '1LR2'},
        '3LR1': { winner: '2LR2'},
        '4LR1': { winner: '2LR2'},

        '1LR2': { winner: '1LQ'},
        '2LR2': { winner: '2LQ'},

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
function deployGroupsChamp(){
  PlayinTeams.sort((a,b)=> a.playinSeed - b.playinSeed)
  PlayinTeams.sort((a,b)=> a.losses - b.losses)
  PlayinTeams.sort((a,b)=> b.wins - a.wins)
  groupA[3].team = PlayinTeams[3].team
  groupB[3].team = PlayinTeams[2].team
  groupC[3].team = PlayinTeams[1].team
  groupD[3].team = PlayinTeams[0].team
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
    team.style = 'text-align: center; font-style:italic;'
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
  for(let i = 0; i < groupA.length-1; i++){
    playoffTeams[i] = groupA[i].team
    playoffTeams[i+3] = groupB[i].team
    playoffTeams[i+6] = groupC[i].team
    playoffTeams[i+9] = groupD[i].team
  }
  for(let i = 0; i < playoffTeams.length-1; i++){
    document.getElementById(`PO${i+1}`).innerHTML = `<div class="bracket_team" data-team-id="${playoffTeams[i]}">${playoffTeams[i]}</div>`
  }
}
function sortGroups(group){
  group.sort((a,b) => a.gameLosses - b.gameLosses)
  group.sort((a,b) => b.gameWins - a.gameWins)
  group.sort((a,b) => a.seriesLosses - b.seriesLosses)
  group.sort((a,b) => b.seriesWins - a.seriesWins)
}