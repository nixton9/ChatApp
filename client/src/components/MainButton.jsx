import React from 'react'
import styled from 'styled-components/macro'

const Button = styled.button`
  min-width: ${props => (props.small ? '10rem' : '14rem')};
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.white};
  background: ${props => (props.ghost ? 'transparent' : props.theme.accent)};
  padding: ${({ theme }) => theme.spacingXS};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  cursor: pointer;

  &:disabled {
    cursor: unset;
  }
`

export const MainButton = ({ children, onClick, ghost, small, ...props }) => (
  <Button
    onClick={onClick}
    className="main-btn"
    ghost={ghost}
    small={small}
    {...props}
  >
    {children}
  </Button>
)
