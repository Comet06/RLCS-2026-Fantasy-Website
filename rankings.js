import { teams } from "./player_data.js"

let split1 = {
    'Regional': [14, 10, 7, 7, 5, 5, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1],
    'Major': [30, 20, 14, 14, 10, 10, 6, 6, 5, 5, 5, 4, 4, 4, 3, 3],
}
let split2 = {
    'Regional': [18, 12, 8, 8, 6, 6, 4, 4, 2, 2, 2, 2, 1, 1, 1, 1],
    'Major': [36, 24, 16, 16, 12, 12, 8, 8, 6, 6, 6, 5, 5, 5, 5, 4],
}
const [S1top4TeamsInEU, S1topNTeamPointsEU] = getTopTeamsInRegionS1(teams, 'EU', 4);
const [S1top4TeamsInNA, S1topNTeamPointsNA] = getTopTeamsInRegionS1(teams, 'NA', 4);
const [S1top2TeamsInOCE, S1topNTeamPointsOCE] = getTopTeamsInRegionS1(teams, 'OCE', 2);
const [S1top2TeamsInSAM, S1topNTeamPointsSAM] = getTopTeamsInRegionS1(teams, 'SAM', 2);
const [S1top2TeamsInMENA, S1topNTeamPointsMENA] = getTopTeamsInRegionS1(teams, 'MENA', 2);
const [S1top1TeamsInAPAC, S1topNTeamPointsAPAC] = getTopTeamsInRegionS1(teams, 'APAC', 1);
const [S1top1TeamsInSSA, S1topNTeamPointsSSA] = getTopTeamsInRegionS1(teams, 'SSA', 1);

const [S2top4TeamsInEU, S2topNTeamPointsEU] = getTopTeamsInRegionS2(teams, 'EU', 4);
const [S2top4TeamsInNA, S2topNTeamPointsNA] = getTopTeamsInRegionS2(teams, 'NA', 4);
const [S2top2TeamsInOCE, S2topNTeamPointsOCE] = getTopTeamsInRegionS2(teams, 'OCE', 2);
const [S2top2TeamsInSAM, S2topNTeamPointsSAM] = getTopTeamsInRegionS2(teams, 'SAM', 2);
const [S2top2TeamsInMENA, S2topNTeamPointsMENA] = getTopTeamsInRegionS2(teams, 'MENA', 2);
const [S2top1TeamsInAPAC, S2topNTeamPointsAPAC] = getTopTeamsInRegionS2(teams, 'APAC', 1);
const [S2top1TeamsInSSA, S2topNTeamPointsSSA] = getTopTeamsInRegionS2(teams, 'SSA', 1);

const [Ttop4TeamsInEU, Ttop4TeamsPointsInEU] = getTopTeamsInRegionTotal(teams, 'EU', 5);
const [Ttop4TeamsInNA, Ttop4TeamsPointsInNA]= getTopTeamsInRegionTotal(teams, 'NA', 5);
const [Ttop2TeamsInOCE, Ttop2TeamsPointsInOCE] = getTopTeamsInRegionTotal(teams, 'OCE', 3);
const [Ttop2TeamsInSAM, Ttop2TeamsPointsInSAM] = getTopTeamsInRegionTotal(teams, 'SAM', 3);
const [Ttop2TeamsInMENA, Ttop2TeamsPointsInMENA] = getTopTeamsInRegionTotal(teams, 'MENA', 3);
const [Ttop1TeamsInAPAC, Ttop1TeamsPointsInAPAC] = getTopTeamsInRegionTotal(teams, 'APAC', 2);
const [Ttop1TeamsInSSA, Ttop1TeamsPointsInSSA] = getTopTeamsInRegionTotal(teams, 'SSA', 2);

