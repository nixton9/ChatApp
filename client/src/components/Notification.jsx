import React from 'react'
import styled, { keyframes } from 'styled-components'

const slideIn = keyframes`
  0% { 
    opacity: 0;
    transform: translate(-50%, -12vh);
  } 100% { 
    opacity: 1;
    transform: translate(-50%, 0);
  }
`

const NotificationContainer = styled.div`
  position: fixed;
  top: 11rem;
  left: 50%;
  padding: ${({ theme }) => theme.spacingXS};
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.lightBackground};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  box-shadow: ${({ theme }) => theme.mainBoxShadow};
  font-size: 1.4rem;
  animation: ${slideIn} 0.5s ease forwards;
`

export const Notification = ({ text }) => (
  <NotificationContainer>{text}</NotificationContainer>
)
