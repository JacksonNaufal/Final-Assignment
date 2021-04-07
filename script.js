let date = 0
const year = 2021
let age = 0
let number = 0
let guess = 0
const birth = 51
const min = 21
// These are Variables that allow the program to know what the value of certain words are if they are used correctly, like, year = 2021, which allows my code to know that the word "year" -s value is equivalent to 2021.

document.getElementById('button').addEventListener('click', button)
document.getElementById('button2').addEventListener('click', button2)
// These are event listeners. These allow the program to function, whether it is letting the program know what to "click," and they also gather the information to know what function you want to command when you click a certain button.

while (guess > birth || guess < min) {
  guess = prompt('Enter your age!')
  guess = parseInt(guess)
  if (guess < min) {
    alert('You are to young for this programs only ages between the ages 21 and 51 are elligible!')
  } else if (guess > birth) {
    alert('You are to old for this program, only ages between 21 and 51 are elligible.')
  } else if (guess < birth || guess < min) {
    alert('You are within the right age to use this program (ages are 21 - 51)')
  } else if (guess === 'Ok') {
    // user didnt type anything
  } else if (guess === 'Cancel') {
    // user clicked cancel
  }
}
alert('You shall proceed!')

// These are while loops, where if you use variables, and you import them into an equation like if ones greater than the other, etc. It will know what sort of number or words you chose, and if the user guesses the write number/ word, it will let them enter your website, but if they enter the wrong information, it might let them enter depending on how you want your program/website to work.

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
    document.getElementById('good').innerHTML = ('The Soviet Union, launches one of there space stations, which is called the Salyut-4 Space Station, and famous author Stephen King, published his debut Book!')
    document.getElementById('bad').innerHTML = ('President Richard Nixon, resignes due to a famous watergate scandal that arose during his Presidency!')
  } else if (date >= 46) {
    document.getElementById('good').innerHTML = ('The Vietnam war Finally came to a close, on April 30th, Egypt reopened the Suez Canal, after 8 years of closure, which helped the worlds global trade significantly!')
    document.getElementById('bad').innerHTML = ('Cambodia, and South Vietnam, both fell into communism, which was a loss of years of hard work, making some aspects of the Vietnam war useless, and it basically revoked almost all of their progress.')
  } else if (date >= 45) {
    document.getElementById('good').innerHTML = ('Jimmy Carter was Elected President, Conrail began, and also the famous Viking 2 Landed on mars, making its touchdown September 3rd!')
    document.getElementById('bad').innerHTML = ('This was the year, the famous Axe Murder Incident happened in North Korea, which was shocking and scary for some at the time.')
  } else if (date >= 44) {
    document.getElementById('good').innerHTML = ('Space Mountain in Disneyland opens, and to this day, it is still the most popular attraction for Disneyland!')
    document.getElementById('bad').innerHTML = ('The Aeroflot Ilyushin plane crash in Cuba, killing 69 people, and also a demonstration and coup attempt in Angola takes place which afterwards thousands were killed by of Cuban Forces. ')
  } else if (date >= 43) {
    document.getElementById('good').innerHTML = ('Smallpox was finally eradicated, which means it was put to an end, saving and helping hundreds of thousands of people that could have been affected by it in the future!')
    document.getElementById('bad').innerHTML = ('Aldo Moro, who was thought by many to be kidnapped, was killed, he was and italian statesman, and he was also the 38th Prime minister od italy.')
  } else if (date >= 42) {
    document.getElementById('good').innerHTML = ('Jimmy Carter, who was Americas president at the time, finally came to an agreement with Leonid Brezhnev, and they signed the SALT II Agreenment')
    document.getElementById('bad').innerHTML = ('A Nicaraguan National Guard soilder killed ABC TV reporter, Bill Stewart, and his interpreter Juan Espinosa. ')
  } else if (date >= 41) {
    document.getElementById('good').innerHTML = ('The miracle on ice, which was labeled after US beats the soviet Union in ice hockey!')
    document.getElementById('bad').innerHTML = ('Start of Iran, which lead to the Iran war, which lasted from 1980 - 1988, also mount ST Helens erupted which caused a lot of problems, in many ways, and although there is many more, John Lennon was assassinated!')
  } else if (date >= 40) {
    document.getElementById('good').innerHTML = ('Space Shuttle Columbia was launched to the space station on a mission, where it was successful, and it later touched down on earth again, April 14th.')
    document.getElementById('bad').innerHTML = ('The Brixton riots in London, where petrol bombs were thrown, people were injured, police were attacked, and stores were looted.')
  } else if (date >= 39) {
    document.getElementById('good').innerHTML = ('Micheal Jacksons album, thriller, was released, and also the first CD player was sold in Japan, and the times man of the year, was THE COMPUTER, and also Disneys Futuristic park EPCOT opens!')
    document.getElementById('bad').innerHTML = ('Tylenol capsules were laced with cyanide, which took the lives of 9 people in Chicago, and dutch Elm Killed millions of Elm trees, along with a global recession.')
  } else if (date >= 38) {
    document.getElementById('good').innerHTML = ('Richard Noble set the speed for the fastest speed from a car on earth which was around 600 mp/h, and around 1000 km/h')
    document.getElementById('bad').innerHTML = ('An earthquake, which was a 5.2 on the richter scale , tragically affected New York, and also a civil war broke out in Zimbabwe.')
  } else if (date >= 37) {
    document.getElementById('good').innerHTML = ('A Famous beauty Queens killer, was finally captured, and was put away in jail.')
    document.getElementById('bad').innerHTML = ('Indira Ghandi, which was Indias  Prime minister was assassinated, also UK had a miner strike, which also affected them.')
  } else if (date >= 36) {
    document.getElementById('good').innerHTML = ('The Polaroid 600, and the commodore 128 were invented.')
    document.getElementById('bad').innerHTML = ('Colombian Terrorists kill 100 people, including 11 judges, and the TWA flight 847, was hijacked, and the rainbow warrior ship sunk.')
  } else if (date >= 35) {
    document.getElementById('good').innerHTML = ('Halleys Comet was first found, and also the Oprah Winfrey show first debuted in 1986!')
    document.getElementById('bad').innerHTML = ('The Chernobyl reactor, which was a Soviet Union nuclear reactor was exploded, which released radioactive materials across Europe.')
  } else if (date >= 34) {
    document.getElementById('good').innerHTML = ('The Famous Baby M Case was announced because it had speculations, which were both positive and negative.')
    document.getElementById('bad').innerHTML = ('India Invaded pakistan, riots were breaking out in Haj, and a famous rebellion called intifada, begins')
  } else if (date >= 33) {
    document.getElementById('good').innerHTML = ('The longest undersea tunnel opens, and it is available for transportation!')
    document.getElementById('bad').innerHTML = ('A ten-day siege started in the Golden Temple, and an Iranian passenger jet was shot down by the US.')
  } else if (date >= 32) {
    document.getElementById('good').innerHTML = ('This year was a turning point in political history, all across England, and also George .W. Bush became the 41st president of the United States, and Dan Quayle became the 44th Vice President')
    document.getElementById('bad').innerHTML = ('Hurricane Hugo touched down, which cost the US about 13.5 Billion dollars in repairs, the Tiananmen massacre, which affected hundreds of people, and the Exxon Valdez oil spill.')
  } else if (date >= 31) {
    document.getElementById('good').innerHTML = ('The Hubble Space Telescope launch, which made great strands in space exploration, and the baltic finally states their independence from the Soviet Union.')
    document.getElementById('bad').innerHTML = ('1990 was a heated year in some sorts because it was the year before the Soviet Union fell apart, which started the major conflict and the Yugoslav war.')
  } else if (date >= 30) {
    document.getElementById('good').innerHTML = ('The Civil war in Cambodia finally came to a close, free elections in Taiwan were announced, and the US announced a cut back on Nuclear weapons!')
    document.getElementById('bad').innerHTML = ('Rajiv Gandhi was killed, air strikes in Iraq, and they were in the Gulf of war')
  } else if (date >= 29) {
    document.getElementById('good').innerHTML = ('Microsoft released windows 3.1, and Bill Clinton was elected as president of the United States.')
    document.getElementById('bad').innerHTML = ('There were many famous controversies in 1992, like the Sinead OConnor, who was alleged to rip up a photo of John Paul II after alleged child abuse allegations.')
  } else if (date >= 28) {
    document.getElementById('good').innerHTML = ('Canadas first-ever Prime Minister was elected, also South African leaders get the Noble Prize')
    document.getElementById('bad').innerHTML = ('Nasa loses contact with mars space observer spacecraft during august, which forced the mission to come to an abrupt end.')
  } else if (date >= 27) {
    document.getElementById('good').innerHTML = ('The famous movie "The Lion King" was released, OJ Simpson police chase happened, due to his illegal activity. ')
    document.getElementById('bad').innerHTML = ('Famous songwriter and musician Kurt Cobain committed suicide, which shocked the music industry.')
  } else if (date >= 26) {
    document.getElementById('good').innerHTML = ('The US rescues Mexicos economy, with a 20 billion dollar fund aid, Russian space station, Mir greets first Americans! ')
    document.getElementById('bad').innerHTML = ('The Rwanda massacre occurred, killing 2,000 people, and fighting escalates in Bosnia and Croatia, and finally Nerve gas attack in Tokyo subway, kills 8, and injures thousands.')
  } else if (date >= 25) {
    document.getElementById('good').innerHTML = ('Taiwan had its first presidential election, it was their first, and it was held in March. There were a Nobel Peace prize and many other space opportunities, with the STS-72 space shuttle mission and the Mars Global Surveyor!')
    document.getElementById('bad').innerHTML = ('The North America Blizzard of 1996 this blizzard was massive, and it helps up to 48 inches of snow, and it lasted from January 6th all the way to January 8th, causing 3 billion dollars in damages.. ')
  } else if (date >= 24) {
    document.getElementById('good').innerHTML = ('Famous Titanic movie premiers in the US, Oasis breaks album to record, and also Harry Potter and the philosophers stone is Published.')
    document.getElementById('bad').innerHTML = ('Famous American songwriter and singer Jeff Buckley passed away, and also Princess Diana passed away in a car crash.')
  } else if (date >= 23) {
    document.getElementById('good').innerHTML = ('John Glenn returned to space! Also, famous baseball play Mark McGwire breaks the single-season home run record!')
    document.getElementById('bad').innerHTML = ('US embassys bombings, located in Dar es salaam, Tanzania, and Nairobi, Kenya')
  } else if (date >= 22) {
    document.getElementById('good').innerHTML = ('Although 1999 was mainly bad, it had some good things, especially in scientific breakthroughs, when Chromeson 22 was deciphered, etc.')
    document.getElementById('bad').innerHTML = ('1999 was a bad year, it was horrible economic-wise, and it was also bad fighting-wise. NATO bombed Yugoslavia, Turkey was shaken by a terrible earthquake, India and Pakistan fight over Kashmir, and also Russia sweeps Chechen, with illegal forces, and many more etc.')
  } else if (date >= 21) {
    document.getElementById('good').innerHTML = ('The most famous and most infamous thing to come from the year 2000 is that the world did not end with Y2k, and during this time, it was the prime time for pop music!')
    document.getElementById('bad').innerHTML = ('The famous millennium dome was opened, but it did not last very long, Pierre Elliot Trudeau, who used to be a prime minister of Canada, passed away, also Hedy Lamarr, who was a famous actress, and Alec Guinness, who was also a famous actor, passed away.')
  }
}

// This is a function that is extremely long, with a large amount of information, basically each of these if or else if statements are associated with a number, whether that's 20, 21, 36, 41, 51, etc, and basically if the user enters these numbers, it will tell them a fun fact, written in a certain colour, that meaning if its good facts, it will be written in green, and if it is bad, it will be written in red. Furthermore, it knows what to write in green and red because I have a get element by id that directs it to a certain colour, based on what id it uses.

function button2 () {
  age = document.getElementById('input2').value
  age = parseInt(age)
  number = year - age
  document.getElementById('def').innerHTML =
  ('Were you born in')
  document.getElementById('guesser').innerHTML =
  number
}

// This is a short function, with a little bit of information, that allows my program to know that, oh, you entered a number into the input box since I'm taking the value of what's inputted into the box, then it takes the year and subtracts it by the age, which allows it to get a number that will display using the get element by id, showing the number on the inner HTML, which was also used to display the def text and the text on the other functions.
