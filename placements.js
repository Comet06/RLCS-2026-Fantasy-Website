import { teams } from "./members.js"
import { getTeamDetails } from "./events.js"
import { regions } from "./main.js"
export let Regional1Placements = {
    'eu' : ['Karmine Corp', 'Ninjas in Pyjamas', 'Team Vitality', 'Novo Esports', 'Gentle Mates Alpine', 'Man City Esports', 'Magnifico', 'Gentlebench', 'Pina Low Driven', 'Dreifach-Reset', 'Geekay Esports', 'GHT', 'Sonics', 'Hogan Mode', 'Cloud Esports', 'TKS'],
    'na' : ['Shopify Rebellion', 'Spacestation Gaming', 'Virtus pro', 'GenG Mobil1 Racing', 'FUT Esports', '100X35 Esports', 'Shuffles Kittens', 'Team Silenced', 'Ciel', 'Lotus 8 Esports', 'NRG', 'Top Leh', 'G.A.S.', 'Unreal Nightmare', 'M80', 'Feastaboniam'],
    'oce' : ['PWR', 'Wildcard', 'Canterbury Bulldogs', 'Take Flyte', 'you not a champ', 'Almost Nuts', 'Team Freez', 'KekDubz', 'Vade Esports', 'Miami Metro', 'petrol money', '4Ever', 'Spliced', 'R.T.T.', 'Lethal Esports', 'Dumb Luck Esports'],
    'sam' : ['Furia Esports', 'MIBR', 'Amethyst', 'Team Secret', 'Novadrift', 'Three Point Shooters', 'Sanificados', 'Emerald', 'Aelix', 'NoTime', 'Enosis eSports', 'Fear Of God', 'bandoleiros', 'NoPlanB', 'Changuitos FC', 'Overlooked'],
    'mena' : ['Twisted Minds', 'Team Falcons', 'Sleeping', 'ROC Esports', 'dont disturb us', 'MMA', 'Awawa', 'Project S', 'Fearless', 'Nothing', 'Rural', 'SWC', 'The First', '100', 'Incindies', 'NRD Esports'],
    'apac' : ['TSM', 'Kinotrope Gaming', 'Ground Zero Gaming', 'Daybreak Frontline', 'Northstar Gaming', 'Rapier', 'Xing Xi Xooters', 'Praise', 'HHM', 'Sailing Esports', 'Fernstella', 'Big Dawgs', 'Instant', 'Lamb Munchers', 'Bajak Laut Digital', 'Uhuh'],
    'ssa' : ['Pioneers', 'Five Fears', 'Looking for organization', 'CosmiCo Esports', 'Death Cloud Esports', 'Synthesis', 'Team10', 'The Punishers', 'Ox Gaming', 'Rounds', 'Team HSK', 'Unity', 'White Rabbit Gaming', 'Astronic Esports', 'Nkandla Style', 'spanish pap en wors'],
}
export let Regional2Placements = {
    'eu' : ['Karmine Corp', 'Geekay Esports', 'Team Vitality', 'Gentle Mates Alpine', 'Ninjas in Pyjamas', 'Magnifico', 'WIP Esports', 'Man City Esports', 'FN', 'Gentlebench', 'Team BSK', 'Wylde', 'Selecao', 'Gameward', 'Dreifach-Reset', 'Triple T'],
    'na' : ['NRG', 'Virtus pro', 'Shopify Rebellion', 'FUT Esports', 'Dignitas', 'M80', 'Spacestation Gaming', 'Lotus 8 Esports', 'GenG Mobil1 Racing', 'Ciel', 'Apple Slices', 'Unreal Nightmare', 'Shuffles Kittens', '90210', '1', 'Team Silenced'],
    'oce' : ['Wildcard', 'PWR', 'Batman on Wheels', 'Canterbury Bulldogs', 'yeah bruv', 'aight', 'you not a champ', 'Team Freez', 'Miami Retro', 'R.T.T.', 'Take Flyte', 'FAC', 'Chopped uncs', 'The Babysitter', 'BDS', 'Karma Esports'],
    'sam' : ['MIBR', 'Team Secret', 'Amethyst', 'Furia Esports', 'Chromax', 'Chinatown', 'Sandificados', 'Novadrift', 'Sunset', 'Dream Esports', 'Enosis Esports', 'Three Point Shooters', 'bandoleiros', 'timezin', 'Fear of God', 'aurafarm'],
    'mena' : ['Team Falcons', 'Twisted Minds', 'MMA', 'DOS', 'alyom w ana', 'R8 Esports', 'Nothing', 'DNS', 'Sleeping', 'Team Stallions', 'Buried', 'rbc', 'Echoe', 'Dfn', 'HTR', 'Hasta la Vista'],
    'apac' : ['TSM', 'Ground Zero Gaming', 'Kinotrope Gaming', 'Northstar Gaming', 'Inarizaki', 'Sailing Esports', 'God speed', 'Big Dawgs', 'Overlooked', 'Kinoko Soup', 'Xing Xi Xooters', 'Reunited uncs', 'Goblin Barrel', 'Retirement Home', 'J. Chicken Esports', 'Bearclaw Gaming'],
    'ssa' : ['Five Fears', 'Pioneers', 'Amapiano', 'Astronic Esports', 'Brocrocros', 'White Rabbit Gaming', 'Death Cloud Esports', 'Synthesis', 'The Punishers', 'Rounds', 'Project One', 'Looking for Organization', 'new dogs old tricks', 'Unity', 'The Wave', 'Str1ve Esports'],
}
export let Regional3Placements = {
    'eu' : ['Gentle Mates Alpine', 'Karmine Corp', 'Team Vitality', 'Man City Esports', 'Magnifico', 'Ninjas in Pyjamas', 'Geekay Esports', 'TEam BSK', 'Caliente', 'GHT', 'Wylde', 'RST', 'Novo Esports', 'FN', 'Selaco', 'Cloud Esport'],
    'na' : ['NRG', 'Virtus pro', 'Shopify Rebellion', 'Spacestation Gaming', 'FUT Esports', 'Dignitas', 'M80', 'United Rogue', 'Ciel', 'Shuffles Kittens', '90210', 'GenG Mobil1 Racing', 'Fromage SkouikSkouik', 'Lotus 8 Esports', 'Foul Merchants', 'Freedom'],
    'oce' : ['Canterbury Bulldogs', 'PWR', 'Wildcard', 'Miami Metro', 'aight', 'you not a champ', 'Top 48', 'Dogged and Dangerous', 'Dumb Luck Esports', 'Vade Esports', 'Wild', 'The Babysitter', 'Power Puff Boys', 'Batman on Wheels', 'No Scrimmers', 'Team'],
    'sam' : ['Furia Esports', 'MIBR', 'Team Secret', 'Amethyst', 'Emerald', 'Three Point Shooters', 'Novadrift', 'Enosis Esports', 'SDB', 'Chinatown', 'Sanificados', 'PAC', 'NoPlanB', 'Chromax', 'PDO', 'Bandoleiros'],
    'mena' : ['Team Falcons', 'R8 Esports', 'Twisted Minds', 'DOS', 'Sleeping', 'Everything', 'Nightmare', 'MMT', 'Alyom W', 'Nothing', 'We dont know', 'ExciTinG1', 'DfN', 'Elite', 'RTK', 'Eternity'],
    'apac' : ['TSM', 'Kinotrope Gaming', 'Ground Zero Gaming', 'Sailing Esports', 'God speed', 'BearClaw Gaming', 'Overlooked', 'J. Chicken Esports', 'Inarizaki', 'Charmy', 'We, Yes we are Asian', 'Random', 'Xing Xi Xooters', 'Big Dawgs', 'MGL Esports', 'Dreamstation'],
    'ssa' : ['Five Fears', 'Pioneers', 'Amapiano', 'Brocrocros', 'Unity', 'St1ve Esports', 'Death Cloud Esports', 'Team HSK', 'Akimbo Esports', 'Astronic Esports', 'Looking for Organization', 'Supersonic Legends', 'SZ5', 'T2G Esports', 'Synthesis', 'Rounds'],
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
    'Kickoff' : ['Karmine Corp', 'Shopify Rebellion', 'Virtus pro', 'Spacestation Gaming', 'Ninjas in Pyjamas', 'Team Vitality', 'Novo Esports', 'GenG Mobil1 Racing'],
    'Major1' : ['Gentle Mates Alpine', 'Team Vitality', 'NRG', 'Team Falcons', 'Karmine Corp', 'Shopify Rebellion', 'Geekay Esports', 'Ninjas in Pyjamas', 'PWR', 'Virtus pro', 'Twisted Minds', 'MIBR', 'Five Fears', 'Furia Esports', 'Spacestation Gaming', 'TSM'],
    'Major2' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
    'Champ' : ['TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD', 'TBD'],
}

export let kickoffLANQualifiedTeams = [
'Karmine Corp',
'Ninjas in Pyjamas',
'Team Vitality',
'Novo Esports',
'Shopify Rebellion',
'Spacestation Gaming',
'Virtus pro',
'GenG Mobil1 Racing',
]
export let split1QualifiedTeams = [
'Ninjas in Pyjamas',
'Team Falcons',
'Karmine Corp',
'Gentle Mates Alpine',
'Shopify Rebellion',
'Team Vitality',
'Furia Esports',
'PWR',
'Five Fears',
'Geekay Esports',
'Twisted Minds',
'TSM',
'MIBR',
'Spacestation Gaming',
'Virtus pro',
'NRG',
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
'EU #5',
'NA #4',
'APAC #1',
'SSA #1',
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
'EU #5',
'NA #4',
'APAC #1',
'SSA #1',
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