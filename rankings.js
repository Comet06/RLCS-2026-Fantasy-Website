import { path, deployLinks, menu, getTeamDetails } from "./main.js";
import { EventPoints, year } from "./current-fantasy-members.js";
import { determineSeasonPoints } from "./stats.js";

window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/teams_rankings.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    determineSeasonPoints()
    deploySplitPoints(1)
    deploySplitPoints(2)
    deploySplitQuals(kickoffLANQualifiedTeams, 0)
    deploySplitQuals(split1QualifiedTeams, 1)
    deploySplitQuals(split2QualifiedTeams, 2)
    deploySplitQuals(championshipQualifiedTeams, 3)
    console.log('Rankings page has loaded!');
  }
});
export let Regional1Placements = {
    'eu' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'na' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'oce' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'sam' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'mena' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'apac' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'ssa' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
}
export let Regional2Placements = {
    'eu' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'na' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'oce' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'sam' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'mena' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'apac' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'ssa' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
}
export let Regional3Placements = {
    'eu' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'na' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'oce' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'sam' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'mena' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'apac' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'ssa' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
}
export let Regional4Placements = {
    'eu' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'na' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'oce' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'sam' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'mena' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'apac' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'ssa' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
}
export let Regional5Placements = {
    'eu' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'na' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'oce' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'sam' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'mena' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'apac' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'ssa' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
}
export let Regional6Placements = {
    'eu' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'na' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'oce' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'sam' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'mena' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'apac' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'ssa' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
}

export let kickoffLANQualifiedTeams = [
    'EU',
    'EU',
    'EU',
    'EU',
    'NA',
    'NA',
    'NA',
    'NA',
]
export let kickoffLANPlacements = {
    'Major' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
}

export let split1QualifiedTeams = [
    'EU', 'EU', 'EU', 'EU',
    'NA', 'NA', 'NA', 'NA',
    'OCE', 'SAM', 'SAM',
    'MENA', 'MENA', 'APAC',
    'SSA', 'EU/NA #5',
]
// If EU Win kickoff
// NA1
// EU1
// MENA1
// EU2
// NA2
// EU3
// OCE1
// SAM1
// NA3
// EU4
// SAM2
// MENA2
// EU5
// NA4
// APAC1
// SSA1

// IF NA Win Kickoff
// NA1
// EU1
// MENA1
// EU2
// NA2
// EU3
// OCE1
// SAM1
// NA3
// EU4
// SAM2
// MENA2
// NA4
// APAC1
// SSA1
// NA5
export let Major1Placements = {
    'Major' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
}

export let split2QualifiedTeams = [
    'EU', 'EU', 'EU', 'EU',
    'NA', 'NA', 'NA', 'NA',
    'OCE', 'OCE', 'SAM', 'SAM',
    'MENA', 'MENA', 'APAC', 'SSA',
]
export let Major2Placements = {
    'Major' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
}

export let championshipQualifiedTeams = [
    'EU', 'EU', 'EU', 'EU',
    'NA', 'NA', 'NA', 'NA',
    'OCE', 'OCE', 'SAM', 'SAM',
    'MENA', 'MENA', 'APAC', 'SSA',
    'LCQ Region #1', 'LCQ Region #2',
    'LCQ Region #3', 'LCQ Region #4',
]
export let ChampionshipPlacements = {
    'Champ' : [
        '1st', 'TBD', '2nd', 'TBD', 
        '3rd-4th', 'TBD', '3rd-4th', 'TBD', 
        '5th-6th', 'TBD', '5th-6th', 'TBD', 
        '7th-8th', 'TBD', '7th-8th', 'TBD', 
        '9th-12th', 'TBD', '9th-12th', 'TBD', 
        '9th-12th', 'TBD', '9th-12th', 'TBD', 
        '13th-16th', 'TBD', '13th-16th', 'TBD', 
        '13th-16th', 'TBD', '13th-16th', 'TBD', 
        '17th-18th', 'TBD', '17th-18th', 'TBD', 
        '19th-20th', 'TBD', '19th-20th', 'TBD']
}

function deploySplitPoints(index){
  for(let i = 0; i < 16; i++){
    const tableBody = document.getElementById(`split${index}`);
    const newRow = document.createElement('tr');
    const regionalPts = document.createElement('td');
    const majorPts = document.createElement('td');

    regionalPts.textContent = EventPoints[`Regional${index}`][i]
    majorPts.textContent = EventPoints[`Major${index}`][i]
    
    newRow.appendChild(regionalPts);
    newRow.appendChild(majorPts);
    
    tableBody.appendChild(newRow);
  }
}
function deploySplitQuals(event, index){
  event.forEach((id) =>{
    const tableBody = document.getElementById(`split${index}quals`);
    const newRow = document.createElement('tr');
    const teamLink = document.createElement('a');
    const region = document.createElement('td');
    const team = document.createElement('td');
    const pts = document.createElement('td');
    if (id === 'EU' || id === 'NA' || id === 'OCE' || id === 'SAM' || id === 'MENA' || id === 'APAC' || id === 'SSA' || id === "EU/NA #5" || id === "LCQ Region #1" || id === "LCQ Region #2" || id === "LCQ Region #3" || id === "LCQ Region #4"){
      region.textContent = id
      team.textContent = 'TBD'
      pts.textContent = 0
    } else {
      region.textContent = getTeamDetails(id)[0]
      team.id = (getTeamDetails(id)[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
      teamLink.textContent = id;
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(getTeamDetails(id)[4])}`;
      if (event === split1QualifiedTeams){
        console.log('Split 1')
        pts.textContent = getTeamDetails(id)[1]
      } else if (event === kickoffLANQualifiedTeams){
        console.log('Kickoff LAN')
        if(0 === event.indexOf(id)){
          pts.textContent = 'Qual. to Maj.1'
        }
      } else if(event === split2QualifiedTeams){
        console.log('Split 2')
        pts.textContent = getTeamDetails(id)[2]
      } else if (event === championshipQualifiedTeams){
        console.log('Championship')
        pts.textContent = getTeamDetails(id)[3]
      }
      team.appendChild(teamLink);
    }

    newRow.appendChild(region);
    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
  })
}