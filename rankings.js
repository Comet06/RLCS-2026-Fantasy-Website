import { split1, split2 } from "./home_page.js"


let split1QualifiedTeams = [
    {region: 'EU', team: '', points: 0},
    {region: 'EU', team: '', points: 0},
    {region: 'EU', team: '', points: 0},
    {region: 'EU', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'OCE', team: '', points: 0},
    {region: 'OCE', team: '', points: 0},
    {region: 'SAM', team: '', points: 0},
    {region: 'SAM', team: '', points: 0},
    {region: 'MENA', team: '', points: 0},
    {region: 'MENA', team: '', points: 0},
    {region: 'APAC', team: '', points: 0},
    {region: 'SSA', team: '', points: 0},
]
let split2QualifiedTeams = [
    {region: 'EU', team: '', points: 0},
    {region: 'EU', team: '', points: 0},
    {region: 'EU', team: '', points: 0},
    {region: 'EU', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'OCE', team: '', points: 0},
    {region: 'OCE', team: '', points: 0},
    {region: 'SAM', team: '', points: 0},
    {region: 'SAM', team: '', points: 0},
    {region: 'MENA', team: '', points: 0},
    {region: 'MENA', team: '', points: 0},
    {region: 'APAC', team: '', points: 0},
    {region: 'SSA', team: '', points: 0},
]
let championshipQualifiedTeams = [
    {region: 'EU', team: '', points: 0},
    {region: 'EU', team: '', points: 0},
    {region: 'EU', team: '', points: 0},
    {region: 'EU', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'NA', team: '', points: 0},
    {region: 'OCE', team: '', points: 0},
    {region: 'OCE', team: '', points: 0},
    {region: 'SAM', team: '', points: 0},
    {region: 'SAM', team: '', points: 0},
    {region: 'MENA', team: '', points: 0},
    {region: 'MENA', team: '', points: 0},
    {region: 'APAC', team: '', points: 0},
    {region: 'SSA', team: '', points: 0},
    {region: 'LCQ Region #1', team: '', points: 0},
    {region: 'LCQ Region #2', team: '', points: 0},
    {region: 'LCQ Region #3', team: '', points: 0},
    {region: 'LCQ Region #4', team: '', points: 0},
]

const myElement = document.querySelector('.rankings');
if (myElement) {
    console.log('rankings page is working')
    deploySplitPoints(split1, 1)
    deploySplitPoints(split2, 2)
    deploySplitQuals(split1QualifiedTeams, 1)
    deploySplitQuals(split2QualifiedTeams, 2)
    deploySplitQuals(championshipQualifiedTeams, 3)
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
    const region = document.createElement('td');
    const team = document.createElement('td');
    const pts = document.createElement('td');

    region.textContent = id.region
    team.textContent = id.team
    pts.textContent = id.points

    newRow.appendChild(region);
    newRow.appendChild(team);
    newRow.appendChild(pts);
    
    tableBody.appendChild(newRow);
    })
}