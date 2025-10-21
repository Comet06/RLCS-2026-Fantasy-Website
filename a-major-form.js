const year = '2026'
const path = `/RLCS-${year}-Fantasy-Website`
window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/major_form.html`) {
    document.getElementById('year').innerHTML = `RLCS ${year}`
    injectTeams()
    populateSwissTable()
  }
})
// Major Bracket Form
let MajorTeams = [
  {team: 'NRG', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: 'TSM', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
  {team: '', seriesWin: 0, seriesLoss: 0, gameWin: 0, gameLoss: 0},
]
let R1seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''] //16
let R2seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let R3seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let R4seeds = ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']
let R5seeds = ['', '', '', '', '', '', '', '', '', '', '', ''] //12
let R6seeds = ['', '', '', '', '', ''] //6
let playoffTeams = ['', '', '', '', '', '', '', '']
let run = true

// Swiss
function injectTeams(){
  for(let i = 0; i < 16; i++){
    R1seeds[i] = MajorTeams[i].team
    document.getElementById(`R1S${i+1}`).innerHTML = MajorTeams[i].team
  }
}
function populateSwissTable() {
  const tableBody = document.getElementById('swissStats');
  tableBody.innerHTML = '';
  MajorTeams.forEach((id) => {
    const newRow = document.createElement('tr');
    const team = document.createElement('td');
    const Swins = document.createElement('td');
    const Sloss = document.createElement('td');
    // const Gwins = document.createElement('td');
    // const Gloss = document.createElement('td');

    const teamLink = document.createElement('a');
    
    const teamId = (id.team).toLowerCase().replaceAll(" ","_").replaceAll(".","");

    teamLink.href = `/profile.html?name=${encodeURIComponent(id.team)}`;
    
    team.id = teamId;
    
    teamLink.textContent = id.team;
    Swins.textContent = id.seriesWin;
    Sloss.textContent = id.seriesLoss;
    // Gwins.textContent = id.gameWin;
    // Gloss.textContent = id.gameLoss;
    
    team.appendChild(teamLink);

    newRow.appendChild(team);
    newRow.appendChild(Swins);
    newRow.appendChild(Sloss);
    // newRow.appendChild(Gwins);
    // newRow.appendChild(Gloss);

    tableBody.appendChild(newRow);
  });
}
function updateGamesScores(seeds, roundID, winner, loser){
  const teamWinner = MajorTeams.find(t => t.team === winner);
  const teamLoser = MajorTeams.find(t => t.team === loser);
  let start = 0
  let end = 16
  if(roundID === 5){
    start = 2
    end = 12
  } else if(roundID === 6){
    start = 5
    end = 12
  }
  teamWinner.seriesWin++
  teamLoser.seriesLoss++
  sortMajorTeams()
  w = getIndexOfTeam(teamWinner)
  l = getIndexOfTeam(teamLoser)
  if(roundID === 4 && (w === 0 || w === 1)){
    playoffTeams[w] = teamWinner.team
  } else if(roundID === 5 && (w === 2 || w === 3 || w === 4)){
    playoffTeams[w] = teamWinner.team
  }if(roundID === 6 && (w === 5 || w === 6 || w === 7)){
    playoffTeams[w] = teamWinner.team
  }
  addTeamToSeeds(seeds, teamWinner.team, w-start)
  addTeamToSeeds(seeds, teamLoser.team, l-start)
  injectTeam(seeds, roundID, end)
  populateSwissTable()
  playoffTeams.forEach((id)=>{
    if(id === ''){
      run = false
    }
  })
  if(run){
    injectPlayoffs()
  } else {
    run = true
  }
}
function injectTeam(seeds, roundID, end){
  seeds.forEach((id)=>{
    for(i = 0; i < end; i++){
      if (i === seeds.indexOf(id)){
        document.getElementById(`R${roundID}S${i+1}`).innerHTML = id
      }
    }
  })
  playoffTeams.forEach((id)=>{
    if(id === ''){
      run = false
    }
  })
  if(run){
    injectPlayoffs()
  } else {
    run = true
  }
}
function addTeamToSeeds(seeds, team, place){
  seeds[place] = team
}
function sortMajorTeams(){
  MajorTeams.sort((a, b) => b.gameWin - a.gameWin)
  MajorTeams.sort((a, b) => a.gameLoss - b.gameLoss)
  MajorTeams.sort((a, b) => b.seriesWin - a.seriesWin)
  MajorTeams.sort((a, b) => a.seriesLoss - b.seriesLoss)
}
function getIndexOfTeam(team){
  ind = MajorTeams.indexOf(team)
  return ind
}

// Playoffs
function injectPlayoffs(){
  for(let i = 0; i < 8; i++){
    document.getElementById(`POseed${i+1}`).innerHTML = playoffTeams[i]
  }
}
function upper(match, winner, loser){
  if(match === 1){
    playoffsS[2] = winner
    playoffsQ[0] = loser
  } else if(match === 2){
    playoffsS[0] = winner
    playoffsQ[2] = loser
  }
  injectPlayoffVerdicts()
}
function lowerR(match, winner){
  if(match === 1){
    playoffsQ[1] = winner
  } else if(match === 2){
    playoffsQ[3] = winner
  } else if(match === 3){
    playoffsS[1] = winner
  } else if(match === 4){
    playoffsS[3] = winner
  } else if(match === 5){
    playoffsG[0] = winner
  } else if(match === 6){
    playoffsG[1] = winner
  }
  injectPlayoffVerdicts()
}
function grand(winner){
  document.getElementById("winner").innerHTML=winner;
}
function injectPlayoffVerdicts(){
  playoffsQ.forEach((id)=>{
    for(let i = 0; i < id.length; i++){
      if (i === playoffsQ.indexOf(id)){
        document.getElementById(`q${i+1}`).innerHTML = id
      }
    }
  })
  playoffsS.forEach((id)=>{
    for(let i = 0; i < id.length; i++){
      if (i === playoffsS.indexOf(id)){
        document.getElementById(`s${i+1}`).innerHTML = id
      }
    }
  })
  playoffsG.forEach((id)=>{
    for(let i = 0; i < id.length; i++){
      if (i === playoffsG.indexOf(id)){
        document.getElementById(`g${i+1}`).innerHTML = id
      }
    }
  })
}
function win(positionWinner, positionLoser){
  const teamWinner = document.getElementById(positionWinner)
  teamWinner.style = "color: white; background-color: green;"
  const teamLoser = document.getElementById(positionLoser)
  teamLoser.style = "color: black; background-color: red;"
}

