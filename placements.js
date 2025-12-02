import { teams } from "./members.js"
import { getTeamDetails } from "./events.js"
import { regions } from "./main.js"
export let Regional1Placements = {
    'eu' : ['', '', '', '', '', '', 'Magnifico', 'Gentlebench', 'Pina Low Driven', 'Dreifach-Reset', 'Geekay Esports', 'GHT', 'Sonics', 'Hogan Mode', 'Cloud Esports', 'TKS'],
    'na' : ['', '', '', '', '', '', 'Shuffles Kittens', 'Team Silenced', 'Ciel', 'Lotus 8 Esports', 'NRG', 'Top Leh', 'G.A.S.', 'Unreal Nightmare', 'M80', 'Feastaboniam'],
    'oce' : ['PWR', 'Wildcard', 'Canterbury Bulldogs', 'Take Flyte', 'you not a champ', 'Almost Nuts', 'Team Freez', 'KekDubz', 'Vade Esports', 'Miami Metro', 'petrol money', '4Ever', 'Spliced', 'R.T.T.', 'Lethal Esports', 'Dumb Luck Esports'],
    'sam' : ['Furia Esports', 'MIBR', 'Amethyst', 'Team Secret', 'Novadrift', 'Three Point Shooters', 'Sanificados', 'Emerald', 'Aelix', 'NoTime', 'Enosis eSports', 'Fear Of God', 'bandoleiros', 'NoPlanB', 'Changuitos FC', 'Overlooked'],
    'mena' : ['Twisted Minds', 'Team Falcons', 'Sleeping', 'ROC Esports', 'dont disturb us', 'MMA', 'Awawa', 'Project S', 'Fearless', 'Nothing', 'Rural', 'SWC', 'The First', '100', 'Incindies', 'NRD Esports'],
    'apac' : ['Project Delacruz', 'Kinotrope Gaming', 'Ground Zero Gaming', 'Daybreak Frontline', 'Northstar Gaming', 'Rapier', 'Xing Xi Xooters', 'Praise', 'HHM', 'Sailing Esports', 'Fernstella', 'Big Dawgs', 'Instant', 'Lamb Munchers', 'Bajak Laut Digital', 'Uhuh'],
    'ssa' : ['Pioneers', 'Five Fears', 'Looking For Organization', 'CosmiCo Esports', 'Death Cloud Esports', 'Synthesis', 'Team10', 'The Punishers', 'Ox Gaming', 'Rounds', 'Team HSK', 'Unity', 'White Rabbit Gaming', 'Astronic Esports', 'Nkandla Style', 'spanish pap en wors'],
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
export let Placements = {
    'Kickoff' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    'Major1' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    'Major2' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    'Champ' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
}

export let kickoffLANQualifiedTeams = [
'Ninjas in Pyjamas',
'Karmine Corp',
'EU #3',
'EU #4',
'Spacestation Gaming',
'Redacted',
'NA #3',
'NA #4',
]
export let split1QualifiedTeams = [
'NA #1',
'EU #1',
'MENA #1',
'EU #2',
'NA #2',
'EU #3',
'OCE #1',
'SAM #1',
'NA #3',
'EU #4',
'SAM #2',
'MENA #2',
// 'EU #5', //If EU Wins
'NA #4',
'APAC #1',
'SSA #1',
// 'NA #5', //If NA Wins
'NA/EU #5',//Change when known(hide)
]
export let split2QualifiedTeams = [
'NA #1',
'EU #1',
'MENA #1',
'EU #2',
'NA #2',
'EU #3',
'OCE #1',
'SAM #1',
'NA #3',
'EU #4',
'SAM #2',
'MENA #2',
// 'EU #5', //If EU Wins
'NA #4',
'APAC #1',
'SSA #1',
// 'NA #5', //If NA Wins
'NA/EU #5',//Change when known(hide)
]
export let championshipQualifiedTeams = [
'NA #1',
'EU #1',
'MENA #1',
'EU #2',
'NA #2',
'EU #3',
'OCE #1',
'SAM #1',
'NA #3',
'EU #4',
'SAM #2',
'MENA #2',
// 'EU #5', //If EU Wins
'NA #4',
'APAC #1',
'SSA #1',
// 'NA #5', //If NA Wins
'NA/EU #5',//Change when known(hide)
'LCQ Region #1',//Change when known
'LCQ Region #2',//Change when known
'LCQ Region #3',//Change when known
'LCQ Region #4',//Change when known
]
export let split1QualifiedTeamsUnsorted = [] //used for pushing the number of teams going to the event sorting is done after
export let split2QualifiedTeamsUnsorted = []
export let championshipQualifiedTeamsUnsorted = []

export function determineSpots(quals, unsorted, num){
    let spotType = ''
    if(num === 1){
        teams.sort((a,b)=> b.split1Pts - a.split1Pts)
    } else if(num === 2){
        teams.sort((a,b)=> b.split2Pts - a.split2Pts)
    } else if(num === 3){
        teams.sort((a,b)=> b.totalSeasonPts - a.totalSeasonPts)
    }
    regions.forEach((id)=>{
        if(num === 1 || num === 2){
            spotType = id.spots
        } else {
            spotType = id.chspots
        }
        const teamsFiltered = teams.filter(t => t.region.toLowerCase() === id.reg);
        for(let i = 0; i < spotType; i++){
            unsorted.push({teamname: teamsFiltered[i].team, placementNum: i+1})
        }
    })
    unsorted.forEach((id)=>{
        //team, region, index in quals
        const team = [id.teamname, getTeamDetails(id.teamname)[0], id.placementNum, unsorted.indexOf(id)]
        quals.forEach((id2) => {
            const regionTextLength = id2.length-3 //determine the length of string ex. (NA) #3
            const placementOfRegion = id2.substring(0, regionTextLength) //Find the placement region
            const placementPosition = id2.at(-1) //placement position
            const indexOfID2 = quals.indexOf(id2)
            const fullPosition = (placementOfRegion + ' #' + placementPosition)
            if(placementOfRegion === team[1] && fullPosition.includes(team[2])){
                quals[indexOfID2] = team[0]
            }
        })
    })
}