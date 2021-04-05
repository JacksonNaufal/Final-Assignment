const year = 2021
let date = 0

document.getElementById('button').addEventListener('click', button)




function button () {
  date = document.getElementById('input').value
  parseInt(date)
 if((date >= 51) || (date >= 1970))
 {
   document.getElementById('good').innerHTML = (' in 1970, the famous apollo 13 mission was ago, it was April 11th, 1970, when the spaceship was first launched, and on April 17th, 1970, is when it first made contact on the moon, making it one of the most significant breakthroughs in space travel! ')
  document.getElementById('bad').innerHTML = (' One bad thing that happened in 1970, was that President, Richard Nixon, ordered and invasion in Cambodia, which made the Vietnam war, significantly worse. ')
 }
 else if ((date >= 50) || (date >= 1971)) {
   document.getElementById('good').innerHTML = (' good2 ')
  document.getElementById('bad').innerHTML = (' bad2 ')


 } else if ((date >= 49) || (date >= 1972)) {
   document.getElementById('good').innerHTML = (' good3 ')
  document.getElementById('bad').innerHTML = (' bad3 ')


 } else if ((date >= 48) || (date >= 1973)) {
   document.getElementById('good').innerHTML = (' good4 ')
  document.getElementById('bad').innerHTML = (' bad4')
 }
}
