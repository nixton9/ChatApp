export const capitalize = name =>
  name ? name.replace(/(^|\s)\S/g, l => l.toUpperCase()) : ''

export const getUsersNamesString = users => {
  const usersNames = users.map(user => capitalize(user.name))
  if (users.length < 2) {
    return usersNames.join('')
  } else if (users.length <= 5) {
    const lastName = usersNames.pop()
    return `${usersNames.join(', ')} and ${lastName}`
  }
  return `${usersNames.splice(0, 5).join(', ')} and ${users.length - 5} more`
}

export const getCurrentHour = () => {
  const today = new Date()
  const hours = ('0' + today.getHours()).slice(-2)
  const minutes = ('0' + today.getMinutes()).slice(-2)

  return `${hours}:${minutes}`
}

export const parseFileName = file => {
  if (file.length > 10) {
    const split = file.split('.')
    return split[0].substring(0, 10) + '...' + split[1]
  }
  return file
}
