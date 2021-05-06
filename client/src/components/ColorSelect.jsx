import React from 'react'
import { theme } from '../styles/theme'
import { capitalize } from '../utils/helpers'
import { fadeIn, fadeInHalf } from '../styles/animations'
import { device } from '../styles/theme'
import styled from 'styled-components/macro'

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacingXXS};
`

const ColorItem = styled.div`
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${props => props.color};
  border-radius: 50%;
  cursor: pointer;

  &.selected:before {
    content: '';
    width: 110%;
    height: 110%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: transparent;
    border: 3px solid ${props => props.color};
    border-radius: 50%;
    z-index: -1;
    opacity: 0.5;
    animation: ${fadeInHalf} 0.3s ease forwards;
  }

  &.selected:after {
    content: '✔';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${props => props.black};
    font-size: 1.6rem;
    animation: ${fadeIn} 0.3s ease forwards;
    color: #fff;
  }

  @media ${device.mobileXS} {
    width: 2rem;
    height: 2rem;

    &.selected:after {
      font-size: 1.2rem;
    }
  }
`

export const ColorSelect = ({ color, setColor }) => {
  const colorOptions = Object.keys(theme.colors).map(color => ({
    value: color,
    label: capitalize(color),
    color: theme.colors[color]
  }))

  return (
    <SelectContainer>
      {colorOptions.map(colorOption => (
        <ColorItem
          key={colorOption.value}
          onClick={() => setColor(colorOption.value)}
          color={colorOption.color}
          title={colorOption.label}
          className={colorOption.value === color ? 'selected' : ''}
        />
      ))}
    </SelectContainer>
  )
}
