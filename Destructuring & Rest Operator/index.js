// Destructuring Arrays
// Array of note objects
const notes = [
  { title: 'Meeting Notes', content: 'Discuss project roadmap' },
  { title: 'Grocery List', content: 'Buy milk, eggs, bread' },
  { title: 'Workout Plan', content: 'Push day: Bench, Shoulder Press' },
  { title: 'Recipe Ideas', content: 'Pasta, Salad, Tacos' }
]

const [firstNote, ...otherNotes] = notes

// console.log(firstNote)
// console.log(otherNotes)

// Destructuring Objects

const note = {
  title: 'Meeting Notes',
  content: 'Discuss project roadmap',
  isPinned: true
}

// curly braces
// pull out what properties I want
// const { title, isPinned } = note

// rename a property
const { title: noteTitle, isPinned } = note
// console.log(isPinned, noteTitle)

function NoteCard({ title, content }) {}

// Nested Destructuring
const user = {
  name: 'Ben',
  address: { city: 'Boston', state: 'MA' },
  // arrays in objects
  hobbies: ['Movies', 'Music', 'Sports']
}

const {
  name,
  address: { city, state },
  hobbies: [hobby1, ...otherHobbies]
} = user

// console.log(name, city, state)
console.log(hobby1, otherHobbies)
