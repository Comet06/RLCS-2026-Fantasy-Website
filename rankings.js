import { path, deployLinks, menu, regions } from "./main.js";
import { split1QualifiedTeams, split2QualifiedTeams, championshipQualifiedTeams, teams, split1, split2, year } from "./a-current-page-data.js";
import { Regional1Placements, Regional2Placements, Regional3Placements, Regional4Placements, Regional5Placements, Regional6Placements } from "./a-regionals.js";
import { Major1Placements, Major2Placements} from "./a-majors.js";

window.addEventListener('load', function() {
  if (window.location.pathname === `${path}/teams_rankings.html`) {
    deployLinks()
    menu()
    document.getElementById('year').innerHTML = `RLCS ${year}`
    determineSeasonPoints()
    deploySplitPoints(split1, 1)
    deploySplitPoints(split2, 2)
    deploySplitQuals(split1QualifiedTeams, 1)
    deploySplitQuals(split2QualifiedTeams, 2)
    deploySplitQuals(championshipQualifiedTeams, 3)
    console.log('Rankings page has loaded!');
  } else {
    console.log("main event listener is working but nothing else is")
  }
});


function determineSeasonPoints() {
  teams.forEach((id) => {
    regions.forEach((reg) => {
        const regional1Teams = Regional1Placements[reg];
        const team1Index = regional1Teams.indexOf(id.name);
        if (team1Index !== -1) {
          id.split1Pts += split1['Regional'][team1Index];
        }
        const regional2Teams = Regional2Placements[reg];
        const team2Index = regional2Teams.indexOf(id.name);
        if (team2Index !== -1) {
          id.split1Pts += split1['Regional'][team2Index];
        }
        const regional3Teams = Regional3Placements[reg];
        const team3Index = regional3Teams.indexOf(id.name);
        if (team3Index !== -1) {
          id.split1Pts += split1['Regional'][team3Index];
        }
        const regional4Teams = Regional4Placements[reg];
        const team4Index = regional4Teams.indexOf(id.name);
        if (team4Index !== -1) {
          id.split2Pts += split2['Regional'][team4Index];
        }
        const regional5Teams = Regional5Placements[reg];
        const team5Index = regional5Teams.indexOf(id.name);
        if (team5Index !== -1) {
          id.split2Pts += split2['Regional'][team5Index];
        }
        const regional6Teams = Regional6Placements[reg];
        const team6Index = regional6Teams.indexOf(id.name);
        if (team6Index !== -1) {
          id.split2Pts += split2['Regional'][team6Index];
        }
    });
    const major1Teams = Major1Placements['Major'];
    const team7Index = major1Teams.indexOf(id.name);
    if (team7Index !== -1) {
      id.split1Pts += split1['Major'][team7Index];
    }
    const major2Teams = Major2Placements['Major'];
    const team8Index = major2Teams.indexOf(id.name);
    if (team8Index !== -1) {
      id.split2Pts += split2['Major'][team8Index];
    }
    id.totalSeasonPts += id.split1Pts + id.split2Pts;
  });
}
function deploySplitPoints(event, index){
  for(let i = 0; i < 16; i++){
    const tableBody = document.getElementById(`split${index}`);
    const newRow = document.createElement('tr');
    const regionalPts = document.createElement('td');
    const majorPts = document.createElement('td');

    regionalPts.textContent = event['Regional'][i]
    majorPts.textContent = event['Major'][i]
    
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
    if (id === 'EU' || id === 'NA' || id === 'OCE' || id === 'SAM' || id === 'MENA' || id === 'APAC' || id === 'SSA' || id === "LCQ Region #1" || id === "LCQ Region #2" || id === "LCQ Region #3" || id === "LCQ Region #4"){
      region.textContent = id
      team.textContent = ''
      pts.textContent = 0
    } else {
      region.textContent = getTeamDetails(id)[0]
      team.id = (getTeamDetails(id)[4]).toLowerCase().replaceAll(" ","_").replaceAll(".","")
      teamLink.textContent = id;
      teamLink.href = `${path}/profile.html?name=${encodeURIComponent(getTeamDetails(id)[4])}`;
      if (event === split1QualifiedTeams){
        console.log('Split 1')
        pts.textContent = getTeamDetails(id)[1]
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