import React from 'react'
import { theme, darkTheme } from '../styles/theme'
import styled from 'styled-components/macro'

const Avatar = styled.div`
  width: ${props => (props.size === 'xs' ? '3rem' : '3.3rem')};
  height: ${props => (props.size === 'xs' ? '3rem' : '3.3rem')};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: ${props => props.bgColor};
`

const AvatarText = styled.h6`
  color: ${props => props.color};
  font-size: ${props =>
    props.isLabel ? '1.1rem' : props.size === 'xs' ? '1.3rem' : '1.5rem'};
  font-weight: ${({ theme }) => theme.fontSemiBold};
`

export const UserAvatar = ({ name, label, color, size = 'sm', onClick }) => (
  <Avatar
    bgColor={theme.colors[color] || darkTheme.lightBackground}
    className="avatar"
    size={size}
    onClick={onClick}
  >
    <AvatarText
      size={size}
      color={color ? theme.white : darkTheme.text5}
      isLabel={!!label}
    >
      {name ? name.substr(0, 1).toUpperCase() : label || '?'}
    </AvatarText>
  </Avatar>
)
