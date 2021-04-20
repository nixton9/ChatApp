import styled from 'styled-components/macro'
import { fadeIn } from './animations'

const TextAreaContainer = styled.div`
  position: fixed;
  bottom: ${({ theme }) => theme.spacingS};
  right: ${({ theme }) => theme.spacingS};
  left: ${({ theme }) => theme.spacingS};
  min-height: 7rem;
  background: ${({ theme }) => theme.white};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.bigBorderRadius};
  box-shadow: ${({ theme }) => theme.mainBoxShadow};
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 2rem 6rem 0.5rem 7rem;
  color: ${({ theme }) => theme.text3};
  resize: none;
  border: none;
  font-weight: ${({ theme }) => theme.fontSemiBold};
  line-height: 1.9rem;

  ::placeholder {
    color: ${({ theme }) => theme.text3};
    font-weight: ${({ theme }) => theme.fontSemiBold};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text3};
    font-weight: ${({ theme }) => theme.fontSemiBold};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.text4};
    font-weight: ${({ theme }) => theme.fontSemiBold};
  }
`

const ImageContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 7rem;
  transform: translateY(-50%);

  &:hover span {
    opacity: 1;
  }

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
    background-color: ${({ theme }) => theme.text5};
    transform: rotate(45deg);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.15s ease;
    cursor: pointer;
  }
`

const Image = styled.img`
  width: 5rem;
  max-width: 100%;
  border-radius: 4px;
`

const IconButton = styled.button`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  background: transparent;
  cursor: pointer;

  svg {
    width: 2.5rem;
  }
`

const ImageInputContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);

  input {
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  svg {
    width: 3rem;
    cursor: pointer;
  }
`

const Button = styled.button`
  position: absolute;
  top: 50%;
  right: 1.3rem;
  transform: translateY(-53%);
  background: ${({ theme }) => theme.accent};
  padding: 0.75rem;
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  cursor: pointer;
  animation: ${fadeIn} 0.3s ease forwards;

  svg {
    width: 2.5rem;
  }
`

export const Styled = {
  TextAreaContainer,
  TextArea,
  ImageContainer,
  Image,
  IconButton,
  ImageInputContainer,
  Button
}
