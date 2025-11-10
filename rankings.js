import { path, deployLinks, menu, getTeamDetails } from "./main.js";
import { EventPoints, year } from "./current-fantasy-members.js";
import { determineSeasonPoints } from "./stats.js";
import { kickoffLANQualifiedTeams, split1QualifiedTeams, split2QualifiedTeams, championshipQualifiedTeams } from "./placements.js"

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
  } else {
    console.log("main event listener is working but nothing else is")
  }
});


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