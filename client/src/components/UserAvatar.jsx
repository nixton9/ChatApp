import React from 'react'
import { theme } from '../styles/theme'
import { capitalize } from '../utils/helpers'
import styled from 'styled-components/macro'

const Avatar = styled.div`
  width: ${props =>
    props.size === 'xs' ? '2.6rem' : props.size === 'sm' ? '3rem' : '4rem'};
  height: ${props =>
    props.size === 'xs' ? '2.6rem' : props.size === 'sm' ? '3rem' : '4rem'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.color};
  border: ${props =>
      props.size === 'xs' || props.size === 'sm' ? '2px' : '3px'}
    solid ${({ theme }) => theme.background};
`

const AvatarText = styled.h6`
  color: ${({ theme }) => theme.white};
  font-size: ${props =>
    props.size === 'xs' ? '1.3rem' : props.size === 'sm' ? '1.6rem' : '1.9rem'};
  font-weight: ${({ theme }) => theme.fontSemiBold};
`

export const UserAvatar = ({ name, color, size = 'md', onClick }) => (
  <Avatar
    color={theme.colors[color] || theme.accent}
    className="avatar"
    title={capitalize(name)}
    size={size}
    onClick={onClick}
  >
    <AvatarText size={size}>
      {name ? name.substr(0, 1).toUpperCase() : '?'}
    </AvatarText>
  </Avatar>
)
