import { UserAvatar } from '../components/UserAvatar'
import { Tooltip } from '../components/Tooltip'

export const capitalize = name =>
  name ? name.replace(/(^|\s)\S/g, l => l.toUpperCase()) : ''

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

export const generateRandomString = () =>
  Math.random().toString(36).substring(2, 5) +
  Math.random().toString(36).substring(2, 5)

export const displayUsersInRoom = (users, max) => {
  const firstUsers = users
    .slice()
    .splice(0, max)
    .map(user => (
      <>
        <Tooltip text={capitalize(user.name)}>
          <UserAvatar
            key={user.id}
            name={user.name}
            color={user.color}
            size={'xs'}
          />
        </Tooltip>
      </>
    ))

  if (users.length > max) {
    const remainingUsersNum = users.length - max
    return (
      <>
        {firstUsers}
        <Tooltip text={getUsersNamesString(users.splice(max))}>
          <UserAvatar
            key={`+${remainingUsersNum}`}
            label={`+${remainingUsersNum}`}
          />
        </Tooltip>
      </>
    )
  }
  return firstUsers
}

export const getUsersNamesString = users => {
  const usersNames = users.map(user => capitalize(user.name))
  return usersNames.join(', ')
}
