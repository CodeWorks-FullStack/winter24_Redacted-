const redactedWordList = [
  'codeworks',
  "mc donald's",
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
  'county',
  'a'
]


export function REDACT(text) {
  let textArr = text.split(' ')
  let out = []
  textArr.forEach(word => {
    if (redactedWordList.includes(word.toLowerCase())) {
      out.push(Array(word.length).join("&#x2588"))
    } else {
      out.push(word)
    }
  })
  return out.join(' ')
}