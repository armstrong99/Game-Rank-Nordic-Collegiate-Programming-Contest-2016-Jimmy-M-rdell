const seqOfGames = 'WWWWLLLLLLLLWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWLWWWWWWWWWW'
 
let arrayOfSeq = seqOfGames.split('')

const starsOnRanks = currRank => {
  try {
    if(currRank >= 21) {return 2}
    else if(currRank >= 16) {return 3}
    else if( currRank >= 11) {return 4}

   else if(currRank >= 1) {return 5}
      else return 'legend'
  } catch (error) {
    return ''
  }
 
  
}
const Player = {
  currStar: 0,
  currRank: 25,
  stateWin: 0,
  stateLose: 0,
  legend: false,
  initialPlay: true,
  addWin: function(){
     this.stateWin++ 
    },
  addLose: function(){ this.stateLose++ },
  addStar: function(){ this.currStar++ },
  minusStar: function() {this.currStar-- },
  resetWin: function() { this.stateWin = 0 },
  setLegend: function(){ this.currRank < 1 ? this.legend = true : this.legend = false },
  bonusGiver: function() {
     if(this.stateWin + 1 >= 3 && this.currRank > 5 && this.currRank < 26) {
      this.addStar()
      this.addStar()
      this.addWin()
    
      if(this.currStar >= starsOnRanks(this.currRank)){
     this.currRank--
      return this.currStar = this.currStar - starsOnRanks(this.currRank)
  
  }
      }
      
   else {
    // For instance, if before a winning game the player had all the stars on her
    // current rank, she will after the game have gained one rank and have 1 or
    // 2 stars (depending on whether she got a bonus star) on the new rank. 
          if(this.currStar === starsOnRanks(this.currRank)){
            this.addWin()
            this.currRank--
          return this.currStar = this.currStar - starsOnRanks(this.currRank)
            
            } 
            // If
            // on the other hand she had all stars except one on a rank, and won a game
            // that also gave her a
          else if(starsOnRanks(this.currRank) - this.currStar === 1) {
               this.addWin()
               this.addStar()
               this.addStar()
               this.currRank--
               this.currStar = this.currStar - starsOnRanks(this.currRank)
            }

             else {
              this.addWin()
              this.addStar()
             }  
            }},
            }
 


function handleWins() { 
let playerStatus = Player.initialPlay
if(playerStatus){
   Player.initialPlay = false;
   Player.addWin()
   Player.addStar()
 

}
else {
  if(Player.legend !== true) {
     Player.bonusGiver()
     Player.setLegend()


  }
  //  Player.addWin()
  // Player.addStar()
  
    // console.log( Player.stateWin, Player.currRank, Player.currStar, Player.legend)
  }}

function handleLose() {
  let playerStatus = Player.initialPlay
   if(playerStatus === true) {
    Player.initialPlay = false;
 
 if (Player.currRank >= 1 && Player.currRank <= 20) {
   Player.minusStar()
 
 } 
 if(Player.currRank > 20 ) {
  //try to nest the if block here to get zero and non-zero
  if(Player.currStar === 0) {
    Player.currRank--
    return Player.currStar = starsOnRanks(Player.currRank) - 1
  } else {
    Player.minusStar()
   }
    
  
  }
}

  else {
        
 if (Player.currRank >= 1 && Player.currRank <= 20) {
  Player.minusStar()
 
} 
if(Player.currRank > 20 ) {
//try to nest the if block here to get zero and non-zero
 if(Player.currStar === 0) {
  Player.currRank--
  Player.currStar = starsOnRanks(Player.currRank) - 1
 } else {
  Player.minusStar()

}
  

}
  }

}

function analyseSeqofMathes( gameSeqArr = []) {
gameSeqArr.map(letter => {
   switch (letter) {
    case 'W':
      return handleWins()
  case 'L': return handleLose()
    default: return ''
     
  }
}) 
if(Player.legend) {
  console.log('Legend')
} else {
  console.log(Player.currRank)

}

 }

analyseSeqofMathes(arrayOfSeq)

 



 