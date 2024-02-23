// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
    let newS = s.split(' ')
    newS.sort((a,b)=>{
      return a.length - b.length
    })
    return newS[0].length
  }