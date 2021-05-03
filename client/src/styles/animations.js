import { keyframes } from 'styled-components/macro'

export const fadeIn = keyframes`
  0% { 
    opacity: 0;
  } 100% { 
    opacity: 1;
  }
`

export const fadeInHalf = keyframes`
  0% { 
    opacity: 0;
  } 100% { 
    opacity: .5;
  }
`

export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const pop = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`
