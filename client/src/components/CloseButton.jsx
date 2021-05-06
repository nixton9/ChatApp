import React from 'react'
import styled from 'styled-components/macro'

const CloseBtn = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    props.transparency ? 'rgba(96, 96, 96, 0.4)' : 'transparent'};
  border-radius: 50%;
  transform: rotate(45deg);
  cursor: pointer;
  transition: transform 0.3s ease;

  span {
    color: ${({ theme }) => theme.white};
    font-size: 2.7rem;
    font-weight: ${({ theme }) => theme.fontSemiBold};
    transform: translate(0px, -3px);
  }

  &:hover {
    transform: rotate(45deg) scale(1.15);
  }
`

export const CloseButton = ({ onClick, transparency }) => (
  <CloseBtn onClick={onClick} transparency={transparency} className="close-btn">
    <span>+</span>
  </CloseBtn>
)
