const redactedWordList = [
  'codeworks',
  'mc', "donald's",
  'being',
  'saweetie',
  'potatoe',
  'chocky',
  'milk',
  'happy',
  'the',
  'chicken',
  'silver',
  'g-force',
  'psychic',
  'orangutan',
  'establishment',
  'local',
  'ada',
  'blue',
  'eyes',
  'cinamaroll',
  'boise',
  'building',
  'tree',
  'shooting',
  'videos',
  'objects',
  'craft',
  'media',
  'emanating',
  'sighting',
  'campus',
  'county',
  'a'
]


// NOTE this is some real special sauce
export function REDACT(text) {
  let textArr = text.split(' ')// split text into an array of words, separated by space
  let out = []
  textArr.forEach(word => { // loop through words
    if (redactedWordList.includes(word.toLowerCase())) { // if word is in redacted list
      out.push("&#x2588;".repeat(word.length)) // add "blocks"(&#x2588) equal to the works length
    } else {
      out.push(word) // add original word
    }
  })
  return out.join(' ') // combine the blocks and original words into a new string.
}