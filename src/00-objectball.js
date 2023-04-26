function gameObject(){
    const myObj = {
        home : {
            teamName : "Brooklyn Nets" , 
            colors:["Black","White"] , 
            players: [
                {playerName:  "Alan Anderson",
                number: "0", points:"22",shoe: 1},
                {playerName: "Reggie Evans" ,
                number: "30", points:"12",shoe: 2}
            ] 
        },
    
        
        away :{
            teamName:"Charlotte Hornets" , 
            colors: ["Turquoise", "Purple"],
            players:[
                {playerName: "Jeff Adrien",
                number: "4", points: "10",shoe: 3,},
                {playerName: "Bismak Biyombo",
                number: "0", points:"12",shoe: 4,}
            ]
        }
        


    }
    return myObj
}

// function homeTeamName(){
//     let game = gameObject()
//     debugger;
//     for (let gameKey in game){
        
//         debugger;
//         let teamObj = game[gameKey]
//         for (let teamKey in teamObj){
//             debugger;
//             console.log(teamObj[teamKey])
//         }
//     }
// }

// console.log(homeTeamName())


function numPointsScored(queryName){

    let game = gameObject()

    for (gameKey in game){
        let teamKey = game[gameKey]
        debugger;

        for (key in teamKey){
            if(key == "players"){
                let playersObj = teamKey[key] 
                for (i in playersObj){
                    let playerData = playersObj[i]
                    for (j in playerData){
                        if( playerData[j] == queryName){
                            return playerData["points"]
                        }
                    }
                }
            }
            

        }
            
    }
}


function shoeSize (query){
    let game = gameObject()
    for( i in game){
        let team = game[i]
        for (j in team){
            if (j === "players"){ 
                let key = team[j]
                for (k in key){
                    let player = key[k]
                    for (l in player){
                        if(l === "shoe"){
                            if(player[l] === query){
                                return(player["playerName"])
                            }
                            

                        }

                    }
                    
                }
            }    
        }
    }
}
//console.log(shoeSize(2)) 

function teamColor(query){
    let game = gameObject()
    for (i in game){
        let team = game[i]
        for (j in team){
            if(team[j] === query){
                return(team["colors"])
            }
        }
    }
}

//console.log(teamColor("Charlotte Hornets")) 

function teamName(){
    let array = []
    let game = gameObject()
    for (i in game){
        let team = game[i]
        for (j in team){
            if (j === "teamName"){
                array.push(team[j])
            }
        }
    }
    return array
}

//console.log(teamName())

function playerStats(query){
    let game = gameObject()
    let stats = {}
    for (i in game){
        let team = game[i]
        for (j in team){
            if (j === "players"){
                let player = team[j]
                for (k in player){
                    let playerDataKeys = player[k] 
                    
                    for ( l in playerDataKeys){
                        if(playerDataKeys[l] === query){
                            return playerDataKeys
                        }
                    }
                }
            }

        }
        
    }
    return stats
}
//console.log(playerStats("Jeff Adrien")) 