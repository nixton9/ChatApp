import React from 'react'
import { ReactComponent as SendIcon } from '../assets/icons/send.svg'
import { fadeIn } from '../styles/animations'
import styled from 'styled-components/macro'

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 1.3rem;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.accent};
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease forwards;
  transform-origin: center;
  transition: transform 0.25s ease;

  svg {
    width: 2.5rem;
  }

  &:active {
    transform: translateY(-50%) scale(0.7);
  }
`

export const SendButton = () => (
  <Button className="send-btn" data-test-id="send-button">
    <SendIcon />
  </Button>
)
