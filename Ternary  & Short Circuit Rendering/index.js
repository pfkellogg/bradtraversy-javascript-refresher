const number = 5
// let message

// if (number % 2 === 0) {
//   message = 'even'
// } else {
//   message = 'odd'
// }

const message = number % 2 === 0 ? 'Even Number' : 'Odd Number'

console.log(message)

const note = {
  title: 'Meeting Notes',
  content: 'Discuss Project Roadmap',
  timestamp: Date.now(),
  isPinned: true
}

const noteText = `
Title: ${note.title}
Content: ${note.content}
Timestamp: ${new Date(note.timestamp).toLocaleString()}
Status: ${note.isPinned ? '📌 Pinned Note' : 'Regular Note'}`

console.log(noteText)

// short circuit
// false is falsey so it will not show what is on the right
console.log(false && 'Hello')
console.log(true && 'Hello')

const isLoggedIn = true

function showWelcome() {
  return isLoggedIn && 'Welcome, User' && false && 'da rightest'
}

console.log(showWelcome())
