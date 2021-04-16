let users = []

const addUser = ({ id, name, color, room }) => {
  name = name.trim().toLowerCase()
  room = room.trim().toLowerCase()

  const existingUser = users.find(
    user => user.room === room && user.name === name
  )

  if (!name || !room) return { error: 'Username and room are required.' }
  if (existingUser) return { error: 'This nickname is taken. Try another one.' }

  const user = { id, name, color, room }
  users.push(user)

  return { user }
}

const updateUser = ({ id, name, color, room }) => {
  const existingUser = users.find(user => user.room === room && user.id === id)
  if (!existingUser) return { error: 'This user does not exist.' }

  name = name.trim().toLowerCase()
  room = room.trim().toLowerCase()

  if (!name || !room) return { error: 'Username and room are required.' }
  if (
    users.find(
      user => user.room === room && user.name === name && user.id !== id
    )
  ) {
    return { error: 'This nickname is taken. Try another one.' }
  }

  const user = { id, name, color, room }
  const newUsers = [...users.filter(user => user.id !== id), user]

  users = newUsers

  return { user }
}

const removeUser = id => {
  const index = users.findIndex(user => user.id === id)

  if (index !== -1) return users.splice(index, 1)[0]
}

const getUser = id => users.find(user => user.id === id)

const getUsersInRoom = room => users.filter(user => user.room === room)

module.exports = { addUser, updateUser, removeUser, getUser, getUsersInRoom }
