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
    document.getElementById('good').innerHTML = ('good3')
    document.getElementById('bad').innerHTML = ('This year had many significant earthquakes in Nicaragua, Turkey, Iraq, and many other tragedies like terrorist attacks in Isreal!')

  } else if (date >= 48) {
    document.getElementById('good').innerHTML = ('good4')
    document.getElementById('bad').innerHTML = ('bad4')
  }
}

