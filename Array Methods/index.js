// map()

const notes = [
  {
    title: 'Meeting Notes',
    content: 'Discuss project roadmap',
    isPinned: true
  },
  { title: 'Grocery List', content: 'Buy milk, eggs, bread', isPinned: false },
  {
    title: 'Workout Plan',
    content: 'Push day: Bench, Shoulder Press',
    isPinned: true
  },
  { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos', isPinned: false }
]

// const noteTitles = notes.map((note, index) => `${index + 1}. ${note.title}}`)

// console.log(noteTitles)

// filter() - like map() but runs a condition and returns to new array if the condition is met

// const pinnedNotes = notes.filter(note => note.isPinned)
const pinnedNotes = notes.filter(note => note.isPinned).map(note => note.title)

// console.log(pinnedNotes) // [ { title: "Meeting Notes", content: "Discuss project roadmap", isPinned: true } ]
//
// reduce()

const numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((total, number) => {
  return total + number
}, 0)

console.log(sum) // 15

totalCharacters = notes.reduce((total, note) => {
  return total + note.content.length
}, 0)

console.log(totalCharacters)

// foreach - does not return but you can do something in the function
notes.forEach(note => {
  console.log(note.title)
})
