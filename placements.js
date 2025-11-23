import { teams } from "./current-fantasy-members.js"
import { getTeamDetails } from "./events.js"
import { regions } from "./main.js"
export let Regional1Placements = {
    'eu' : ['', '', '', '', '', '', '', '', 'Pina Low Driven', 'Dreifach-Reset', 'Geekay Esports', 'GHT', 'Sonics', 'Hogan Mode', 'Cloud Esports', 'TKS'],
    'na' : ['', '', '', '', '', '', 'Shuffles Kittens', 'Team Silenced', 'Ciel', 'Lotus 8 Esports', 'NRG', 'Top Leh', 'G.A.S.', 'Unreal Nightmare', 'M80', 'Feastaboniam'],
    'oce' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'sam' : ['', '', '', '', '', '', 'Sanificados', 'Emerald', 'Aelix', 'NoTime', 'Enosis eSports', 'Fear Of God', 'bandoleiros', 'NoPlanB', 'Changuitos FC', 'Overlooked'],
    'mena' : ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
    'apac' : ['', '', '', '', '', '', 'Xing Xi Xooters', 'Praise', 'HHM', 'Sailing Esports', 'Fernstella', 'Big Dawgs', 'Instant', 'Lamb Munchers', 'Bajak Laut Digital', 'Uhuh'],
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
'EU #1',
'EU #2',
'EU #3',
'EU #4',
'NA #1',
'NA #2',
'NA #3',
'NA #4',
]
export let kickoffLANPlacements = {
    'Major' : [
        'Spacestation Gaming', 'Redacted',
        'TBD', 'TBD',
        'TBD', 'TBD',
        'TBD', 'TBD',
    ],
}

export let split1QualifiedTeamsUnsorted = []
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
'NA/EU #5',//Change when known(hide)
'NA #4',
'APAC #1',
'SSA #1',
// 'NA #5', //If NA Wins
]
export let Major1Placements = {
    'Major' : [
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    ],
}
export let split2QualifiedTeamsUnsorted = []
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
'NA/EU #5',//Change when known(hide)
'NA #4',
'APAC #1',
'SSA #1',
// 'NA #5', //If NA Wins
]
export let Major2Placements = {
    'Major' : [
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    ],
}
export let championshipQualifiedTeamsUnsorted = []
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
'NA/EU #5',//Change when known(hide)
'NA #4',
'APAC #1',
'SSA #1',
// 'NA #5', //If NA Wins
'LCQ Region #1',//Change when known
'LCQ Region #2',//Change when known
'LCQ Region #3',//Change when known
'LCQ Region #4',//Change when known
]
export let ChampionshipPlacements = {
    'Major' : [
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    'TBD', 'TBD', 'TBD', 'TBD',
    ]
}

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
            const placementLength = id2.length-3
            const placementOfRegion = id2.substring(0, placementLength) //Find the placement region
            const placementPosition = id2.at(-1) //placement position
            const indexOfID2 = quals.indexOf(id2)
            const fullPosition = (placementOfRegion + ' #' + placementPosition)
            if(placementOfRegion === team[1] && fullPosition.includes(team[2])){
                quals[indexOfID2] = team[0]
            }
        })
    })

}