let split1QualifiedTeams = [
    {region: 'EU', team: S1top4TeamsInEU[0], points: S1topNTeamPointsEU[0]},
    {region: 'EU', team: S1top4TeamsInEU[1], points: S1topNTeamPointsEU[1]},
    {region: 'EU', team: S1top4TeamsInEU[2], points: S1topNTeamPointsEU[2]},
    {region: 'EU', team: S1top4TeamsInEU[3], points: S1topNTeamPointsEU[3]},
    {region: 'NA', team: S1top4TeamsInNA[0], points: S1topNTeamPointsNA[0]},
    {region: 'NA', team: S1top4TeamsInNA[1], points: S1topNTeamPointsNA[1]},
    {region: 'NA', team: S1top4TeamsInNA[2], points: S1topNTeamPointsNA[2]},
    {region: 'NA', team: S1top4TeamsInNA[3], points: S1topNTeamPointsNA[3]},
    {region: 'OCE', team: S1top2TeamsInOCE[0], points: S1topNTeamPointsOCE[0]},
    {region: 'OCE', team: S1top2TeamsInOCE[1], points: S1topNTeamPointsOCE[1]},
    {region: 'SAM', team: S1top2TeamsInSAM[0], points: S1topNTeamPointsSAM[0]},
    {region: 'SAM', team: S1top2TeamsInSAM[1], points: S1topNTeamPointsSAM[1]},
    {region: 'MENA', team: S1top2TeamsInMENA[0], points: S1topNTeamPointsMENA[0]},
    {region: 'MENA', team: S1top2TeamsInMENA[1], points: S1topNTeamPointsMENA[1]},
    {region: 'APAC', team: S1top1TeamsInAPAC[0], points: S1topNTeamPointsAPAC[0]},
    {region: 'SSA', team: S1top1TeamsInSSA[0], points: S1topNTeamPointsSSA[0]},
]
let split2QualifiedTeams = [
    {region: 'EU', team: S2top4TeamsInEU[0], points: S2topNTeamPointsEU[0]},
    {region: 'EU', team: S2top4TeamsInEU[1], points: S2topNTeamPointsEU[1]},
    {region: 'EU', team: S2top4TeamsInEU[2], points: S2topNTeamPointsEU[2]},
    {region: 'EU', team: S2top4TeamsInEU[3], points: S2topNTeamPointsEU[3]},
    {region: 'NA', team: S2top4TeamsInNA[0], points: S2topNTeamPointsNA[0]},
    {region: 'NA', team: S2top4TeamsInNA[1], points: S2topNTeamPointsNA[1]},
    {region: 'NA', team: S2top4TeamsInNA[2], points: S2topNTeamPointsNA[2]},
    {region: 'NA', team: S2top4TeamsInNA[3], points: S2topNTeamPointsNA[3]},
    {region: 'OCE', team: S2top2TeamsInOCE[0], points: S2topNTeamPointsOCE[0]},
    {region: 'OCE', team: S2top2TeamsInOCE[1], points: S2topNTeamPointsOCE[1]},
    {region: 'SAM', team: S2top2TeamsInSAM[0], points: S2topNTeamPointsSAM[0]},
    {region: 'SAM', team: S2top2TeamsInSAM[1], points: S2topNTeamPointsSAM[1]},
    {region: 'MENA', team: S2top2TeamsInMENA[0], points: S2topNTeamPointsMENA[0]},
    {region: 'MENA', team: S2top2TeamsInMENA[1], points: S2topNTeamPointsMENA[1]},
    {region: 'APAC', team: S2top1TeamsInAPAC[0], points: S2topNTeamPointsAPAC[0]},
    {region: 'SSA', team: S2top1TeamsInSSA[0], points: S2topNTeamPointsSSA[0]},
]
let championshipQualifiedTeams = [
    {region: 'EU', team: Ttop4TeamsInEU[0], points: Ttop4TeamsPointsInEU[0]},
    {region: 'EU', team: Ttop4TeamsInEU[1], points: Ttop4TeamsPointsInEU[1]},
    {region: 'EU', team: Ttop4TeamsInEU[2], points: Ttop4TeamsPointsInEU[2]},
    {region: 'EU', team: Ttop4TeamsInEU[3], points: Ttop4TeamsPointsInEU[3]},
    {region: 'NA', team: Ttop4TeamsInNA[0], points: Ttop4TeamsPointsInNA[0]},
    {region: 'NA', team: Ttop4TeamsInNA[1], points: Ttop4TeamsPointsInNA[1]},
    {region: 'NA', team: Ttop4TeamsInNA[2], points: Ttop4TeamsPointsInNA[2]},
    {region: 'NA', team: Ttop4TeamsInNA[3], points: Ttop4TeamsPointsInNA[3]},
    {region: 'OCE', team: Ttop2TeamsInOCE[0], points: Ttop2TeamsPointsInOCE[0]},
    {region: 'OCE', team: Ttop2TeamsInOCE[1], points: Ttop2TeamsPointsInOCE[1]},
    {region: 'SAM', team: Ttop2TeamsInSAM[0], points: Ttop2TeamsPointsInSAM[0]},
    {region: 'SAM', team: Ttop2TeamsInSAM[1], points: Ttop2TeamsPointsInSAM[1]},
    {region: 'MENA', team: Ttop2TeamsInMENA[0], points: Ttop2TeamsPointsInMENA[0]},
    {region: 'MENA', team: Ttop2TeamsInMENA[1], points: Ttop2TeamsPointsInMENA[1]},
    {region: 'APAC', team: Ttop1TeamsInAPAC[0], points: Ttop1TeamsPointsInAPAC[0]},
    {region: 'SSA', team: Ttop1TeamsInSSA[0], points: Ttop1TeamsPointsInSSA[0]},
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

function getTopTeamsInRegionS1(teams, region, numTopTeams) {
  const Teams = teams.filter(team => team.region === region);
  const sortedTeams = Teams.sort((a, b) => b.split1Pts - a.split1Pts);
  const topN = sortedTeams.slice(0, numTopTeams);
  const topNTeamNames = topN.map(team => team.name);
  const topNTeamPoints = topN.map(team => team.split1Pts);
  return [topNTeamNames, topNTeamPoints];
}
function getTopTeamsInRegionS2(teams, region, numTopTeams) {
  const naTeams = teams.filter(team => team.region === region);
  const sortedNaTeams = naTeams.sort((a, b) => b.split2Pts - a.split2Pts);
  const topN = sortedNaTeams.slice(0, numTopTeams);
  const topNTeamNames = topN.map(team => team.name);
  const topNTeamPoints = topN.map(team => team.split2Pts);
  return [topNTeamNames, topNTeamPoints];
}
function getTopTeamsInRegionTotal(teams, region, numTopTeams) {
  const naTeams = teams.filter(team => team.region === region);
  const sortedNaTeams = naTeams.sort((a, b) => b.totalSeasonPts - a.totalSeasonPts);
  const topN = sortedNaTeams.slice(0, numTopTeams);
  const topNTeamNames = topN.map(team => team.name);
  const topNTeamPoints = topN.map(team => team.totalSeasonPts);
  return [topNTeamNames, topNTeamPoints];
}