import React from 'react'
import styled from 'styled-components/macro'

const Button = styled.button`
  min-width: 14rem;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontBold};
  color: ${({ theme }) => theme.white};
  background: ${({ theme }) => theme.accent};
  padding: ${({ theme }) => theme.spacingXS};
  border-radius: ${({ theme }) => theme.roundedBorderRadius};
  cursor: pointer;

  &:disabled {
    cursor: unset;
  }
`

export const MainButton = ({ children, onClick, ...props }) => (
  <Button onClick={onClick} className="main-btn" {...props}>
    {children}
  </Button>
)
