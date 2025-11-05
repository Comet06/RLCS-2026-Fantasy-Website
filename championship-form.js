// Seeding Average of 2nd major starting seed and ending seed then region rank
let PlayinTeams = [
    {team: 'Gen.G Mobil1 Racing', wins: 0, losses: 0, playinSeed: 1}, //Qualified seed 1
    {team: 'Virtus.pro', wins: 0, losses: 0, playinSeed: 2}, //Qualified seed 2
    {team: 'TSM', wins: 0, losses: 0, playinSeed: 3}, //Qualified seed 3
    {team: 'FUT Esports', wins: 0, losses: 0, playinSeed: 5}, //Qualified seed 4
    {team: 'ROC Esports', wins: 0, losses: 0, playinSeed: 4}, //LCQ Seed 1
    {team: 'Ninjas in Pyjamas', wins: 0, losses: 0, playinSeed: 6}, //LCQ Seed 2
    {team: 'Shopify Rebellion', wins: 0, losses: 0, playinSeed: 7}, //LCQ Seed 3
    {team: 'MIBR', wins: 0, losses: 0, playinSeed: 8}, //LCQ Seed 4
]
let GroupTeamsinitial = ['Team1', 'Team2', 'Team3', 'Team4', 'Team5', 'Team6', 'Team7', 'Team8', 
                    'Team9', 'Team10', 'Team11', 'Team12', 'Playin Seed 1', 'Playin Seed 2', 'Playin Seed 3', 'Playin Seed 4']

const path = `/RLCS-2026-Fantasy-Website`
const path1 = ``// used for Mac dev
window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/championship_form.html`) {
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
    deployGroupStage(groupA, 'A')
    deployGroupStage(groupB, 'B')
    deployGroupStage(groupC, 'C')
    deployGroupStage(groupD, 'D')
  }
})

function handleTeamSelection(winnerId, loserId, matchupId, clickedElement) {
    const matchupElement = clickedElement.closest('.matchup');
    const bracketType = matchupElement.closest(`#Playin-upper, #Playin-lower`).id;
    const teamsInMatch = matchupElement.querySelectorAll('.bracket_team');
    teamsInMatch.forEach(team => {
        team.classList.remove('win');
        team.classList.remove('lose');
    });
    clickedElement.classList.add('win');
    const nextMatches = findNextMatches(matchupId);
    if (nextMatches.winner) {
      advanceTeamToNextRound(winnerId, nextMatches.winner, bracketType);
    }
    if (bracketType === `Playin-upper` && nextMatches.loser && loserId) {
      const loserElement = Array.from(teamsInMatch).find(team => team.dataset.teamId === loserId);
      if (loserElement) {loserElement.classList.add('lose');}
      advanceTeamToNextRound(loserId, nextMatches.loser, `Playin-lower`);
    } else if (bracketType === `Playin-lower` && loserId) {
      const loserElement = Array.from(teamsInMatch).find(team => team.dataset.teamId === loserId);
      if (loserElement) {loserElement.classList.add('lose');}
      advanceTeamToNextRound(loserId, nextMatches.loser, `Playin-lower`);
    }
}

function findNextMatches(currentMatchupId) {
    // Implement your bracket logic here
    const nextMatches = {
        '1PUQ': { winner: '1PUS', loser: '1PLQ' },
        '2PUQ': { winner: '1PUS', loser: '1PLQ' },
        '3PUQ': { winner: '2PUS', loser: '2PLQ' },
        '4PUQ': { winner: '2PUS', loser: '2PLQ' },
        '1PUS': { winner: '1PUF', loser: '1PLS' },
        '2PUS': { winner: '2PUF', loser: '2PLS' },
        '1PLQ': { winner: '1PLS'},
        '2PLQ': { winner: '2PLS'},
        '1PLS': { winner: '1PLF'},
        '2PLS': { winner: '2PLF'},
        
        '1UQ': { winner: '1US', loser: '1LQ' },
        '2UQ': { winner: '1US', loser: '2LQ' },
        '1LR': { winner: '1LQ'},
        '2LR': { winner: '2LQ'},
        '1LQ': { winner: '1LS'},
        '2LQ': { winner: '2LS'},
        '1LS': { winner: '1GF'},
        '2LS': { winner: '1GF'},
        '1GF': { winner: 'W'},
    };
    return nextMatches[currentMatchupId] || {};
}

function advanceTeamToNextRound(teamId, nextMatchupId, bracketType) {
    const nextMatchupElement = document.querySelector(`#${bracketType} .matchup[data-match-id="${nextMatchupId}"]`);
    if (!nextMatchupElement) return;

    const emptySpots = nextMatchupElement.querySelectorAll('.bracket_team[data-team-id=""]');

    if (emptySpots.length > 0) {
        const firstEmptySpot = emptySpots[0];
        firstEmptySpot.textContent = teamId;
        firstEmptySpot.dataset.teamId = teamId;
    }
}

let groupA = [
  {team: 'NRG', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Karmine Corp', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Team Falcons', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'Wildcard', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let groupB = [
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let groupC = [
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]
let groupD = [
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
  {team: 'TBD', seriesWins: 0, seriesLosses: 0, gameWins: 0, gameLosses: 0},
]

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
    series.textContent = `${id.seriesWins}-${id.seriesLosses}`
    series.style = 'text-align: center;'
    games.textContent = `${id.gameWins}-${id.gameLosses}`
    games.style = 'text-align: center;'
    diff.textContent = `${id.gameWins-id.gameLosses}`
    diff.style = 'text-align: center;'
    gameWin.textContent = "Game+"
    gameLose.textContent = "Game-"
    seriesWin.textContent = "Series+"
    seriesLose.textContent = "Series-"
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