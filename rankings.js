import { path, deployLinks, menu, regions } from "./main.js";
import { getTeamDetails } from "./events.js";
import { EventPoints, year, teams } from "./current-fantasy-members.js";
import { determineIndex, kickoffLANQualifiedTeams, split1QualifiedTeams, split2QualifiedTeams, championshipQualifiedTeams,
  Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements, Major1Placements, Major2Placements, major1QualifiedTeamsUnsorted, major2QualifiedTeamsUnsorted, championshipQualifiedTeamsUnsorted, 
  determineQualSpots} from "./placements.js";
const eventNum = 3
window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/teams_rankings.html`) {
    deployLinks()
    menu()
    determineSeasonPoints()
    // if(eventNum === 1){
    //   determineQualSpots(1, major1QualifiedTeamsUnsorted, split1QualifiedTeams)
    // } else if(eventNum === 2){
    //   determineQualSpots(1, major1QualifiedTeamsUnsorted, split1QualifiedTeams)
    //   determineQualSpots(2, major2QualifiedTeamsUnsorted, split2QualifiedTeams)
    // } else if(eventNum === 3){
    //   determineQualSpots(1, major1QualifiedTeamsUnsorted, split1QualifiedTeams)
    //   determineQualSpots(2, major2QualifiedTeamsUnsorted, split2QualifiedTeams)
    //   determineQualSpots(3, championshipQualifiedTeamsUnsorted, championshipQualifiedTeams)
    // }
    document.getElementById('year').innerHTML = `RLCS ${year}`
    deploySplitPoints(1)
    deploySplitPoints(2)
    deploySplitQuals(kickoffLANQualifiedTeams, 0)
    deploySplitQuals(split1QualifiedTeams, 1)
    deploySplitQuals(split2QualifiedTeams, 2)
    deploySplitQuals(championshipQualifiedTeams, 3)
    console.log('Rankings page has loaded!');
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
    if (id.includes('EU') || id.includes('NA') || id.includes('OCE') || id.includes('SAM') || id.includes('MENA') || id.includes('APAC') || id.includes('SSA') || id.includes('LCQ')){
      region.textContent = id
      team.textContent = 'TBD'
      pts.textContent = 0
    } else {
      region.textContent = getTeamDetails(id)[0]
      team.id = (getTeamDetails(id)[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
      teamLink.textContent = id;
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(getTeamDetails(id)[4])}`;
      if (event === split1QualifiedTeams){
        pts.textContent = getTeamDetails(id)[1]
      } else if (event === kickoffLANQualifiedTeams){
        if(0 === event.indexOf(id)){
          pts.textContent = 'Qual. to Maj.1'
        }
      } else if(event === split2QualifiedTeams){
        pts.textContent = getTeamDetails(id)[2]
      } else if (event === championshipQualifiedTeams){
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
export function determineSeasonPoints() {
  teams.forEach((id) => {
    regions.forEach((reg) => {
        const regional1Teams = Regional1Placements[reg.reg];
        const team1Index = regional1Teams.indexOf(id.team);
        if (team1Index !== -1) {
          id.split1Pts += EventPoints['Regional1'][team1Index];
        }
        const regional2Teams = Regional2Placements[reg.reg];
        const team2Index = regional2Teams.indexOf(id.team);
        if (team2Index !== -1) {
          id.split1Pts += EventPoints['Regional1'][team2Index];
        }
        const regional3Teams = Regional3Placements[reg.reg];
        const team3Index = regional3Teams.indexOf(id.team);
        if (team3Index !== -1) {
          id.split1Pts += EventPoints['Regional1'][team3Index];
        }
        const regional4Teams = Regional4Placements[reg.reg];
        const team4Index = regional4Teams.indexOf(id.team);
        if (team4Index !== -1) {
          id.split2Pts += EventPoints['Regional2'][team4Index];
        }
        const regional5Teams = Regional5Placements[reg.reg];
        const team5Index = regional5Teams.indexOf(id.team);
        if (team5Index !== -1) {
          id.split2Pts += EventPoints['Regional2'][team5Index];
        }
        const regional6Teams = Regional6Placements[reg.reg];
        const team6Index = regional6Teams.indexOf(id.team);
        if (team6Index !== -1) {
          id.split2Pts += EventPoints['Regional2'][team6Index];
        }
    });
    const major1Teams = Major1Placements['Major'];
    const team7Index = major1Teams.indexOf(id.team);
    if (team7Index !== -1) {
      id.split1Pts += EventPoints['Major1'][team7Index];
    }
    const major2Teams = Major2Placements['Major'];
    const team8Index = major2Teams.indexOf(id.team);
    if (team8Index !== -1) {
      id.split2Pts += EventPoints['Major2'][team8Index];
    }
    id.totalSeasonPts += id.split1Pts + id.split2Pts;
  });
}