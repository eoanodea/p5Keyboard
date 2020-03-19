let letters = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]; 

let whiteNotes = []

let blackNotes = []
let blackNotePositions = [50, 120, 260, 330, 400]

let currentLetter;

/**
 * @function setup()
 * 
 * @description
 * For each letter in the letters array,
 * Check if the letter contains a #
 * If not, add the letters into the whiteNotes array
 * 
 * Else, add the letters to the blackNotes array
 * Take the xPositions from the blacknotesPositions array 
 */
function setup() {
  createCanvas(550, 600);
  
  whiteNotes = letters.filter(letter => !letter.includes("#"))
  .map((letter, i) => {
    return new WhiteNote(letter, (i*70), 300)
  })
  
  blackNotes = letters.filter(letter => letter.includes("#"))
  .map((letter, i) => {    
    return new BlackNote(letter, blackNotePositions[i], 300)
  })

  currentLetter = calculateRandomLetter()
}

/**
 * @function calculateRandomLetter()
 * 
 * @description calculates a random letter from
 * the backNotes and whiteNotes array
 * 
 * @returns a letter with it's class reference and position
 */
function calculateRandomLetter() {
  let randomLetter = random(letters)

  const letterClass = randomLetter.includes("#")
  ? blackNotes.filter(blackNote => blackNote.letter === randomLetter)
  : whiteNotes.filter(whiteNote => whiteNote.letter === randomLetter)

  return letterClass[0]
}

/**
 * @function draw():
 * Runs every frame
 * 
 * Sets the canvas background color
 * 
 * Renders the whiteNotes
 * 
 * Renders the blackNotes
 * 
 * Renders the current Letter text and box
 */
function draw() {
  background(51, 204, 255);

  whiteNotes.map(note => {
    note.render()
  })

  blackNotes.map(note => {
    note.render()
  })

  fill (255, 220, 200);
  strokeWeight (4);
  rect (225,100, 100, 100);
  fill(0)
  text(currentLetter.letter, 275, 150)

}
 
/**
 * @function mousePressed()
 * 
 * @description Runs when the mouse is pressed
 * When running, checks it the mouseX & mouseY
 * are within the position of the current letter's 
 * position
 * 
 * If so, set the current letter to active,
 *  and calculate a new random letter
 */
function mousePressed() {
  cursor(HAND);
  if(
    mouseX >= currentLetter.position.x
    && mouseX <= currentLetter.position.x + 70
    && mouseY >= currentLetter.position.y
    && mouseY <= currentLetter.position.y + 400
    ) {
      currentLetter.isActive = true
      currentLetter = calculateRandomLetter()
    } else console.log('wrong')
}

function mouseReleased() {
    cursor(ARROW);
}

