let date = 0

document.getElementById('button').addEventListener('click', button)

function button () {
  document.getElementById('good').style.color = 'green'
  document.getElementById('bad').style.color = 'red'
  date = document.getElementById('input').value
  parseInt(date)
  if (date >= 51) {
    document.getElementById('good').innerHTML = (' in 1970, the famous apollo 13 mission was ago, it was April 11th, 1970, when the spaceship was first launched, and on April 17th, 1970, is when it first made contact on the moon, making it one of the most significant breakthroughs in space travel! ')
    document.getElementById('bad').innerHTML = (' One bad thing that happened in 1970, was that President, Richard Nixon, ordered and invasion in Cambodia, which made the Vietnam war, significantly worse. ')
  } else if (date >= 50) {
    document.getElementById('good').innerHTML = ('This year was known to be one of the years that started the digital age due to the reason that the microprocessor was first invented.')
    document.getElementById('bad').innerHTML = ('This is not a bad fact, but this was the year that a bad man, who was a famous serial killer, Charles Manson, was arrested, and where he was put in jail.')
  } else if (date >= 49) {
    document.getElementById('good').innerHTML = ('There was a New Space Shuttle program that was released to the general public, which would help humans take leaps in the space industry.')
    document.getElementById('bad').innerHTML = ('This year had many significant earthquakes in Nicaragua, Turkey, Iraq, and many other tragedies like terrorist attacks in Isreal!')
  } else if (date >= 48) {
    document.getElementById('good').innerHTML = ('The Famous Skylab is launched, and also the sears tower is done construction, and this is also the year that President Richard Nixon starts his second term as president.')
    document.getElementById('bad').innerHTML = ('Spiro Agnew, who was vice president of America, resigned from his Vice President, Roll.')
  } else if (date >= 47) {
    document.getElementById('good').innerHTML = ('good5')
    document.getElementById('bad').innerHTML = ('bad5')
  } else if (date >= 46) {
    document.getElementById('good').innerHTML = ('good6')
    document.getElementById('bad').innerHTML = ('bad6')
  } else if (date >= 45) {
    document.getElementById('good').innerHTML = ('good7')
    document.getElementById('bad').innerHTML = ('bad7')
  } else if (date >= 44) {
    document.getElementById('good').innerHTML = ('good8')
    document.getElementById('bad').innerHTML = ('bad8')
  } else if (date >= 43) {
    document.getElementById('good').innerHTML = ('good9')
    document.getElementById('bad').innerHTML = ('bad9')
  } else if (date >= 42) {
    document.getElementById('good').innerHTML = ('good10')
    document.getElementById('bad').innerHTML = ('bad10')
  }
}
