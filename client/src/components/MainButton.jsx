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
  transition: all 0.3s ease;

  &:disabled {
    cursor: unset;
  }

  &:hover,
  &:active {
    background: ${props =>
      props.ghost ? props.theme.background : props.theme.accent};
    filter: ${props => (props.ghost ? 'contrast(1)' : 'contrast(1.5)')};
  }
`

export const MainButton = ({ children, onClick, ghost, small, ...props }) => (
  <Button
    onClick={onClick}
    className="main-btn"
    ghost={ghost}
    small={small}
    {...props}
    data-test-id="main-button"
  >
    {children}
  </Button>
)
