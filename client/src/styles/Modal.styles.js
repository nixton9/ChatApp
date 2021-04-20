import styled from 'styled-components/macro'
import { fadeIn } from './animations'

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s ease;
`

const ModalContainer = styled.div`
  position: fixed;
  max-width: 40rem;
  top: 50%;
  left: 0;
  right: 0;
  margin: 0 auto;
  transform: translateY(-50%);
  background: ${({ theme }) => theme.clearerBackground};
  padding: ${({ theme }) => theme.spacingS};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  box-shadow: ${({ theme }) => theme.bigBoxShadow};
  z-index: 11;
`

const ModalTitle = styled.h2`
  color: ${({ theme }) => theme.title};
  font-size: 3.5rem;
  font-weight: ${({ theme }) => theme.fontBold};
`

const ModalContent = styled.div`
  position: relative;
  min-height: 25rem;

  .loading-spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .error {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
  }
`

const ModalForm = styled.form`
  margin-top: ${({ theme }) => theme.spacingS};
`

const InputWrapper = styled.div`
  margin-top: ${({ theme }) => theme.spacingS};
`

const ModalLabel = styled.label`
  color: ${({ theme }) => theme.text1};
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.fontSemiBold};
  display: block;
`

const ModalInput = styled.input`
  width: 100%;
  height: 5rem;
  color: ${({ theme }) => theme.text1};
  background: ${({ theme }) => theme.text5};
  font-weight: ${({ theme }) => theme.fontMediumw};
  padding: ${({ theme }) => theme.spacingXS};
  margin-top: ${({ theme }) => theme.spacingXXS};
  border-radius: ${({ theme }) => theme.mainBorderRadius};
  border: none;

  ::placeholder {
    color: ${({ theme }) => theme.text2};
  }

  :-ms-input-placeholder {
    color: ${({ theme }) => theme.text2};
  }

  ::-ms-input-placeholder {
    color: ${({ theme }) => theme.text2};
  }
`

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: ${({ theme }) => theme.spacingM};
`

export const Styled = {
  ModalOverlay,
  ModalContainer,
  ModalTitle,
  ModalContent,
  ModalForm,
  InputWrapper,
  ModalLabel,
  ModalInput,
  ButtonContainer
}
