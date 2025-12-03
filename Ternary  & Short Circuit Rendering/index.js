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
  isPinned: false
}

const noteText = `
Title: ${note.title}
Status: ${note.isPinned ? '📌 Pinned Note' : 'Regular Note'}
Last Edited: ${new Date(note.timestamp).toLocaleString()}`

console.log(noteText)

// short circuit
// first operand: false is falsey so it will not do what is on the right
console.log(false && 'Hello')

console.log(null && 'Hello')
console.log(undefined && 'Hello')
console.log(0 && 'Hello')

console.log(true && 'Hello')

const isLoggedIn = true

function showWelcome() {
  // if all operands are true show the one that is right most
  // if one is falsey stop there and return the falsey
  // if not (i.e. it is truthy), then proceed to the right
  // returns the first falsey
  return isLoggedIn && 'Welcome, User' && false && undefined && 'da rightest'

  // can do it this way but short circuit is used more in react
  // return isLoggedIn ? 'Welcome, User' : ''
}

console.log(showWelcome())
