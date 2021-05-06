import styled from 'styled-components/macro'
import { device } from './theme'

const TextAreaContainer = styled.div`
  min-height: 6.7rem;
  position: fixed;
  bottom: ${({ theme }) => theme.spacingXS};
  right: ${({ theme }) => theme.spacingXS};
  left: ${({ theme }) => theme.spacingXS};
  background: ${({ theme }) => theme.lightBackground};
  border: 2px solid ${({ theme }) => theme.text4};
  padding: 0.5rem;
  border-radius: ${({ theme }) => theme.bigBorderRadius};
  box-shadow: ${({ theme }) => theme.mainBoxShadow};

  @media ${device.mobileL} {
    .send-btn svg {
      width: 2.1rem;
    }
  }
`

const TextArea = styled.textarea`
  width: 100%;
  height: 5rem;
  padding: 1.5rem 6rem 1.5rem 7rem;
  color: ${({ theme }) => theme.white};
  resize: none;
  border: none;
  font-weight: ${({ theme }) => theme.fontSemiBold};
  line-height: 2rem;
  background: transparent;
  border-radius: ${({ theme }) => theme.mainBorderRadius};

  @media ${device.mobileL} {
    height: 4rem;
  }

  @media ${device.mobileS} {
    padding: 1.5rem 5rem 1.5rem 5.5rem;
  }

  @media ${device.mobileXS} {
    font-size: 1.4rem;
  }

  ::placeholder {
    color: ${({ theme }) => theme.text3};
    font-weight: ${({ theme }) => theme.fontSemiBold};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text3};
    font-weight: ${({ theme }) => theme.fontSemiBold};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.text3};
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
  width: 4.5rem;
  max-width: 100%;
  max-height: 4.5rem;
  object-fit: cover;
  border-radius: 4px;
`

const IconButton = styled.button`
  position: absolute;
  display: flex;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  background: transparent;
  cursor: pointer;

  svg {
    width: 2.5rem;

    * {
      fill: ${({ theme }) => theme.text6};
      transition: fill 0.3s ease;
    }
  }

  &:hover {
    svg * {
      fill: ${({ theme }) => theme.white};
    }
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

    * {
      fill: ${({ theme }) => theme.text6};
      transition: fill 0.3s ease;
    }
  }

  &:hover {
    svg * {
      fill: ${({ theme }) => theme.white};
    }
  }
`

export const Styled = {
  TextAreaContainer,
  TextArea,
  ImageContainer,
  Image,
  IconButton,
  ImageInputContainer
}
